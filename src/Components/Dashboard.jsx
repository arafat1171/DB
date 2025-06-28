import Sidebar from "./DashboarddATA/Sidebar";
import OrdersOverview from "./DashboarddATA/OrdersOverview";
import MetricCard from "./DashboarddATA/MetricCard";
import ProjectsTable from "./DashboarddATA/ProjectsTable";
import ReferralCard from "./DashboarddATA/ReferralCard";
import SalesChart from "./DashboarddATA/SalesChart";
import WelcomeCard from "./DashboarddATA/WelcomeCard";
import Header from "./DashboarddATA/Header";
import AuthorsTable  from "./DashboarddATA/AuthorsTable"
import { CurrencyDollarIcon, UsersIcon, UserPlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import DBBGImage from "../assets/DBBG.png";

const Dashboard = () => {
  return (
     <div className="min-h-screen flex" style={{ backgroundImage: `url(${DBBGImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProjectsTable />
            </div>
            <div>
              <OrdersOverview />
            </div>
          </div>
        </div>
        <footer className="text-white text-sm text-right space-x-5 mb-8 mr-10">
          <a href="#" className="hover:underline">Marketplace</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">License</a>
        </footer>
       
      </div>
      
    </div>

    
  );
};

export default Dashboard;
