import api from '../../utils/Http-Gateway'
import apiPublic from "../../utils/Http-Gateway-Public";
const findHostFamily = async (data) => {
  try {
    
    const response = await apiPublic.doPost("/hostFamilyProfile/findHostFamily", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default {
    findHostFamily,
}