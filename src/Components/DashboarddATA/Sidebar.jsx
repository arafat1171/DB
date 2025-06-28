import {
  HomeIcon,
  CreditCardIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


const Sidebar = ({ activeView, setActiveView, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Tables", icon: CreditCardIcon },
    { name: "Billing", icon: CreditCardIcon },
    { name: "RTL", icon: HomeIcon },
  ];

  const accountItems = [
    { name: "Profile", icon: UserIcon },
    { name: "Sign In", icon: ArrowRightOnRectangleIcon },
    { name: "Sign Up", icon: UserPlusIcon },
  ];

  const handleMenuClick = (itemName) => {
    setActiveView(itemName);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const SidebarContent = () => (
    <>
      {/* Logo / Brand */}
      <div className="mb-5 flex justify-center">
        <h1 className="text-lg md:text-xl font-bold" style={{ 
          background: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          backgroundClip: 'text', 
          textFillColor: 'transparent' 
        }}>VISION UI FREE</h1>
      </div>
      <div className="w-full h-0.5 mb-4" style={{ background: 'linear-gradient(to right, #E0E1E200 0%, #E0E1E2 50%, #E0E1E200 100%)', height: '2px' }}></div>

      {/* Main Menu */}
      <div className="mb-2">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                activeView === item.name
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm md:text-base">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Account Pages */}
      <div>
        <h3 className="text-gray-400 text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider">
          Account Pages
        </h3>
        <nav className="space-y-1">
          {accountItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.name)}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-blue-600/20 hover:text-white transition-colors text-left"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm md:text-base">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex-1"></div> {/* Spacer to push the card to the bottom */}
      
      {/* Help Card */}
      <div className="relative w-full rounded-2xl overflow-hidden" style={{ backgroundImage: "url('/src/assets/rc.png')", backgroundSize: 'cover', backgroundPosition: 'right-bottom' }}>
        <div className="relative z-20 p-4 h-full flex flex-col">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-white text-base md:text-lg font-semibold mb-1">Need help?</h2>
            <p className="text-white/90 text-xs">Please check our docs</p>
          </div>
          
          <Button
            className="w-full bg-black/50 hover:bg-black/50 text-white border-0 backdrop-blur-sm font-medium tracking-wide transition-all duration-200 text-xs py-1"
            size="sm"
          >
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex m-5 w-64 h-[95vh] bg-gradient-to-b from-[#060B26]/30 to-blue-800/20 backdrop-blur-sm p-6 rounded-[20px] flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#060B26]/90 to-blue-800/40 backdrop-blur-sm p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col h-full">
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
