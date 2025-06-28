const SalesChart = () => {
  return (
    <div className="bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">Sales overview</h3>
          <p className="text-green-400 text-sm">(+5%) more in 2021</p>
        </div>
      </div>

      {/* Chart area */}
      <div className="h-64 relative">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="0"
              y1={i * 40 + 20}
              x2="800"
              y2={i * 40 + 20}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Wave-like chart */}
          <path
            d="M0,160 Q100,120 200,140 T400,130 T600,110 T800,120 L800,200 L0,200 Z"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="3"
          />
          <path d="M0,180 Q100,140 200,160 T400,150 T600,130 T800,140 L800,200 L0,200 Z" fill="url(#gradient2)" />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-xs py-4">
          <span>50K</span>
          <span>40K</span>
          <span>30K</span>
          <span>20K</span>
          <span>10K</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-gray-400 text-xs px-8">
          {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SalesChart
