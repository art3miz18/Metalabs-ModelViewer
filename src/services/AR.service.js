import axios from "axios";
const ARService = {
  getModel: async () => {
    try {
      const response = await axios.get(
        `https://dev.api.invinciblemeta.ai/ar/model`
      );
      return response?.data?.data;
    } catch (error) {
      console.error(error);
      return { success: false, ...error?.response?.data };
    }
  },
};
export default ARService;
