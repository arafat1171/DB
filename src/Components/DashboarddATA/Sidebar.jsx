import {
  HomeIcon,
  CreditCardIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, active: true },
    { name: "Tables", icon: CreditCardIcon },
    { name: "Billing", icon: CreditCardIcon },
    { name: "RTL", icon: HomeIcon },
  ];

  const accountItems = [
    { name: "Profile", icon: UserIcon },
    { name: "Sign In", icon: ArrowRightOnRectangleIcon },
    { name: "Sign Up", icon: UserPlusIcon },
  ];

  return (
    <div className="m-5 w-64 h-[95vh] overflow-hidden bg-gradient-to-b from-[#060B26]/30 to-blue-800/20 backdrop-blur-sm  p-6 rounded-[20px]">
      {/* Logo / Brand */}
      <div className="mb-8">
        <h1 className="text-white text-xl font-bold">VISION UI FREE</h1>
      </div>

      {/* Main Menu */}
      <div className="mb-8">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-white/5 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Account Pages */}
      <div>
        <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">
          Account Pages
        </h3>
        <nav className="space-y-2">
          {accountItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
