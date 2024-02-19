const AddUserPage = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-20">
      <p className="p-2 text-xl font-semibold text-white">Cadastrar Cliente</p>
      <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <input
          type="text"
          placeholder="Nome"
          name="username"
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          required
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="tel"
          placeholder="Telefone"
          name="phone"
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value={false}>É admin?</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value={true}>É ativo?</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="6"
          placeholder="Endereço"
          className="p-4 bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-lg focus:outline-none hover:bg-teal-600 transition duration-300"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
