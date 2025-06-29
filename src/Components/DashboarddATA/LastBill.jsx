import React from 'react';
import { Button } from '../../../components/ui/button';
import { ArrowDown, ArrowUp } from 'lucide-react';

const LastBill = () => {
  return (
    <div className="hidden lg:block mt-10">
      <div
        className="grid grid-cols-3 gap-6"
        style={{ gridTemplateColumns: '0.9fr 0.9fr 1.2fr', height: '400px' }}
      >
        {/* Billing Information */}
        <div className="col-span-2 h-full">
          <div className="bg-gradient-to-br from-[#060B28F0] to-[#0A0E237D] backdrop-blur-sm text-white h-full rounded-xl shadow-md p-4">
            <div className="border-b border-white/10 pb-3 mb-3">
              <h3 className="text-lg font-semibold">Billing Information</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gradient-to-br from-[#181D3CF0] to-[#0A0E237D] rounded-lg p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-3 sm:space-y-0">
                    <div className="space-y-1 flex-1">
                      <h4 className="font-semibold">Oliver Liam</h4>
                      <p className="text-sm text-gray-400">Company Name: Viking Burrito</p>
                      <p className="text-sm text-gray-400 break-all">Email Address: oliver@burrito.com</p>
                      <p className="text-sm text-gray-400">VAT Number: FRB1235476</p>
                    </div>
                    <div className="flex space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10 text-xs px-2 py-1 flex-1 sm:flex-none"
                      >
                        🗑 DELETE
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-white/10 text-xs px-2 py-1 flex-1 sm:flex-none"
                      >
                        ✏️ EDIT
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Your Transactions */}
        <div className="h-full">
          <div className="bg-gradient-to-br from-[#060B28F0] to-[#0A0E237D] backdrop-blur-sm text-white h-full rounded-xl shadow-md p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 border-b border-white/10 pb-3">
              <h3 className="text-lg font-semibold">Your Transactions</h3>
              <span className="text-xs text-gray-400 mt-1 sm:mt-0">📅 23 - 30 March 2020</span>
            </div>

            <div className="space-y-4">
              {/* Newest Transactions */}
              <div>
                <h4 className="text-xs text-gray-400 uppercase tracking-wide mb-3">Newest</h4>
                <div className="space-y-3">
                  {/* Netflix */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                     <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded-full flex items-center justify-center flex-shrink-0">
  <ArrowDown className="w-4 h-4 text-red-500" />
</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">Netflix</p>
                        <p className="text-xs text-gray-400 truncate">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-red-400 flex-shrink-0">-$2500</span>
                  </div>

                  {/* Apple */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                     <div className="w-8 h-8 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center flex-shrink-0">
  <ArrowUp className="w-4 h-4 text-green-500" />
</div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">Apple</p>
                        <p className="text-xs text-gray-400 truncate">27 March 2020, at 12:30 PM</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-green-400 flex-shrink-0">+$2500</span>
                  </div>
                </div>
              </div>

              {/* Yesterday Transactions */}
              <div>
                <h4 className="text-xs text-gray-400 uppercase tracking-wide mb-3">Yesterday</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Stripe', amount: '+$800', color: 'green' },
                    { name: 'HubSpot', amount: '+$1700', color: 'green' },
                    { name: 'Webflow', amount: 'Pending', color: 'yellow' },
                    { name: 'Microsoft', amount: '-$987', color: 'red' },
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div
                          className={`w-8 h-8 bg-${transaction.color}-500/20 rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <div className={`w-2 h-2 bg-${transaction.color}-400 rounded-full`}></div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{transaction.name}</p>
                          <p className="text-xs text-gray-400 truncate">26 March 2020, at 12:30 PM</p>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold text-${transaction.color}-400 flex-shrink-0`}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBill;
