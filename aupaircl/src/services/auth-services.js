import apiPublic from "../utils/Http-Gateway-Public";
const login = async (email,password) => {
  try {
    const data ={
        email: email,
        password:  password
    }
    const response = await apiPublic.doPost("/auth/login", data);
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
        const response = await apiPublic.doPost("/userAccount/register", data);
        return response.data;
      } catch (error) {
        return error.response;
      }
}
export default {
    login,
    register
}