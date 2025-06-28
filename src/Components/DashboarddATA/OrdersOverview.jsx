const OrdersOverview = () => {
  const orders = [
    {
      title: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
      icon: "💳",
      color: "text-green-400",
    },
    {
      title: "New order #1832412",
      time: "21 DEC 11 PM",
      icon: "🔔",
      color: "text-red-400",
    },
    {
      title: "Server payments for April",
      time: "21 DEC 9:34 PM",
      icon: "💳",
      color: "text-blue-400",
    },
    {
      title: "New card added for order #4395133",
      time: "20 DEC 2:20 AM",
      icon: "💳",
      color: "text-orange-400",
    },
    {
      title: "Unlock packages for Development",
      time: "18 DEC 4:54 AM",
      icon: "📦",
      color: "text-purple-400",
    },
    {
      title: "New order #9583120",
      time: "17 DEC 2:45 AM",
      icon: "🔔",
      color: "text-red-400",
    },
  ]

  return (
    <div className="bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-white text-lg font-semibold mb-6">Orders overview</h3>
      <p className="text-green-400 text-sm mb-6">+30% this month</p>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <span className="text-lg">{order.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium">{order.title}</p>
              <p className="text-gray-400 text-xs">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersOverview
