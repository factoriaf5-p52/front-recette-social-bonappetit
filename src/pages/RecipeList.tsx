import React, { useState } from "react";
import salmon from "../assets/salmon.png";
import { findAllRecipes } from "../services/recipeServices";
import Footer from "../components/Footer/Footer"

type Props = {};

const RecipeListPage = (props: Props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [list, setList] = useState([]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const result: any = await findAllRecipes(title);

    setList(() =>
      result.data.length > 0 ? result.data : [{ name: "Recipes not found" }]
    );
    console.log(list);
  }

  return (
    <>
      <h1 className="font-bold text-center p-4 text-2xl">Recipes List</h1>
      <form className="max-w-7xl flex flex-col justify-center items-center px-20 py-5">
        <div className="flex flex-wrap gap-3">
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
        </div>
      </form>

      <h2 className="font-medium text-center mt-6 font-bold text-xl">Results</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-6 mt-8 center-center gap-20">
        <div className="flex flex-col items-center">
          <img src={salmon} alt="pasta" className="w-{10}" />
          <h3 className="font-medium">Pasta</h3>
          <p className="font-medium">Breakfast</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="dessert" className="w-{10}" />
          <h3 className="font-medium">Dessert</h3>
          <p className="font-medium">Lunch</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="meatballs" className="w-{10}" />
          <h3 className="font-medium">Meatballs</h3>
          <p className="font-medium">Dinner</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="pasta" className="w-{10}" />
          <h3 className="font-medium">Pasta</h3>
          <p className="font-medium">Breakfast</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="dessert" className="w-{10}" />
          <h3 className="font-medium">Dessert</h3>
          <p className="font-medium">Lunch</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="meatballs" className="w-{10}" />
          <h3 className="font-medium">Meatballs</h3>
          <p className="font-medium">Dinner</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={salmon} alt="burguer" className="w-{10}" />
          <h3 className="font-medium">Burguer</h3>
          <p className="font-medium">Breakfast</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="salad" className="w-{10}" />
          <h3 className="font-medium">Salad</h3>
          <p className="font-medium">Lunch</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="salmon" className="w-{10}" />
          <h3 className="font-medium">Salmon</h3>
          <p className="font-medium">Dinner</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="burguer" className="w-{10}" />
          <h3 className="font-medium">Burguer</h3>
          <p className="font-medium">Breakfast</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="salad" className="w-{10}" />
          <h3 className="font-medium">Salad</h3>
          <p className="font-medium">Lunch</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={salmon} alt="salmon" className="w-{10}" />
          <h3 className="font-medium">Salmon</h3>
          <p className="font-medium">Dinner</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RecipeListPage;
