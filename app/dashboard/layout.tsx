"use client";
import React, { useState } from "react";
import { LayoutProps } from "../interfaces/layoutIntefaces";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <div
        className={`bg-[#182237] p-4 min-h-screen md:w-64 ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        <Navbar />
        <button className="md:hidden" onClick={toggleSidebar}>
          <div className="bg-white rounded-full text-[#182237] p-2 absolute flex">
            {sidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
          </div>
        </button>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
