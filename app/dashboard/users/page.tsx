"use client";
import { useState, useEffect } from "react";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";

const usersData = [
  {
    id: 1,
    username: "Usuário 1",
    email: "usuario1@example.com",
    createdAt: new Date(),
    isAdmin: false,
    isActive: true,
    img: null,
  },
  {
    id: 2,
    username: "Usuário 2",
    email: "usuario2@example.com",
    createdAt: new Date(),
    isAdmin: true,
    isActive: false,
    img: null,
  },
  {
    id: 3,
    username: "Usuário 3",
    email: "usuario2@example.com",
    createdAt: new Date(),
    isAdmin: true,
    isActive: false,
    img: null,
  },
];

const UsersPage = ({ searchParams }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 1;
  const count = usersData.length;
  const totalPages = Math.ceil(count / itemsPerPage);
  const page = searchParams?.page || 1;
  const showPagination = totalPages > 1 && page < totalPages;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = usersData.filter((user) => {
    const searchTermMatches =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    return searchTermMatches;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`bg-[#182237] p-6 rounded-lg mt-6 ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      <div className="mb-4 flex justify-between items-center">
        <Search
          placeholder="Buscar por um usuário..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Link href="users/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Adicionar Usuário
          </button>
        </Link>
      </div>
      {currentUsers.map((user) => (
        <div
          key={user.id}
          className="mb-6 bg-[#182237] p-4 rounded-md hover:shadow-[3px_3px_0px_0px_rgba(0,59,255)] shadow shadow-blue-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
            <div className="mb-2 md:mb-0 flex items-center gap-4">
              {isLoading ? (
                <div className="rounded-full bg-gray-700 w-10 h-10"></div>
              ) : (
                <Image
                  src={user.img || "/avatar.svg"}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span>{isLoading ? "" : user.username}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div className="md:mr-4">
                <span className="text-sm text-gray-400">Email:</span>{" "}
                <span>{isLoading ? "" : user.email}</span>
              </div>
              <div>
                <span className="text-sm text-gray-400">Criado Em:</span>{" "}
                <span>
                  {isLoading ? "" : user.createdAt?.toString().slice(4, 16)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-400">Função:</span>{" "}
            <span>
              {isLoading ? "" : user.isAdmin ? "Administrador" : "Cliente"}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-400">Status:</span>{" "}
            <span
              className={`${
                isLoading
                  ? ""
                  : user.isActive
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {isLoading ? "" : user.isActive ? "ativo" : "inativo"}
            </span>
          </div>
          <div className="mt-4 flex gap-4">
            <Link href={`/dashboard/users/${user.id}`}>
              <button
                className={`px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white rounded-md ${
                  isLoading ? "hidden" : ""
                }`}
              >
                Ver
              </button>
            </Link>
            {/* <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className="px-4 py-2 bg-crimson text-white rounded-md">
                Deletar
              </button>
            </form> */}
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

export default UsersPage;
