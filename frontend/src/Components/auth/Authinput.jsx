import React from "react";

export default function Authinput({
  name,
  type,
  placeholder,
  register,
  error,
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="w-full ml-[10px] font-semibold">
        {placeholder}
      </label>
      <div className="relative mt-2">
        <input
          type={type}
          className="w-full bg-white  focus:border-violet-400 focus:ring-2 
          focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out shadow-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
