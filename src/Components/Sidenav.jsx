import React from 'react';
import RC from '../assets/rc.png';
import { 
  LayoutDashboard, 
  BarChart3, 
  CreditCard, 
  Code, 
  User, 
  LogIn, 
  UserPlus,
  HelpCircle
} from 'lucide-react';

export default function SidebarNav() {
  const mainMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Tables' },
    { icon: CreditCard, label: 'Billing' },
    { icon: Code, label: 'RTL' },
  ];

  const accountItems = [
    { icon: User, label: 'Profile' },
    { icon: LogIn, label: 'Sign In' },
    { icon: UserPlus, label: 'Sign Up' },
  ];

  return (
    <div className="w-50 bg-gradient-to-r from-[#2f396470] to-[#040b31e5] h-screen text-white flex flex-col">
  
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-lg font-semibold tracking-wide text-white">VISION UI FREE</h1>
      </div>

     
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {mainMenuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>

       
        <div className="mt-8">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            ACCOUNT PAGES
          </h3>
          <div className="space-y-2">
            {accountItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

   
      <div  className="p-4" >
        <div style={{ backgroundImage: `url(${RC})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }} className=" rounded-2xl p-6 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle size={24} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Need help?</h4>
            <p className="text-blue-100 text-sm mb-4">Please check our docs</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

     