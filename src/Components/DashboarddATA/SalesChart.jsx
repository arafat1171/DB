const SalesChart = () => {
  return (
    <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">Sales overview</h3>
          <p className="text-green-400 text-sm">(+5%) more in 2021</p>
        </div>
      </div>

      {/* Chart area */}
      <div className="h-64 relative w-full pl-8">
        <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
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

          {/* Blue wave-like chart - many waves, crosses green line twice */}
          <path
            d="M0,120 Q66,140 133,125 Q200,110 266,120 Q333,135 400,115 Q466,100 533,110 Q600,125 666,95 Q733,80 800,90"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="3"
          />
          <path
            d="M0,120 Q66,140 133,125 Q200,110 266,120 Q333,135 400,115 Q466,100 533,110 Q600,125 666,95 Q733,80 800,90 L800,200 L0,200 Z"
            fill="url(#gradient2)"
          />

          {/* Green/Teal wave-like chart - many waves, crosses blue line twice */}
          <path
            d="M0,100 Q66,115 133,130 Q200,145 266,135 Q333,120 400,140 Q466,160 533,170 Q600,155 666,170 Q733,185 800,175"
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="3"
          />
          <path
            d="M0,100 Q66,115 133,130 Q200,145 266,135 Q333,120 400,140 Q466,160 533,170 Q600,155 666,170 Q733,185 800,175 L800,200 L0,200 Z"
            fill="url(#gradient4)"
          />

          {/* Gradients */}
          <defs>
            {/* Blue gradient */}
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>

            {/* Green/Teal gradient */}
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06D6A0" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(16,185,129,0.3)" />
              <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-xs py-4">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between pl-8 text-gray-400 text-xs">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SalesChart
