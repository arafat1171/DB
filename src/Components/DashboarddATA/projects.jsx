
import { MoreVertical } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Chakra Soft UI Version",
      icon: "🎨",
      iconBg: "bg-purple-500",
      budget: "$14,000",
      status: "Working",
      statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      completion: 60,
      progressColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Add Progress Track",
      icon: "📊",
      iconBg: "bg-blue-500",
      budget: "$3,000",
      status: "Canceled",
      statusColor: "bg-red-500/20 text-red-400 border-red-500/30",
      completion: 10,
      progressColor: "bg-red-500",
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      icon: "🔧",
      iconBg: "bg-orange-500",
      budget: "Not set",
      status: "Done",
      statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
      completion: 100,
      progressColor: "bg-green-500",
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      icon: "📱",
      iconBg: "bg-green-500",
      budget: "$32,000",
      status: "Done",
      statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
      completion: 100,
      progressColor: "bg-green-500",
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      icon: "💎",
      iconBg: "bg-blue-600",
      budget: "$400",
      status: "Working",
      statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      completion: 25,
      progressColor: "bg-blue-500",
    },
  ]

  return (
    <div className="w-full bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-white text-lg font-semibold">Projects</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm">30 done this month</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">COMPANIES</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">BUDGET</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">STATUS</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">COMPLETION</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {projects.map((project) => (
              <tr key={project.id} className="group hover:bg-white/5 transition-colors">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${project.iconBg} rounded-lg flex items-center justify-center text-white text-lg`}
                    >
                      {project.icon}
                    </div>
                    <div className="text-white font-medium text-sm">{project.name}</div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-white text-sm font-medium">{project.budget}</span>
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-white text-sm font-medium">{project.completion}%</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2 min-w-[100px]">
                      <div
                        className={`h-2 rounded-full ${project.progressColor}`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-white transition-colors p-1">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Projects
