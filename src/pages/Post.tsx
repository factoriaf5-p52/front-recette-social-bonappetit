import React, { useState } from 'react'

type Props = {}

const Post = (props: Props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [mealType, setMealType] = useState('');
    const [foodType, setFoodType] = useState('');
    const [country, setCountry] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Formulario enviado');
        // Aquí podrías enviar los datos del formulario a un servidor
    };
    const handleCheckBox1Change = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked1(event.target.checked);
    };

    const handleCheckBox2Change = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked2(event.target.checked);
    };

    const handleCheckBox3Change = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked3(event.target.checked);
    };

    const handleCheckBox4Change = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked4(event.target.checked);
    };

    return (
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-full lg:w-1/2 mx-auto">
            <div className="mb-4 ">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700 ">Name</label>
                <input type="text" id="nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]" />
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

            <div className="mb-4">
                <label htmlFor="typeingredients" className="block mb-2 font-bold text-gray-700">Ingredients</label>
                <select id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]">
                    <option value="">Option Select</option>
                    <option value="egg">Egg</option>
                    <option value="flour">Flour</option>
                    <option value="rice">rice</option>
                    <option value="legumes">Legumes</option>
                    <option value="sugar">Sugar</option>
                    <option value="milk">Milk</option>
                    <option value="olive oil">Olive oil</option>
                    <option value="butter">Butter</option>
                </select>
            </div>

            <label htmlFor="quantity" className="block mb-2 font-bold text-gray-700">Select quantity</label>
            <form className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-md bg-[#f1f1f1]" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={isChecked1} onChange={handleCheckBox1Change} />
                        <span className="ml-2 text-sm font-medium">Fish</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={isChecked2} onChange={handleCheckBox2Change} />
                        <span className="ml-2 text-sm font-medium">Onion</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={isChecked3} onChange={handleCheckBox3Change} />
                        <span className="ml-2 text-sm font-medium">Lime</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={isChecked4} onChange={handleCheckBox4Change} />
                        <span className="ml-2 text-sm font-medium">Salt</span>
                    </label>
                </div>
            </form>

            <div className="mb-4">
                <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-[#f1f1f1]"></textarea>
            </div>
            <div className='flex justify-center' >
                <button type="submit" className="px-12 py-4 bg-[#EF3125] text-white">Send</button>
            </div>
        </form>

    );
}

export default Post