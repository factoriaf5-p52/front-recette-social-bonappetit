import React, { useEffect, useState } from "react";
import newRecipeService from "../services/newRecipeService";
import fileService from "../services/fileService";
import ingredientService from "../services/ingredientsService";
import { IIngredient } from "../Interfaces/ingredient.interface";
import { IRecipe } from "../Interfaces/recipe.interface";

type Props = {};

const Post = (props: Props) => {
  const [name, setName] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [mealType, setMealType] = useState<any>("");
  const [cookTime, setCookTime] = useState<any>("");
  const [difficulty, setDifficulty] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<any>("");
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("image", image);

    // //Send image and get url

    // try {
    //   const imageUpUrl = await fileService.getData(formData);
    //   console.log("image url: " + imageUpUrl.secureUrl);
    // } catch (error) {
    //   console.log(error);
    // }

    //Send form to create new recipe

    const recipeDto: IRecipe = {
      title: name,
      description: description,
      author: "63f1daa9ca0c1ab2f85fbe06",
      ingredients: [{ ingredient: "63f3307ee699fdd3da1083b8", qty: 100 }],
      time: Number(cookTime),
      is_private: false,
      tags: ["easy"],
      mealType: mealType,
      image: "",
    };

    try {
      const recipeEntered = await newRecipeService.postRecipe(recipeDto);
      console.log(recipeEntered);
    } catch (error) {}

    console.log("Form sent");
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<any | null>(null);

  const handleAddOption = () => {
    if (selectedOption && !selectedOptions.includes(selectedOption.name)) {
      setSelectedOptions([...selectedOptions, selectedOption.name]);
      setSelectedOption(null);
    }
  };

  const handleRemoveOption = (value: string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };

  const handleFileSelect = (event: any) => {
    setImage(event.target.files[0]);
  };

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
    <form
      onSubmit={handleSubmit}
      className="container mx-auto px-4 py-6 md:py-12 md:grid md:grid-cols-3 md:gap-4"
    >
      <div className="mb-4 ">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700 ">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="mealType"
          className="block mb-2 font-bold text-gray-700"
        >
          Meal Type
        </label>
        <select
          id="mealType"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]"
        >
          <option value="">Option Select</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <div className="mb-4 ">
        <label
          htmlFor="cookTime"
          className="block mb-2 font-bold text-gray-700 "
        >
          Cooking Time (mins)
        </label>
        <input
          type="text"
          id="cookTime"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="difficulty"
          className="block mb-2 font-bold text-gray-700"
        >
          Diffculty
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]"
        >
          <option value="easy">Easy</option>
          <option value="basic">Basic</option>
          <option value="medium">Meidum</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="mb-4 ">
        <label
          htmlFor="typeingredients"
          className="block mb-2 font-bold text-gray-700"
        >
          Ingredients
        </label>
        <div className="relative">
          <select
            id="select"
            name="select"
            value={selectedOption?.name || ""}
            onChange={(e) =>
              setSelectedOption(
                ingredients.find(
                  (ingredient) => ingredient.name === e.target.value
                ) || null
              )
            }
            className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]"
          >
            <option value="">Select ingredient</option>
            {ingredients.map((ingredient) => (
              <option key={ingredient._id} value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </select>
          {selectedOption && (
            <button
              type="button"
              onClick={handleAddOption}
              className="absolute inset-y-0 right-10 flex items-center px-2 text-gray-700"
            >
              {" "}
              Add{" "}
            </button>
          )}
        </div>
        {selectedOptions.length > 0 && (
          <div className="px-8 pt-6 pb-8 mb-4 w-full lg:w-1/2 mx-auto">
            <label className="font-medium">Selected ingredients:</label>
            {selectedOptions.map((ingre) => (
              <div
                key={ingre}
                className="flex items-center gap-2 p-2 bg-gray-100 rounded-md"
              >
                <span>
                  {
                    ingredients.find((ingredient) => ingredient.name === ingre)
                      ?.name
                  }
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveOption(ingre)}
                  className="flex items-center justify-center w-6 h-6 text-gray-700 rounded-full hover:bg-gray-200"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 font-bold text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-[#f1f1f1]"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          onChange={handleFileSelect}
          className="block w-full text-sm text-gray-dark border border-gray-light rounded-lg cursor-pointer bg-gray-light dark:text-gray-dark focus:outline-none dark:bg-gray-light dark:border-gray-dark dark:placeholder-gray-dark"
          id="file_input"
          type="file"
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-12 py-4 bg-[#EF3125] text-white">
          Send
        </button>
      </div>
    </form>
  );
};

export default Post;
