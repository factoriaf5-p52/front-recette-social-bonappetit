import axios from "axios";

const URL_API = "https://api-back-recette.onrender.com/api/v1/files/upload";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export async function sendImage(img: File) {
  const formData = new FormData();
  formData.append("file", img);

  try {
    const response = await axios.post(URL_API, formData, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default { sendImage };
