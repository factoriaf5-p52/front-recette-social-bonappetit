import React, { useEffect, useState } from "react";
import postRecipe from "../services/newRecipeService";
import sendImage from "../services/fileService";
import getData from "../services/ingredientsService";
import { IIngredient } from "../Interfaces/ingredient.interface";
import { IRecipe } from "../Interfaces/recipe.interface";
import useAuth from "../hooks/useAuth";
import SectionTitle from "../components/SectionTitle/SectionTitle";

type Props = {};

type IngredientDto = {
  ingredient: string;
  qty: number;
};

const Post = (props: Props) => {
  const [name, setName] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [mealType, setMealType] = useState<any>("breakfast");
  const [cookTime, setCookTime] = useState<any>("");
  const [difficulty, setDifficulty] = useState<any>("easy");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  const { auth, setAuth } = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    //Send image and get url
    let imageUrlupdated =
      "https://backend-bonappetit.up.railway.app/api/v1/files/upload/1677548230291-recipe-64ed.png"; //default image if not provided
    if (image) {
      try {
        const imageUpUrl = await sendImage(image);
        console.log("image url: " + imageUpUrl.secureUrl);
        setImageUrl(imageUpUrl.secureUrl);
        imageUrlupdated = imageUpUrl.secureUrl;
        console.log("tras guardar la url: " + imageUrl);
      } catch (error) {
        console.log(error);
      }
    }

    //user id
    let userId = auth?.id || "63f1daa9ca0c1ab2f85fbe06";

    // Send form to create new recipe
    const recipeDto: IRecipe = {
      title: name,
      description: description,
      author: userId,
      ingredients: list,
      time: Number(cookTime),
      is_private: false,
      difficulty: difficulty,
      mealType: mealType,
      image: imageUrlupdated,
    };

    try {
      const recipeEntered = await postRecipe(recipeDto);
      console.log(recipeEntered);
    } catch (error) {}

    console.log("Form sent");
  };

  //Ingredients Select
  const [list, setList] = useState<IngredientDto[]>([]);
  const [selectedOption, setSelectedOption] = useState<IIngredient | null>(
    null
  );
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const handleAddOption = () => {
    if (
      selectedOption &&
      !list.some(
        (listedIngredientObject) =>
          listedIngredientObject.ingredient === selectedOption._id
      )
    ) {
      const selectedIngredient: IngredientDto = {
        ingredient: selectedOption._id,
        qty: selectedNumber,
      };

      setList([...list, selectedIngredient]);
      setSelectedOption(null);
      setSelectedNumber(1);
    }
  };

  const handleRemoveOption = (value: string) => {
    setList(list.filter((option) => option.ingredient !== value));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files ? event.target.files[0] : null;
    setImage(selectedImage);
  };

  useEffect(() => {
    getData()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <SectionTitle text="New Recipe" />
      <form
        onSubmit={handleSubmit}
        className="container mx-auto px-4 py-6 md:py-12 md:grid md:grid-cols-3 md:gap-4"
      >
        <div className="mb-4 ">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-700 ">
            Name
          </label>
          <input
            required
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
            type="number"
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
            <option value="average">Average</option>
            <option value="difficult">Difficult</option>
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
              {ingredients.map((ingredient, index) => (
                <option key={index} value={ingredient.name}>
                  {`${ingredient.name} (${ingredient.measure_unit})`}
                </option>
              ))}
            </select>
            {selectedOption && (
              <>
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-700"
                >
                  {" "}
                  Add{" "}
                </button>
                <input
                  min={1}
                  max={10000}
                  value={selectedNumber}
                  onChange={(e) => setSelectedNumber(Number(e.target.value))}
                  className="absolute inset-y-2 right-14 w-20 flex items-center px-2 text-gray-dark bg-gray-light border border-dashed border-gray-dark rounded-md"
                  type="number"
                />
              </>
            )}
          </div>
          {list.length > 0 && (
            <div className="px-8 pt-6 pb-8 mb-4 w-full mx-auto">
              <label className="font-medium">Selected ingredients:</label>
              {list.map((ingre, index) => (
                <div
                  key={index}
                  className="flex justify-center border-y bg-gray-light items-center gap-2 p-2 mt-1"
                >
                  <span>
                    {
                      ingredients.find(
                        (ingredient) => ingredient._id === ingre.ingredient
                      )?.name
                    }{" "}
                    {ingre.qty}{" "}
                    {
                      ingredients.find(
                        (ingredient) => ingredient._id === ingre.ingredient
                      )?.measure_unit
                    }
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(ingre.ingredient)}
                    className="flex items-center justify-center w-6 h-6 text-gray-700 rounded-full hover:bg-green"
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
            htmlFor="description"
            className="block mb-2 font-bold text-gray-700"
          >
            Upload image
          </label>
          <input
            onChange={handleFileSelect}
            className="block w-full text-sm text-gray-dark border border-gray-light rounded-lg cursor-pointer bg-gray-light dark:text-gray-dark focus:outline-none dark:bg-gray-light dark:border-gray-dark dark:placeholder-gray-dark"
            id="file_input"
            type="file"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-4 bg-red hover:bg-green rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
