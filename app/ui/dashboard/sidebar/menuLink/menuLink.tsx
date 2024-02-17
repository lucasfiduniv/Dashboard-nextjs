"use client";
import { MenuLinkProps } from "@/app/interfaces/sidebarIntefaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`px-4 py-3 flex items-center gap-2 my-2 rounded-md ${
        pathname === item.path
          ? "bg-gray-500 text-white"
          : "bg-[#182237] text-white hover:bg-gray-600 hover:text-white"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
