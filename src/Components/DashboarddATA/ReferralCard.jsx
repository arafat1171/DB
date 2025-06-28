import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const ReferralCard = () => {
  return (
    <div className="relative h-90 bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex justify-between min-h-[220px] w-full max-w-[700px] mx-auto">
      <EllipsisHorizontalIcon className="w-5 h-5 text-white absolute top-6 right-6" />
      
      {/* Left Side */}
      <div className="space-y-6 self-start">
        <h3 className="text-white text-lg font-semibold">Referral Tracking</h3>

        <div className="space-y-4">
          <div className="mt-10 ml-5 bg-black/50   p-5 rounded-xl w-[10vw]">

            <div className="text-gray-400 text-sm">Invited</div>
            <div className="text-white font-semibold text-lg">145 people</div>
          </div>
          <div className="mt-6 ml-5 bg-black/50 p-5 rounded-xl w-[10vw]">

            <div className="text-gray-400 text-sm">Bonus</div>
            <div className="text-white font-semibold text-lg">1,465</div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center justify-center self-center">
        <div className="relative w-56 h-56">
          <svg className="w-56 h-56 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#1E293B"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${251 * 0.75} 251`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E0FF" />
                <stop offset="100%" stopColor="#18F2B2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-white text-lg font-semibold">Safety</div>
            <div className="text-white text-4xl font-bold leading-tight">9.3</div>
            <div className="text-white text-sm">Total Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;
