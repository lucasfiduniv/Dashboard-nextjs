"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 rounded-lg bg-[#182237] flex items-center justify-between">
      <div className="font-bold text-white capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-20">
        <div className="flex items-center bg-[#283450] rounded-lg px-4 py-2">
          <MdSearch className="text-white" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none text-gray-200"
          />
        </div>
        <div className="flex gap-10 mr-10">
          <MdOutlineChat size={20} className="text-white" />
          <MdNotifications size={20} className="text-white" />
          <MdPublic size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
