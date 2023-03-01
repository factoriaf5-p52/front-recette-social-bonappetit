import React, { useEffect, useState } from "react";
import { useParams, Params } from "react-router-dom";
import recipeDetailService from "../services/recipeDetailService";
import ingredientService from "../services/ingredientsService";
import iconLike from "../assets/iconlike.png";
import iconViews from "../assets/views.png";
import Comment from "../assets/icon-comments.svg";
import man1 from "../assets/man1.png"
import Footer from "../components/Footer/Footer"

type Props = {};

const RecipeDetailPage = () => {
  const { id } = useParams<Params>();

  const [recipeDetail, setRecipeDetail] = useState<any>({});

  const [ingredients, setIngredients] = useState<any[]>([]);

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

  return (
    <section className="max-width:1280px  flex justify-center items-center">
      <div className="flex flex-col justify-center bg-green">
        <h1 className="flex font-bold text-2xl justify-center mt-2">Detail Recette</h1>
        <h2 className="flex mt-2 mb-2 justify-center font-bold text-xl">{recipeDetail.title}</h2>
        <div className="flex justify-center flex-row gap-8 ">
          <img className="md-{10}"src={recipeDetail.image} alt="specialty img" />
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
        
        <div className="flex justify-row justify-center gap-4 mt-4">
          <img src={iconViews} alt="views" />
          <p>123</p>
          <img src={iconLike} alt="heart" />
          <p>123</p>
          <div>Type: {recipeDetail.mealType} </div>
          <div>Difficulty: {recipeDetail.difficulty} </div>
          <div>Time: {recipeDetail.time}</div>
        </div>

        <div className="flex flex-col justify-center mb-4">
        <p className="font-medium flex justify-center mt-2">Description</p>
        <p className="flex justify-center align-items-center">{recipeDetail.description}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row gap-2 mb-1">
          <img className="w-5"src={Comment} alt="Comment cloud"/>
          <h1>Comments</h1>
          </div>

          <div className="flex flex-row">
          <img className="w-7" src={man1} alt="comment-guy" />
          <p>Tasty, fresh, spicy and nutritious dish. I tried it first in Peru and then I made it at home. I can't get enough of it! You shouldn't miss it!</p> 
          </div>

          <input type="text" placeholder="write here..." />
        </div>

      </div>
      <Footer/>
    </section>
  );
};

export default RecipeDetailPage;
