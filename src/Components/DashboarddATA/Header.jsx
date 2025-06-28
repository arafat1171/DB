import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className="bg-[#060B26]/30 backdrop-blur-sm flex justify-between items-center p-6 bg-transparent">
      <div>
        <p className="text-gray-400 text-sm">Pages / Dashboard</p>
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-300">
          <span className="text-sm">Type here...</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-300 hover:text-white">
            <BellIcon className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-300 hover:text-white">
            <Cog6ToothIcon className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm">Sign In</span>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
