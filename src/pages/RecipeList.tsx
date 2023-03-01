import React, { useEffect, useState } from "react";
import salmon from "../assets/salmon.png";
import recipeService from "../services/recipeServices";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

type Props = {};

type Recipe = {
  _id: string;
  title: string;
  description: string;
  author: string;
  ingredients: Array<any>;
  time: number;
  keywords: Array<any>;
  mealType: string;
  comments: Array<any>;
  image: string;
  difficulty: string;
};

const RecipeListPage = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [list, setList] = useState<Recipe[]>([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
  }
  useEffect(() => {
    recipeService
      .findAllRecipes()
      .then((data) => {
        setList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center p-4 text-2xl">Recipes List</h1>
        <section className="max-w-screen-lg flex flex-col justify-center items-center">
          <form className="w-full flex flex-col md:flex-row  items-center justify-center px-20 py-5 gap-4">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="placeholder:italic placeholder:text-slate-400 block w-64 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Recipe name..."
              type="text"
              name="search"
            />
            <input
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="placeholder:italic placeholder:text-slate-400 block w-64 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Meal type..."
              type="text"
              name="search"
            />
            <button
              onClick={handleSubmit}
              className="bg-red w-64 rounded-md py-2 pl-3 pr-3 focus:outline-none text-white sm:text-sm"
            >
              Search
            </button>
          </form>

          <h2 className="font-medium text-center mt-6 text-xl">
            Results
          </h2>

          <div className="flex items-center justify-center flex-wrap gap-10 mx-6 my-12">
            {list.map((recipe, i) => (
              <div key={i} className="flex flex-col w-32 items-center">
                <img src={recipe.image} alt="pasta" className="w-{10}" />
                <h3 className="font-medium mt-2 text-center">
                  <Link to={`/recipes/recipe/${recipe._id}`}>
                    {recipe.title}
                  </Link>
                </h3>
                <p className="font-medium">{recipe.mealType}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecipeListPage;
