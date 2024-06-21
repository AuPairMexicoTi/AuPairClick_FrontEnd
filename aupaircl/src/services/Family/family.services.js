import axios from "axios";
const findHostFamily = async (data) => {
  try {
    
    const response = await axios.post("http://localhost:8080/api/hostFamilyProfile/findHostFamily", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default {
    findHostFamily,
}