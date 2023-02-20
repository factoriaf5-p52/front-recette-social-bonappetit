import axios from "axios";

const API_URL = "https://backendbonappetit.up.railway.app/api/v1/users";
const API_URL_LOGIN =
  "https://backendbonappetit.up.railway.app/api/v1/auth/login";

export const registerUser = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(API_URL, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(API_URL_LOGIN, data);
    const { token } = response.data;
    localStorage.setItem("token", token);
    //fill useAuth() with user values
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const findUserById = async (id: string) => {
  try {
    const response = await axios.get(API_URL + "/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
