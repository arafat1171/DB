const ProjectsTable = () => {
  const projects = [
    {
      name: "Chakra Soft UI Version",
      members: ["👤", "👤", "👤", "👤"],
      budget: "$14,000",
      completion: 60,
    },
    {
      name: "Add Progress Track",
      members: ["👤"],
      budget: "$3,000",
      completion: 10,
    },
    {
      name: "Fix Platform Errors",
      members: ["👤"],
      budget: "Not set",
      completion: 100,
    },
    {
      name: "Launch our Mobile App",
      members: ["👤", "👤", "👤"],
      budget: "$32,000",
      completion: 100,
    },
    {
      name: "Add the New Pricing Page",
      members: ["👤", "👤", "👤", "👤"],
      budget: "$400",
      completion: 25,
    },
    {
      name: "Redesign New Online Shop",
      members: ["👤"],
      budget: "$7,600",
      completion: 40,
    },
  ]

  return (
    <div className="bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">Projects</h3>
          <p className="text-gray-400 text-sm">30 done this month</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">COMPANIES</th>
              <th className="text-left pb-4">MEMBERS</th>
              <th className="text-left pb-4">BUDGET</th>
              <th className="text-left pb-4">COMPLETION</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-white/10">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{project.name.charAt(0)}</span>
                    </div>
                    <span className="text-white text-sm">{project.name}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {project.members.map((member, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-xs"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-white text-sm">{project.budget}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">{project.completion}%</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsTable
