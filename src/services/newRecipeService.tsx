import axios from "axios";
import { IRecipe } from "../Interfaces/recipe.interface";

const URL_API = "https://backend-bonappetit.up.railway.app/api/v1/recipes";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const postRecipe = async (newRecipe: IRecipe) => {
  try {
    const result = await axios.post(URL_API, newRecipe, config);
    return result;
  } catch (error) {
    return error;
  }
};

export default postRecipe;
