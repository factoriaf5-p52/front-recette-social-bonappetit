import axios from "axios";

const API_URL = "https://backendbonappetit.up.railway.app/api/v1/users";
const API_URL_LOGIN =
  "https://backendbonappetit.up.railway.app/api/v1/auth/login";

const userServices = {
  async getOne() {
    return await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => data);
  },
  async newUser(data: any) {
    try {
      const response = await axios.post(API_URL, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async loginUser(data: { email: string; password: string }) {
    try {
      const response = await axios.post(API_URL_LOGIN, data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default userServices;
