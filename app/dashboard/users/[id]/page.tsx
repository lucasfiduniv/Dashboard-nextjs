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
      <div className="w-2/5 bg-gray-800 p-8 rounded-lg">
        <div className="relative w-40 h-72 mb-4 rounded-lg overflow-hidden">
          <Image
            src={user.img || "/avatar.svg"}
            alt=""
            layout="full"
            objectFit="cover"
            width={100}
            height={100}
          />
        </div>
        <p className="font-bold text-white">{user.username}</p>
      </div>
      <div className="w-3/5 bg-gray-800 p-8 rounded-lg">
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
