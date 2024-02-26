"use client";
import { useEffect, useState } from "react";
import Joyride from "react-joyride";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const DashboardPage = () => {
  const [runTour, setRunTour] = useState(true); // Iniciar automaticamente o tour

  const steps = [
    {
      target: ".first-card",
      content: "Este é o primeiro cartão.",
      placement: "top",
    },
    {
      target: ".second-card",
      content: "Este é o segundo cartão.",
      placement: "top",
    },
    // Adicione mais etapas conforme necessário
  ];

  return (
    <div className="flex flex-col md:flex-row md:mt-20">
      {/* Componente Joyride para o tour */}
      <Joyride
        steps={steps}
        continuous={true}
        scrollToFirstStep={true}
        run={runTour}
      />

      <div className="md:flex-3 flex flex-col md:gap-20 md:px-10">
        <div className="md:gap-20 justify-between md:flex-row md:flex">
          <div className="mb-10 md:mb-0 first-card">
            <Card />
          </div>
          <div className="mb-10 md:mb-0 second-card">
            <Card />
          </div>
          <div className="mb-10 md:mb-0">
            <Card />
          </div>
          <div className="mb-10 md:mb-0">
            <Card />
          </div>
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="md:w-1/4">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
