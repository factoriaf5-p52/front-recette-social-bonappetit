import axios from "axios";

const URL_API = "https://backend-bonappetit.up.railway.app/api/v1/files/upload";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

async function getData(img: any) {
  try {
    const response = await axios.post(URL_API, img, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default { getData };
