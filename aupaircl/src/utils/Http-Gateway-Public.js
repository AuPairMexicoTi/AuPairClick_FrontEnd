import axios from "axios";
import router from "@/router";
import Alerts from '../utils/Alerts';
import store from "../store/store";
import { decrypt , encrypt} from "./crypto";
const SERVER_URL = "http://127.0.0.1:8080/api"
const client = axios.create({
    baseURL: SERVER_URL,
    timeout: 20000
})
client.interceptors.request.use(
    function (config) {
       
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)


client.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201) {
            if (response.data.data === null) {
                return Promise.resolve(response);
            }
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    async (error) => {
        if (!error.response) {
            Alerts.showMessageSuccess("El servidor no respondio", 'error')
            localStorage.removeItem('token')
            return Promise.reject(error)
        }
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    Alerts.showMessageSuccess("Error en la peticion", "error")
                    break;
                case 401:
                    await Alerts.showMessageSuccess('Sin sesión', "error")
                        .then(() => {
                            store.commit('clearToken');
                            router.push({ name: 'unautorized' })
                        })
                    break;
                case 403:
                    Alerts.showMessageSuccess("Acceso denegado", "error")
                    .then(() => {
                        store.commit('clearToken');
                        router.push({ name: 'unautorized' })
                    })
                    break;
                case 404:
                    Alerts.showMessageSuccess("Recurso no encontrado", "error")
                    break;
                case 500:
                    Alerts.showMessageSuccess("Error en el servidor", "error")
                    break;
                case 600:
                    Alerts.showMessageSuccess("Credenciales invalidas", "error")
                    break;
                case 601:
                    Alerts.showMessageSuccess("Cuenta bloqueada temporalmente", "error")
                    break;
                case 602:
                    Alerts.showMessageSuccess("Estas a punto de bloquear tu cuenta", "warning")
                    break;
                case 599:
                    Alerts.showMessageSuccess("No has verificado tu cuenta", "error")
                    break;
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default {
    doGet: function (endPoint, config) {
        return client.get(endPoint, config);
    },
    doPost: function (endPoint, object, config) {
        return client.post(endPoint, object, config || {});
    },
    doPut: function (endPoint, object, config) {
        return client.put(endPoint, object, config || {});
    },
    doDelete: function (endPoint) {
        return client.delete(endPoint);
    },
};