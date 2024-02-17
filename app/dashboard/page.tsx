import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const DashboardPage = () => {
  return (
    <div className="flex gap-20 flex-col md:flex-row md:gap-20 md:mt-20">
      <div className="flex-3 flex flex-col gap-20">
        <div className="flex gap-20 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
