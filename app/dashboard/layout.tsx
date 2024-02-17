import React from "react";
import { LayoutProps } from "../interfaces/layoutIntefaces";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
