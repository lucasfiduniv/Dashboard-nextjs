import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[#182237] p-8 rounded-md">
      <h2 className="mb-8 text-lg font-light text-gray-500">
        Últimas Transações
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-4">Nome</td>
            <td className="p-4">Status</td>
            <td className="p-4">Data</td>
            <td className="p-4">Valor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-4">
                <Image
                  src="/avatar.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                Lucas Fiduniv
              </div>
            </td>
            <td>
              <span className="bg-yellow-300 rounded px-3 py-1 text-sm text-gray-500">
                Pendente
              </span>
            </td>
            <td className="p-4">14.02.2024</td>
            <td className="p-4">R$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-4">
                <Image
                  src="/avatar.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                Lucas Fiduniv
              </div>
            </td>
            <td>
              <span className="bg-green-300 rounded px-3 py-1 text-sm text-gray-500">
                Completado
              </span>
            </td>
            <td className="p-4">15.02.2024</td>
            <td className="p-4">R$4.500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
