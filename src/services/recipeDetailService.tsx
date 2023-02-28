import axios from "axios";

const URL_API =
  "https://backend-bonappetit.up.railway.app/api/v1/recipes/recipe/";

export const findOneRecipe = async (id: string | undefined) => {
  try {
    const result = await axios.get(URL_API + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default { findOneRecipe };
