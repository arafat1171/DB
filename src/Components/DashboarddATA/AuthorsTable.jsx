import { Trash2 } from "lucide-react"

const AuthorsTable = () => {
  const authors = [
    {
      id: 1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Manager",
      department: "Organization",
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Programmer",
      department: "Developer",
      status: "Offline",
      employed: "14/06/21",
    },
    {
      id: 3,
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Executive",
      department: "Projects",
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Manager",
      department: "Organization",
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Programmer",
      department: "Developer",
      status: "Offline",
      employed: "14/06/21",
    },
    {
      id: 6,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      avatar: "/placeholder.svg?height=40&width=40",
      function: "Designer",
      department: "UI/UX Design",
      status: "Offline",
      employed: "14/06/21",
    },
  ]

  return (
    <div className="w-full bg-[#060B26]/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-white text-lg font-semibold mb-6">Authors Table</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">AUTHOR</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">FUNCTION</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">STATUS</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3">EMPLOYED</th>
              <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider pb-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {authors.map((author) => (
              <tr key={author.id} className="group hover:bg-white/5 transition-colors">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={author.avatar || "/placeholder.svg"}
                      alt={author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-medium text-sm">{author.name}</div>
                      <div className="text-gray-400 text-sm">{author.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <div className="text-white text-sm font-medium">{author.function}</div>
                    <div className="text-gray-400 text-sm">{author.department}</div>
                  </div>
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      author.status === "Online"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {author.status}
                  </span>
                </td>
                <td className="py-4">
                  <span className="text-white text-sm">{author.employed}</span>
                </td>
                <td className="py-4">
                  <button className="text-red-400 hover:text-red-300 transition-colors p-1">
                    <Trash2 size={16} />
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

export default AuthorsTable
