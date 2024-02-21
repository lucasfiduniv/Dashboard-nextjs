import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("users")) {
      return "Usuários";
    } else if (pathname.includes("products")) {
      return "Produtos";
    } else if (pathname.includes("transactions")) {
      return "Transações";
    } else {
      return pathname.split("/").pop();
    }
  };

  return (
    <div className="p-4 rounded-lg bg-[#182237] flex flex-col md:flex-row items-start justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full md:w-auto">
        <div className="font-bold text-white capitalize mb-4 md:mb-0 md:mr-4">
          {getTitle()}
        </div>

        <div className="flex items-center bg-[#283450] rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-20">
          <MdSearch className="text-white mr-2 md:mr-4" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-transparent border-none focus:outline-none text-gray-200"
          />
        </div>
      </div>
      <div className="flex md:gap-10">
        <MdOutlineChat size={20} className="text-white mr-2" />
        <MdNotifications size={20} className="text-white mr-2" />
        <MdPublic size={20} className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;
