import api from '../../utils/Http-Gateway'
import apiPublic from "../utils/Http-Gateway-Public";

const findAuPair = async (data) => {
  try {
    
    const response = await apiPublic.doPost("/profileAuPair/findAuPair", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
const profileAuPair = async(data) => {
try {
  const response = await api.doPost("/profileAuPair/findAuPair", data);
} catch (error) {
  return error.response;
}
}
export default {
    findAuPair,
    profileAuPair
}