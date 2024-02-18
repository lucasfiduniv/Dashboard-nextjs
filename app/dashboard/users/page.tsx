"use client";
// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "@/app/lib/data";
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
];

interface UsersPageProps {
  searchParams: {
    q: string;
    page: number;
  };
}
interface UsersPageProps {}
const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const ITEMS_PER_PAGE = 10;
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const users = usersData.slice(startIndex, endIndex);

  return (
    <div className="bg-[#182237] p-6 rounded-lg mt-6">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Buscar por um usuário..." />
        <Link href="/dashboard/users/add">
          <button className=" px-4 py-2 bg-blue-600 text-white rounded-md">
            Adicionar Novo
          </button>
        </Link>
      </div>
      <table className=" w-full">
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Criado Em</td>
            <td>Função</td>
            <td>Status</td>
            <td>Ação</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-4">
                <div className="user flex items-center gap-3">
                  {user.img ? (
                    <Image
                      src={user.img}
                      alt=""
                      width={40}
                      height={40}
                      className=" rounded-full"
                    />
                  ) : (
                    <Image
                      src="/avatar.svg"
                      alt=""
                      width={40}
                      height={40}
                      className=" rounded-full"
                    />
                  )}
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Administrador" : "Cliente"}</td>
              <td>
                <div
                  className={`${
                    user.isActive ? "bg-green-500" : "bg-red-500"
                  } text-white p-2 rounded-md mr-12`}
                >
                  {user.isActive ? "ativo" : "inativo"}
                </div>
              </td>
              <td>
                <div className="buttons flex gap-4">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="button view px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white rounded-md">
                      Ver
                    </button>
                  </Link>
                  {/* <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="button delete px-4 py-2 bg-crimson text-white rounded-md">
                      Deletar
                    </button>
                  </form> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={1} />
    </div>
  );
};

export default UsersPage;
