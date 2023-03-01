import React, { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import recipeDetailService from "../services/recipeDetailService";
import ingredientService from "../services/ingredientsService";
import iconLike from "../assets/iconlike.png";
import iconoLike from '../assets/iconoLike.png'
import iconViews from "../assets/views.png";
import Comment from "../assets/icon-comments.svg";
import man1 from "../assets/man1.png"
import Footer from "../components/Footer/Footer"

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
    <section className="max-width:1280px flex justify-center items-center">
      <div className="flex flex-col justify-center h-full">
        <h1 className="flex font-bold text-2xl justify-center mt-4">Detail Recette</h1>
        <h2 className="flex mt-3 mb-3 justify-center font-bold text-xl">{recipeDetail.title}</h2>
        <div className="flex justify-center flex-row gap-5 ">
          <img className="h-60"src={recipeDetail.image} alt="specialty img" />
          <ul>
          <h3 className="mb-2 font-medium mt-8">Ingredients</h3>
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

        <div className="flex flex-col justify-center mb-4">
        <p className="font-medium flex justify-center mt-4">Description</p>
        <p className="flex text-center justify-center align-items-center mr-3 ml-3">{recipeDetail.description}</p>
        </div>

        <div className="flex flex-col mt-16 w-full items-center mr-3 ml-3">
          <div className="flex flex-row gap-2 mb-3">
          <img className="w-5"src={Comment} alt="Comment cloud"/>
          <h1>Comments</h1>
          </div>

          <div className="flex flex-row mb-3 max-w-lg mr-3 ml-3">
          <img className="h-11" src={man1} alt="comment-guy" />
          <p className="ml-2">Tasty, fresh, spicy and nutritious dish. I tried it first in Peru and then I made it at home. I can't get enough of it! You shouldn't miss it!</p> 
          </div>
          <input className="flex w-1/2 h-8 bg-gray-light" type="text" placeholder="write here..." />
          
        </div>

      </div>
      <Footer/>
    </section>
  );
};

export default RecipeDetailPage;