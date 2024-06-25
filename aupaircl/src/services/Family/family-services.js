import api from '../../utils/Http-Gateway'
const findHostFamily = async (data) => {
  try {
    
    const response = await api.doPost("/hostFamilyProfile/findHostFamily", data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default {
    findHostFamily,
}