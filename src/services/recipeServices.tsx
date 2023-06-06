import axios from "axios";

const URL_API = "https://api-back-recette.onrender.com/api/v1/recipes/";

export const findAllRecipes = async () => {
  try {
    const result = await axios.get(URL_API);
    console.log(result.data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default { findAllRecipes };
