"use client";
import Image from "next/image";
import { useState } from "react";

const SingleUserPage = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState({});

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("Dados do usuário atualizados:", user);
  };

  return (
    <div className="flex gap-10 mt-20">
      <div className="w-1/5 bg-gray-800 p-8 rounded-lg">
        <div className="relative  mb-4 rounded-full overflow-hidden">
          <Image
            src={user.img || "/avatar.svg"}
            alt=""
            layout="full"
            objectFit="cover"
            width={220}
            height={200}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Atualizar
        </button>
        <input type="file" accept="image/*" style={{ display: "none" }} />
        <p className="font-bold text-white">{user.username}</p>
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
            placeholder={user.username}
            className="bg-gray-700 rounded-md px-4 py-2 text-white"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label htmlFor="username" className="text-sm text-white">
            Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
            className="bg-gray-700 rounded-md px-4 py-2 text-white"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label htmlFor="username" className="text-sm text-white">
            Telefone
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
            className="bg-gray-700 rounded-md px-4 py-2 text-white"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <button
            type="submit"
            className="bg-blue-500 rounded-md px-4 py-2 text-white mt-4 hover:bg-blue-600"
          >
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
