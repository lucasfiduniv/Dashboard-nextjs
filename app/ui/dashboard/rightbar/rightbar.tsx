"use client";
import { useEffect, useState } from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from "next/image";

const Rightbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={`${isLoading ? "animate-pulse" : ""}`}>
      <div className="bg-gradient-to-t from-gray-900 to-[#182237] p-6 rounded-lg mb-6 relative flex flex-col-reverse md:flex-row items-center">
        <div className="flex-grow md:w-1/2">
          <div className="flex flex-col gap-6">
            <span className="font-bold text-white">🔥 Disponível Agora</span>
            <h3
              className={`text-white text-lg font-semibold ${
                isLoading ? "bg-gray-700 h-6 w-80 rounded" : ""
              }`}
            >
              {isLoading
                ? ""
                : "Como usar a nova versão do painel administrativo?"}
            </h3>
            <span
              className={`text-gray-300 ${
                isLoading ? "bg-gray-700 h-4 w-36 rounded" : ""
              }`}
            >
              {isLoading ? "" : "Leva 4 minutos para aprender"}
            </span>
            <p
              className={`text-gray-300 ${
                isLoading ? "bg-gray-700 h-16 w-96 rounded" : ""
              }`}
            >
              {isLoading
                ? ""
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus."}
            </p>
            <button
              className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md ${
                isLoading ? "hidden" : ""
              }`}
            >
              <MdPlayCircleFilled />
              Assistir
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 md:w-1/2">
          <Image
            className={`object-contain ${isLoading ? "opacity-20" : ""}`}
            src="/astronaut.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-gray-900 to-[#182237] p-6 rounded-lg mb-6">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">🚀 Em Breve</span>
          <h3
            className={`text-white text-lg font-semibold ${
              isLoading ? "bg-gray-700 h-6 w-96 rounded" : ""
            }`}
          >
            {isLoading
              ? ""
              : "Novas ações de servidor estão disponíveis, o pré-render parcial está chegando!"}
          </h3>
          <span
            className={`text-gray-300 ${
              isLoading ? "bg-gray-700 h-4 w-56 rounded" : ""
            }`}
          >
            {isLoading ? "" : "Aumente sua produtividade"}
          </span>
          <p
            className={`text-gray-300 ${
              isLoading ? "bg-gray-700 h-16 w-96 rounded" : ""
            }`}
          >
            {isLoading
              ? ""
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus."}
          </p>
          <button
            className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md ${
              isLoading ? "hidden" : ""
            }`}
          >
            <MdReadMore />
            Aprender
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
