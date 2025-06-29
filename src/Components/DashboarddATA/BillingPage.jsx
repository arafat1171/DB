import React from 'react';
import { Pen, FileText, MoreHorizontal } from 'lucide-react';
import { AiFillFilePdf } from 'react-icons/ai';
import LastBill from './LastBill';
const Billing = () => {
  return (
    <div className="w-full min-h-screen text-white p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side (60%) */}
        <div className="w-full md:w-[60%] flex flex-col gap-6">
          {/* Top: Card and Credit Balance */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Credit Card */}
            <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-cover bg-center bg-[url('/src/assets/CreditCard.png')] shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-md font-semibold">Vision UI</h2>
                  <p className="text-2xl mt-6 tracking-widest">7812 2139 0823 XXXX</p>
                  <div className="flex gap-6 mt-4 text-sm">
                    <span className="text-gray-300">VALID THRU<br /><strong>05/24</strong></span>
                    <span className="text-gray-300">CVV<br /><strong>09X</strong></span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm" />
              </div>
            </div>
 
            {/* Credit Balance */}
            <div
              className="w-full lg:w-1/2 p-6 rounded-2xl relative overflow-hidden shadow-lg"
              style={{
                background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
              }}
            >
              {/* Top Right 3-dot icon */}
              <div className="absolute top-8 right-10 text-white/100 cursor-pointer">
                <MoreHorizontal size={20} />
              </div>
 
              <div className="bg-cover bg-center bg-[url('/src/assets/BalanceBg.png')] p-6 rounded-2xl">
                <h4 className="text-sm text-gray-400">Credit Balance</h4>
                <p className="text-3xl font-bold mt-2">$25,215</p>
                </div>
                <div>
                {/* Transaction info */}
                <div className="mt-8 flex justify-between items-center text-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">📅</div>
                      <span>Bill & Taxes</span>
                    </div>
                    <span className="text-gray-400 text-xs">Today, 16:36</span>
                  </div>
                  <p className="text-red-400 font-medium">- $154.50</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Add Card Section */}
          <div className="p-6 rounded-2xl shadow-lg " style={{
 
 
                background: "linear-gradient(225deg, #0f4693 0%, #05255c 100%)",
              }}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-lg">Payment Method</h4>
              <button className="text-xs bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full">ADD A NEW CARD</button>
            </div>
 
            {/* Existing card */}
           
            <div className='flex flex-wrap justify-between items-center gap-3'>
 
 
  <div className="flex justify-between items-center p-4 rounded-2xl mb-4 border-2 border-gradient-to-tl from-white via-gray-500 to-white basis-[calc(50%-6px)]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-6 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-sm" />
      <p className="tracking-widest">7812 2139 0823 XXXX</p>
    </div>
    <Pen size={16} className="text-gray-400 cursor-pointer" />
  </div>
 
  <div className="flex items-center justify-between p-4 rounded-2xl mb-4 border-2 border-gradient-to-tl from-white via-gray-500 to-white basis-[calc(50%-6px)]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-6 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-sm" />
      <p className="tracking-widest">7812 2139 0823 XXXX</p>
    </div>
    <Pen size={16} className="text-gray-400 cursor-pointer" />
  </div>
</div>
 
 
 
          </div>
        </div>
 
        {/* Right Side (40%) */}
        <div
  className="w-full md:w-[40%] p-6 rounded-2xl shadow-lg flex flex-col"
  style={{
    background: "linear-gradient(135deg, #051641 0%, #05255c 100%)",
  }}
>
  <div className="flex justify-between items-center mb-4">
    <h4 className="font-semibold text-lg">Invoices</h4>
    <button className="text-sm px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-full">VIEW ALL</button>
  </div>
 
  <div className="flex flex-col gap-4">
    {[
      { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
      { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
      { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
      { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
      { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" }
    ].map((invoice, i) => (
      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
        <div>
          <p className="text-sm font-medium">{invoice.date}</p>
          <p className="text-xs text-gray-400">{invoice.id}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-semibold">{invoice.amount}</p>
          <span className='flex items-center'>PDF <AiFillFilePdf size={18} className="text-white-500 cursor-pointer" /></span>
           {/* ✅ PDF icon */}
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
     <LastBill/>
    </div>
    
  );
};
 
export default Billing;
 