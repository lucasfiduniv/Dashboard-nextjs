"use client";
import { useState } from "react";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    cat: "general",
    price: "",
    stock: "",
    color: "",
    size: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg mt-20">
      <p className="p-2 text-xl font-semibold">Cadastrar Produto</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <input
          type="text"
          placeholder="Titulo"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          name="cat"
          id="cat"
          value={formData.cat}
          onChange={handleChange}
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="general">Selecione a Categoria</option>
          <option value="kitchen">Cozinha</option>
          <option value="phone">Telefone</option>
          <option value="computer">Computador</option>
        </select>
        <input
          type="number"
          placeholder="Preço"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Quantidade"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Cor"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Tamanho"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="6"
          placeholder="Descrição"
          value={formData.desc}
          onChange={handleChange}
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
        <div>
          <button
            type="submit"
            className="w-full py-3 p-10 bg-teal-500 text-white rounded-lg focus:outline-none hover:bg-teal-600 transition duration-300"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
