import axios from "axios";
const ARService = {
  getModel: async (hostKey, modelId) => {
    try {
      const response = await axios.get(
        `https://dev.api.invinciblemeta.ai/ar/model/package?hostKey=${hostKey}&modelId=${modelId}`
      );
      return response?.data?.data;
    } catch (error) {
      console.error(error);
      return { success: false, ...error?.response?.data };
    }
  },
};
export default ARService;
