import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Shared/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" w-64 min-h-screen bg-[#D1A054] pt-16">
        <div className="fixed w-64">
          <DashboardNavbar></DashboardNavbar>
        </div>
      </div>
      <div className="flex-1 p-8 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
