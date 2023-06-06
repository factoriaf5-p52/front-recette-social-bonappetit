import axios from "axios";
import { IRecipe } from "../Interfaces/recipe.interface";

const URL_API = "https://api-back-recette.onrender.com/api/v1/recipes";

const token = localStorage.getItem("token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const postRecipe = async (newRecipe: IRecipe) => {
  try {
    const result = await axios.post(URL_API, newRecipe, config);
    return result;
  } catch (error) {
    return error;
  }
};

export default { postRecipe };
