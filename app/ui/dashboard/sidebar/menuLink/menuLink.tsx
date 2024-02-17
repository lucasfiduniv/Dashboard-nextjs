"use client";
import { MenuLinkProps } from "@/app/interfaces/sidebarIntefaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`px-4 py-2 flex items-center gap-2 my-1 rounded-md ${
        pathname === item.path
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-black hover:bg-gray-700 hover:text-white"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
