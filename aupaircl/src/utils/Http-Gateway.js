import axios from "axios";
import Alerts from "./Alerts";
import store from "../store/store";
const SERVER_URL = "http://localhost:8080/api"
const AxiosClient = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000
})

export const getServerUrl = () => {
    return  process.env.SERVER_URL
}
AxiosClient.interceptors.request.use(
    function(config){
        const auth_token = localStorage.getItem('token')
        if(auth_token !== undefined && auth_token !== null && auth_token !== ""){
            if(!config.url.includes('auth')){
                config.headers.Authorization = `Bearer ${auth_token}`
            }
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)


AxiosClient.interceptors.response.use(
    (response) => {
        if(response.status === 200 || response.status === 201){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },
    async (error) => {
        if(!error.response){
            Alerts.showMessageSuccess("El servidor no respondio", "error");
            return Promise.reject(error)
        }
        if(error.response.status){
            switch(error.response.status){
                case 400:
                    Alerts.showMessageSuccess("Error de validacion", "error");
                    break;
                case 403:
                    Alerts.showMessageSuccess("Acceso denegado", "error");
                    break;
                case 404:
                    Alerts.showMessageSuccess("Recurso no encontrado", "error");
                    break;
                case 405:
                    Alerts.showMessageSuccess("Metodo no permitido", "error");
                    break;
                case 401:
                    Alerts.showMessageSuccess("Token expirado", "error") .then(() => {
                        store.commit('clearToken');
                        // router.push({ name: 'unautorized' })
                    });
                    break;
                case 500:
                    Alerts.showMessageSuccess("Error interno del servidor", "error");
                    break;
                case 600:
                    Alerts.showMessageSuccess("Credenciales invalidas", "error");
                    break;
                case 601:
                    Alerts.showMessageSuccess("Cuenta bloqueada temporalmente", "error");
                    break;
                case 602:
                    Alerts.showMessageSuccess("Estas a punto de bloquear la cuenta", "error");
                    break;
                default:
                
            }
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default {
    doGet: function (endPoint, config) {
        return AxiosClient.get(endPoint, config);
    },
    doPost: function (endPoint, object, config) {
        return AxiosClient.post(endPoint, object, config || {});
    },
    doPut: function (endPoint, object, config) {
        return AxiosClient.put(endPoint, object, config || {});
    },
    doDelete: function (endPoint) {
        return AxiosClient.delete(endPoint);
    },
};