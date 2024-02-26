"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface User {
  id?: number;
  username?: string;
  email?: string;
  phone?: string;
  img?: string;
}

interface SingleUserPageProps {
  params: {
    id: number;
  };
}

const SingleUserPage = ({ params }: SingleUserPageProps) => {
  const { id } = params;
  const [user, setUser] = useState<User>({});
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do usuário atualizados:", user);
  };

  return (
    <div className={`flex gap-10 mt-20 ${isLoading ? "animate-pulse" : ""}`}>
      <div className="w-1/5 bg-gray-800 p-8 rounded-lg">
        <div className="relative mb-4 rounded-full overflow-hidden">
          {isLoading ? (
            // Placeholder for loading state
            <div className="bg-gray-700 rounded-full h-40 w-40"></div>
          ) : (
            <Image
              src={user.img || "/avatar.svg"}
              alt=""
              layout="responsive"
              objectFit="cover"
              width={220}
              height={200}
            />
          )}
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            isLoading ? "hidden" : ""
          }`}
        >
          Atualizar
        </button>
        <input type="file" accept="image/*" style={{ display: "none" }} />
        <p
          className={`font-bold text-white ${
            isLoading ? "bg-gray-700 h-4 w-36 rounded" : ""
          }`}
        >
          {isLoading ? "" : user.username}
        </p>
      </div>
      <div className="w-4/5 bg-gray-800 p-8 rounded-lg">
        <p className="mb-10 font-extrabold text-xl">Informações do Usuario</p>
        <form onSubmit={handleUpdateUser} className="flex flex-col gap-4">
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username" className="text-sm text-white">
            Nome
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={isLoading ? "" : user.username || ""}
            className={`bg-gray-700 rounded-md px-4 py-2 text-white ${
              isLoading ? "h-8 w-80 rounded" : ""
            }`}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label htmlFor="email" className="text-sm text-white">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder={isLoading ? "" : user.email || ""}
            className={`bg-gray-700 rounded-md px-4 py-2 text-white ${
              isLoading ? "h-8 w-80 rounded" : ""
            }`}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor="phone" className="text-sm text-white">
            Telefone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder={isLoading ? "" : user.phone || ""}
            className={`bg-gray-700 rounded-md px-4 py-2 text-white ${
              isLoading ? "h-8 w-80 rounded" : ""
            }`}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <button
            type="submit"
            className={`bg-blue-500 rounded-md px-4 py-2 text-white mt-4 hover:bg-blue-600 ${
              isLoading ? "hidden" : ""
            }`}
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
