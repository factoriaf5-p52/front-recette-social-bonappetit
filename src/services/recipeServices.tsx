import axios from "axios";

const URL_API = "https://backend-bonappetit.up.railway.app/api/v1/recipes/";

const findAllRecipes = async () => {
  try {
    const result = await axios.get(URL_API);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default findAllRecipes;
