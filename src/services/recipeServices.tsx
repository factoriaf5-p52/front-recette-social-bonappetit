import axios from "axios";

const URL_API =
  "https://backend-bonappetit.up.railway.app//api/v1/recipes/title/";

export const findAllRecipes = async (value: any) => {
  try {
    const result = await axios.get(URL_API + value);
    return result;
  } catch (error) {
    return error;
  }
};
