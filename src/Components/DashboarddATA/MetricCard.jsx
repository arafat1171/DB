const MetricCard = ({ title, value, change, icon, iconBg }) => {
  const isPositive = change && change.startsWith("+")

  // Create the icon component
  const IconComponent = icon

  return (
    <div className="bg-[#060B26]/30 backdrop-blur-sm rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-300 text-sm mb-1">{title}</p>
        <div className="flex items-center space-x-2">
          <span className="text-white text-2xl font-bold">{value}</span>
          {change && <span className={`text-sm ${isPositive ? "text-green-400" : "text-red-400"}`}>{change}</span>}
        </div>
      </div>
      <div className={`p-3 rounded-xl ${iconBg}`}>
        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
      </div>
    </div>
  )
}

export default MetricCard
