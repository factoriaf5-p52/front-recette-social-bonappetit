import React from "react";

import { useState } from "react";


type Props = {};

type Option = {
  value: string;
  label: string;
};
const options: Option[] = [
  { value: "option1", label: "Opción 1" },
  { value: "option2", label: "Opción 2" },
  { value: "option3", label: "Opción 3" },
];


const SocialPage = (props: Props) => {

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
    <form className="p-6">
      <div className="px-8 pt-6 pb-8 mb-4 w-full lg:w-1/2 mx-auto">
        <label htmlFor="select" className="block mb-2 font-bold text-gray-700 ">
          Selecciona una opción:
        </label>
        <div className="relative">
          <select id="select" name="select" value={selectedOption?.value || ""} onChange={(e) =>

              setSelectedOption(
                options.find((option) => option.value === e.target.value) ||
                null
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
            <button type="button" onClick={handleAddOption} className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"> Add </button>
          )}
        </div>

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
    </form>
  );
};

export default SocialPage;
