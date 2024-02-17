import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

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
    <div className="container sticky top-40">
      <ul className="list-none">
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
    </div>
  );
};

export default Sidebar;
