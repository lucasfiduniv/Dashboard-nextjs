"use client";
import { useState } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";

const transactionsData = [
  {
    id: 1,
    amount: 100,
    date: new Date(),
    description: "Compra de alimentos",
    category: "Alimentação",
    type: "despesa",
  },
  {
    id: 2,
    amount: -50,
    date: new Date(),
    description: "Pagamento de conta de luz",
    category: "Serviços",
    type: "despesa",
  },
  {
    id: 3,
    amount: -30,
    date: new Date(),
    description: "Assinatura mensal de streaming",
    category: "Entretenimento",
    type: "despesa",
  },
  {
    id: 4,
    amount: 200,
    date: new Date(),
    description: "Salário",
    category: "Trabalho",
    type: "entrada",
  },
];

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredTransactions = transactionsData.filter((transaction) => {
    const searchTermMatches =
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase());

    const typeMatches = filterType === "all" || transaction.type === filterType;

    const categoryMatches =
      filterCategory === "all" || transaction.category === filterCategory;

    return searchTermMatches && typeMatches && categoryMatches;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#182237] p-6 rounded-lg mt-6">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <Search
            placeholder="Buscar por uma transação..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          <select
            className="px-2 py-1 rounded-md bg-[#182237]"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
          <select
            className="px-2 py-1 rounded-md bg-[#182237]"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">Todas as categorias</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Serviços">Serviços</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </div>
      </div>
      {currentTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="mb-6 bg-[#182237] p-4 rounded-md hover:shadow-[3px_3px_0px_0px_rgba(0,59,255)] shadow shadow-blue-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-2 md:mb-0 flex items-center gap-4">
              <span>{transaction.description}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="md:mr-4">
                <span className="text-sm text-gray-400">Data:</span>{" "}
                <span>{transaction.date?.toLocaleDateString()}</span>
              </div>
              <div>
                <span
                  className={`text-sm ${
                    transaction.amount >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Valor: R$
                </span>{" "}
                <span>{Math.abs(transaction.amount)}</span>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-400">Categoria:</span>{" "}
            <span>{transaction.category}</span>
          </div>
        </div>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </div>
  );
};

export default TransactionsPage;
