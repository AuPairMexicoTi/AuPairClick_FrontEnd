import api from "../utils/Http-Gateway";
import axios from "axios";
const login = async (email,password) => {
  try {
    const data ={
        email: email,
        password:  password
    }
    const response = await axios.post("http://localhost:8080/api/auth/login", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
const register= async(username,email,password,isType)=>{
    try {
        const data ={
            email: email,
            password:  password,
            username: username,
            isType : isType
        }
        const response = await axios.post("http://localhost:8080/api/userAccount/register", data);
        return response.data;
      } catch (error) {
        return error.response;
      }
}
export default {
    login,
    register
}