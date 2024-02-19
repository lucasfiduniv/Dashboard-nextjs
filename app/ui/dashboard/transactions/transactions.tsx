import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[#182237] p-8 rounded-md">
      <h2 className="mb-8 text-lg font-light text-gray-500">
        Últimas Transações
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#182237] p-4 rounded-md shadow-lg transition duration-300 hover:shadow-[3px_3px_0px_0px_rgba(0,59,255)] shadow-blue-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <Image
                src="/avatar.svg"
                alt=""
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <span>Lucas Fiduniv</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="bg-yellow-300 rounded px-3 py-1 text-sm text-gray-500">
              Pendente
            </span>
            <span className="text-sm text-gray-500">14.02.2024</span>
          </div>
          <div className="mt-2">
            <span className="text-lg text-white font-bold">R$3.200</span>
          </div>
        </div>
        <div className="bg-[#182237] p-4 rounded-md shadow-lg transition duration-300 hover:shadow-[3px_3px_0px_0px_rgba(0,59,255)] shadow-blue-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <Image
                src="/avatar.svg"
                alt=""
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <span>Lucas Fiduniv</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="bg-green-300 rounded px-3 py-1 text-sm text-gray-500">
              Completado
            </span>
            <span className="text-sm text-gray-500">15.02.2024</span>
          </div>
          <div className="mt-2">
            <span className="text-lg text-white font-bold">R$4.500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
