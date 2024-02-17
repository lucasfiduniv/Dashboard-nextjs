import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[#182237] p-4 gap-2 rounded-lg flex items-center  cursor-pointer w-full hover:bg-gray-700">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="font-bold text-white">Usuarios Totais</span>
        <span className="text-2xl font-semibold">100</span>
        <span className="text-sm font-normal">
          20% a mais que no periodo passado
        </span>
      </div>
    </div>
  );
};

export default Card;
