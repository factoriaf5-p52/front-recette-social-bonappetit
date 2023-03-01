import axios from "axios";

const URL_API = "https://backend-bonappetit.up.railway.app/api/v1/ingredients";

export async function getData() {
  try {
    const response = await axios.get(URL_API);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default { getData };
