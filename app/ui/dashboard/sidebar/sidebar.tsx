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
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>{cat.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
