import React, { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import recipeDetailService from "../services/recipeDetailService";
import ingredientService from "../services/ingredientsService";
import iconLike from "../assets/iconlike.png";
import iconViews from "../assets/views.png";

type Props = {};

const RecipeDetailPage = () => {
  const { id } = useParams<Params>();
  const [recipeDetail, setRecipeDetail] = useState<any>({});
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [totalLikes, setTotalLikes] = useState<number>(
    () => parseInt(localStorage.getItem(`${id}-visits`) || "0"));

  useEffect(() => {
    recipeDetailService
      .findOneRecipe(id)
      .then((data) => {
        setRecipeDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    ingredientService
      .getData()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(`${id}-visits`, String(totalLikes));
  }, [totalLikes, id]);
 
  const handleLikeRecipe = () => {
    setTotalLikes(prevTotal => prevTotal + 1);
  };

 

  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-screen-lg bg-green">
        <h1>{recipeDetail.title}</h1>
        <div>
          <img src={recipeDetail.image} alt="image recipe" />
          <ul>
            {recipeDetail.ingredients &&
              recipeDetail.ingredients.map((item: any, index: any) => (
                <li key={index}>
                  {ingredients &&
                    ingredients.find(
                      (ingredient) => ingredient._id === item.ingredient
                    )?.name}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <img src={iconLike} alt="views" onClick={handleLikeRecipe} />
          <p>{totalLikes}</p>
          <img src={iconViews} alt="heart" />
          <p>123</p>
          <div>Type: {recipeDetail.mealType} </div>
          <div>Difficulty: {recipeDetail.difficulty} </div>
          <div>Time: {recipeDetail.time}</div>
        </div>
        <p>Description</p>
        <p>{recipeDetail.description}</p>
        <div>
          <h1>Comments</h1>
          <div>
            <img src="" alt="comment-guy" />
            <p>commentario</p>
          </div>
          <input type="text" placeholder="write here..." />
        </div>
      </div>
    </section>
  );
};

export default RecipeDetailPage;