import React, { useState } from "react";
import pasta from "../assets/pasta.svg";
import dessert from "../assets/dessert.svg";
import meatballs from "../assets/meatballs.svg";
import burguer from "../assets/burguer.svg";
import salad from "../assets/salad.svg";
import salmon from "../assets/salmon.svg";
import { findAllRecipes } from "../services/recipeServices";

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
      <h1 className="font-bold text-center p-4">Recipes List</h1>
      <form className="max-w-7xl flex flex-col justify-center items-center px-20 py-5">
        <div className="flex flex-wrap gap-3">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="placeholder:italic placeholder:text-slate-400 block w-fit border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Recipe name..."
            type="text"
            name="search"
          />
          <input
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="placeholder:italic placeholder:text-slate-400 block w-fit border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Meal type..."
            type="text"
            name="search"
          />
          <button
            onClick={handleSubmit}
            className="bg-red w-fit rounded-md py-2 pl-3 pr-3 focus:outline-none text-white sm:text-sm"
          >
            Search
          </button>
        </div>
      </form>

      <h2 className="font-medium text-center">Results</h2>

      <div className="flex flex-wrap justify-center items-center px-20 py-5">
        <div className="flex flex-col text-center mt-4">
          <img src={pasta} alt="pasta" className="scale-150 p-6" />
          <h3 className="font-medium">Pasta</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={dessert} alt="dessert" className="scale-150 p-6" />
          <h3 className="font-medium">Dessert</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={meatballs} alt="meatballs" className="scale-150 p-6" />
          <h3 className="font-medium">Meatballs</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={pasta} alt="pasta" className="scale-150 p-6" />
          <h3 className="font-medium">Pasta</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={dessert} alt="dessert" className="scale-150 p-6" />
          <h3 className="font-medium">Dessert</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={meatballs} alt="meatballs" className="scale-150 p-6" />
          <h3 className="font-medium">Meatballs</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={burguer} alt="burguer" className="scale-150 p-6" />
          <h3 className="font-medium">Burguer</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={salad} alt="salad" className="scale-150 p-6" />
          <h3 className="font-medium">Salad</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={salmon} alt="salmon" className="scale-150 p-6" />
          <h3 className="font-medium">Salmon</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={burguer} alt="burguer" className="scale-150 p-6" />
          <h3 className="font-medium">Burguer</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={salad} alt="salad" className="scale-150 p-6" />
          <h3 className="font-medium">Salad</h3>
        </div>

        <div className="flex flex-col text-center mt-4">
          <img src={salmon} alt="salmon" className="scale-150 p-6" />
          <h3 className="font-medium">Salmon</h3>
        </div>
      </div>
    </>
  );
};

export default RecipeListPage;
