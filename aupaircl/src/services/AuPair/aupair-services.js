import api from '../../utils/Http-Gateway'
const findAuPair = async (data) => {
  try {
    
    const response = await api.doPost("/profileAuPair/findAuPair", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default {
    findAuPair,
}