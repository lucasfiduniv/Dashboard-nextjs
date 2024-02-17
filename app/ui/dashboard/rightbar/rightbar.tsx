import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed">
      <div className="bg-gradient-to-t from-gray-900 to-[#182237] p-6 rounded-lg mb-6 relative">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image
            className="object-contain opacity-20"
            src="/astronaut.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">🔥 Disponível Agora</span>
          <h3 className="text-white text-lg font-semibold">
            Como usar a nova versão do painel administrativo?
          </h3>
          <span className="text-gray-300">Leva 4 minutos para aprender</span>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            <MdPlayCircleFilled />
            Assistir
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-gray-900 to-[#182237] p-6 rounded-lg mb-6">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">🚀 Em Breve</span>
          <h3 className="text-white text-lg font-semibold">
            Novas ações de servidor estão disponíveis, o pré-render parcial está
            chegando!
          </h3>
          <span className="text-gray-300">Aumente sua produtividade</span>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            <MdReadMore />
            Aprender
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
