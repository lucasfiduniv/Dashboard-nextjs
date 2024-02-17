import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Usuarios",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Produtos",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transacoes",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analíticos",
    list: [
      {
        title: "Receita",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Relatórios",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Times",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Usuário",
    list: [
      {
        title: "Configuraçoes",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ajuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="container sticky top-10 p-2">
      <div className="flex items-center gap-10 mb-10">
        <Image
          src="/avatar.svg"
          alt="Imagem Do Usuario"
          width="50"
          height="50"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Lucas Fiduniv</span>
          <span className="text-xs text-gray-500">Administrator</span>
        </div>
      </div>
      <ul className="list-none ">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="font-bold text-gray-500 text-sm mb-4">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="px-4 py-3 flex items-center gap-2 my-2 rounded-md  cursor-pointer  bg-transparent border-none hover:bg-gray-600 text-white w-full">
        <MdLogout />
        Sair
      </button>
    </div>
  );
};

export default Sidebar;
