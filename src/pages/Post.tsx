import React, { useState } from 'react'

type Props = {}

type Option = {
    value: string;
    label: string;
};
const options: Option[] = [
    { value: "egg", label: "Egg" },
    { value: "meat", label: "Meat" },
    { value: "chicken", label: "Chicken" },
    { value: "oil", label: "Oil" },
    { value: "flour", label: "Flour" },
    { value: "sugar", label: "Sugar" },
    { value: "milk", label: "Milk" },
];

const Post = (props: Props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [mealType, setMealType] = useState('');
    const [foodType, setFoodType] = useState('');
    const [country, setCountry] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Formulario enviado');
        // Aquí podrías enviar los datos del formulario a un servidor
    };
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleAddOption = () => {
        if (selectedOption && !selectedOptions.includes(selectedOption.value)) {
            setSelectedOptions([...selectedOptions, selectedOption.value]);
            setSelectedOption(null);
        }
    };

    const handleRemoveOption = (value: string) => {
        setSelectedOptions(selectedOptions.filter((option) => option !== value));
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto px-4 py-6 md:py-12 md:grid md:grid-cols-3 md:gap-4">
            <div className="mb-4 ">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700 ">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]" />
            </div>

            <div className="mb-4">
                <label htmlFor="mealType" className="block mb-2 font-bold text-gray-700">Meal Type</label>
                <select id="mealType" value={mealType} onChange={(e) => setMealType(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="foodType" className="block mb-2 font-bold text-gray-700">Food Type</label>
                <select id="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="fruit-vegetables">Fruit and vegetables</option>
                    <option value="protein">Protein</option>
                    <option value="carbohydrates">Carbohydrates</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="country" className="block mb-2 font-bold text-gray-700">Country</label>
                <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="spain">Spain</option>
                    <option value="argentina">Argentina</option>
                    <option value="peru">Peru</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="cookTime" className="block mb-2 font-bold text-gray-700">Cooking Time</label>
                <select id="cookTime" value={cookTime} onChange={(e) => setCookTime(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="fast">Fast Cooking</option>
                    <option value="medium">Meidum Cooking</option>
                    <option value="slow">Slow Cooker</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="difficulty" className="block mb-2 font-bold text-gray-700">Diffculty</label>
                <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="basic">Basic Level</option>
                    <option value="medium">Meidum Level</option>
                    <option value="high">High Level</option>
                </select>
            </div>

            <div className="mb-4 ">

                <label htmlFor="typeingredients" className="block mb-2 font-bold text-gray-700">Ingredients</label>
                <div className="relative">
                    <select id="select" name="select" value={selectedOption?.value || ""} onChange={(e) =>
                        setSelectedOption(options.find((option) => option.value === e.target.value) || null
                        )
                    }
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">

                        <option value="">Selecciona una opción</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {selectedOption && (
                        <button type="button" onClick={handleAddOption} className="absolute inset-y-0 right-10 flex items-center px-2 text-gray-700"> Add </button>
                    )}

                </div>
                {selectedOptions.length > 0 && (
                    <div className="px-8 pt-6 pb-8 mb-4 w-full lg:w-1/2 mx-auto">
                        <label className="font-medium">Opciones seleccionadas:</label>
                        {selectedOptions.map((value) => (
                            <div key={value} className="flex items-center gap-2 p-2 bg-gray-100 rounded-md">
                                <span>{options.find((option) => option.value === value)?.label}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveOption(value)}
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
                <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-[#f1f1f1]"></textarea>
            </div>


            <div className="mb-4">
                <label htmlFor="image" className="block mb-2 font-bold text-gray-700">Image</label>
                <textarea id="image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-[#f1f1f1]"></textarea>
            </div>


            <div className='flex justify-center' >
                <button type="submit" className="px-12 py-4 bg-[#EF3125] text-white">Send</button>
            </div>
        </form>

    );
}

export default Post