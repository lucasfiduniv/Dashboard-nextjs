"use client";
import { useState, useEffect } from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); // Set loading state to false immediately on component mount
  }, []); // Empty dependency array to ensure this effect runs only once, on component mount

  return (
    <div
      className={`bg-[#182237] p-4 gap-2 rounded-lg flex items-center cursor-pointer w-full ${
        isLoading ? "animate-pulse" : "hover:bg-gray-700"
      }`}
    >
      {isLoading ? (
        // Placeholder for loading state
        <div className="animate-pulse">
          <div className="bg-gray-700 rounded-full h-8 w-8"></div>
          <div className="flex flex-col gap-5 ml-3">
            <div className="bg-gray-700 h-4 w-20 rounded"></div>
            <div className="bg-gray-700 h-8 w-14 rounded"></div>
            <div className="bg-gray-700 h-4 w-36 rounded"></div>
          </div>
        </div>
      ) : (
        <>
          <MdSupervisedUserCircle size={24} />
          <div className="flex flex-col gap-5">
            <span className="font-bold text-white">Usuarios Totais</span>
            <span className="text-2xl font-semibold">100</span>
            <span className="text-sm font-normal">
              20% a mais que no periodo passado
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
