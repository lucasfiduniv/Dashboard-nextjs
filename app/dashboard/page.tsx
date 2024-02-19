import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const DashboardPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-20">
      <div className="md:flex-3 flex flex-col md:gap-20 md:px-10">
        <div className="md:gap-20 justify-between md:flex-row md:flex">
          <div className="mb-10 md:mb-0">
            <Card />
          </div>
          <div className="mb-10 md:mb-0">
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
