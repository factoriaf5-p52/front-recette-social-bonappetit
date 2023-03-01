import React, { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import recipeDetailService from "../services/recipeDetailService";
import ingredientService from "../services/ingredientsService";
import iconLike from "../assets/iconlike.png";
import iconoLike from '../assets/iconoLike.png'
import iconViews from "../assets/views.png";

type Props = {};

const RecipeDetailPage = () => {
  const { id } = useParams<Params>();
  const [recipeDetail, setRecipeDetail] = useState<any>({});
  const [ingredients, setIngredients] = useState<any[]>([]);

  const [totalLikes, setTotalLikes] = useState<number>(
    () => parseInt(localStorage.getItem(`${id}-likes`) || "0"));

  const [liked, setLiked] = useState<boolean>(
    () => Boolean(localStorage.getItem(`${id}-liked`))
  );

  const [views, setViews] = React.useState(
    () => parseInt(localStorage.getItem(`${id}-likes`) || "0"));
  

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
    localStorage.setItem(`${id}-likes`, String(totalLikes));
  }, [totalLikes, id]);


  useEffect(() => {
    if (liked) {
      localStorage.setItem(`${id}-liked`, "true");
    } else {
      localStorage.removeItem(`${id}-liked`);
    }
  }, [liked, id]);

  const handleLikeRecipe = () => {
    const likedRecipe = localStorage.getItem(`liked-${id}`);
    if (!likedRecipe) {
      setTotalLikes(prevTotal => prevTotal + 1);
      localStorage.setItem(`liked-${id}`, 'true');
      setLiked(true);
    }
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
          <img className="h-7" src={liked ? iconLike : iconoLike} alt="views" onClick={handleLikeRecipe} />
          <p>{totalLikes}</p>
          <img src={iconViews} alt="heart" onLoad={()=> {setViews(views + 1)}} />
          <p>{views}</p>
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