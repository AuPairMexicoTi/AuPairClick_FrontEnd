import api from '../../utils/Http-Gateway'
import apiPublic from "../../utils/Http-Gateway-Public";

const findAuPair = async (data) => {
  try {
    
    const response = await apiPublic.doPost("/profileAuPair/findAuPair", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
const getProfileAuPairByEmail = async(email) => {
try {
  const response = await api.doGet(`/profile/getProfileAuPairByEmail/${email}`);
  return response.data;
} catch (error) {
  return error.response;
}
}
export default {
    findAuPair,
    getProfileAuPairByEmail
}