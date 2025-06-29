import { useState } from "react";
import Sidebar from "./DashboarddATA/Sidebar";
import OrdersOverview from "./DashboarddATA/OrdersOverview";
import MetricCard from "./DashboarddATA/MetricCard";
import ProjectsTable from "./DashboarddATA/ProjectsTable";
import ReferralCard from "./DashboarddATA/ReferralCard";
import SalesChart from "./DashboarddATA/SalesChart";
import WelcomeCard from "./DashboarddATA/WelcomeCard";
import Header from "./DashboarddATA/Header";
import AuthorsTable from "./DashboarddATA/AuthorsTable";
import Projects from "./DashboarddATA/projects";
import BillingPage from "./DashboarddATA/BillingPage";
import { CurrencyDollarIcon, UsersIcon, UserPlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import DBBGImage from "../assets/DBBG.png";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return (
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <MetricCard
                title="Today's Money"
                value="$53,000"
                change="+55%"
                icon={CurrencyDollarIcon}
                iconBg="bg-gradient-to-r from-green-400 to-green-600"
              />
              <MetricCard
                title="Today's Users"
                value="2,300"
                change="+3%"
                icon={UsersIcon}
                iconBg="bg-gradient-to-r from-blue-400 to-blue-600"
              />
              <MetricCard
                title="New Clients"
                value="+3,052"
                change="-2%"
                icon={UserPlusIcon}
                iconBg="bg-gradient-to-r from-orange-400 to-orange-600"
              />
              <MetricCard
                title="Total Sales"
                value="$173,000"
                change="+5%"
                icon={ShoppingCartIcon}
                iconBg="bg-gradient-to-r from-red-400 to-red-600"
              />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <div>
                <WelcomeCard />
              </div>
              <div>
                <ReferralCard />
              </div>
            </div>

            {/* Sales Chart */}
            <div>
              <SalesChart />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
              <div className="xl:col-span-2">
                <ProjectsTable />
              </div>
              <div>
                <OrdersOverview />
              </div>
            </div>
          </div>
        );
      case "Tables":
        return (
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <AuthorsTable />
              <Projects />
            </div>
          </div>
        );
      case "Billing":
        return (
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            <BillingPage />
          </div>
        );
      default:
        return (
          <div className="p-4 md:p-6">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-4">{activeView}</h2>
              <p>This page is under construction.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex relative" style={{ backgroundImage: `url(${DBBGImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        activeView={activeView}
        setActiveView={setActiveView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden lg:ml-0">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Content */}
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {renderContent()}
          
          <footer className="text-white text-xs md:text-sm text-center md:text-right space-x-2 md:space-x-5 mb-4 md:mb-8 px-4 md:mr-10">
            <a href="#" className="hover:underline">Marketplace</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">License</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
