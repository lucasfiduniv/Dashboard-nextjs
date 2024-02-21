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

const TransactionsPage = ({ searchParams }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const count = transactionsData.length;
  const totalPages = Math.ceil(count / itemsPerPage);
  const page = searchParams?.page || 1;
  const showPagination = totalPages > 1 && page < totalPages;

  // Processo de filtragem das transações
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

  // Cálculo da página atual de transações
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Função para mudar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#182237] p-4 md:p-6 rounded-lg mt-6">
      <div className="mb-4">
        <Search
          placeholder="Buscar por uma transação..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 w-full md:w-auto">
          <select
            className="px-2 py-1 rounded-md bg-[#182237] w-full md:w-auto"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
        <div className="w-full md:w-auto">
          <select
            className="px-2 py-1 rounded-md bg-[#182237] w-full md:w-auto"
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
        count={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionsPage;
