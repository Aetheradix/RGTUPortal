import {
  Calendar,
  Download,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
  BookOpen,
  UserCheck,
  type LucideIcon
} from 'lucide-react';

// Types
type Stat = {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
  bgGradient: string;
};

type Registration = {
  id: string;
  student: string;
  course: string;
  status: 'Completed' | 'Processing' | 'Pending';
  date: string;
};

type Department = {
  name: string;
  value: number;
  color: string;
};

const Dashboard = () => {
  const stats: Stat[] = [
    {
      title: 'Total Students',
      value: '15,200',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Courses Available',
      value: '412',
      change: '+5.1%',
      trend: 'up',
      icon: BookOpen,
      color: 'green',
      bgGradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Active Faculty',
      value: '210',
      change: '+3.4%',
      trend: 'up',
      icon: UserCheck,
      color: 'orange',
      bgGradient: 'from-orange-500 to-orange-600',
    },
    {
      title: 'New Registrations',
      value: '1,240',
      change: '-0.8%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600',
    },
  ];

  const recentRegistrations: Registration[] = [
    { id: '#ERP-2026-001', student: 'Amit Sharma', course: 'B.Tech Computer Science', status: 'Completed', date: '07-01-2026' },
    { id: '#ERP-2026-002', student: 'Priya Singh', course: 'MBA Finance', status: 'Processing', date: '06-01-2026' },
    { id: '#ERP-2026-003', student: 'Rahul Verma', course: 'B.Sc Physics', status: 'Pending', date: '05-01-2026' },
    { id: '#ERP-2026-004', student: 'Ananya Gupta', course: 'B.A History', status: 'Completed', date: '04-01-2026' },
  ];

  const departments: Department[] = [
    { name: 'Engineering', value: 45, color: 'bg-blue-600' },
    { name: 'Management', value: 25, color: 'bg-cyan-500' },
    { name: 'Science', value: 20, color: 'bg-purple-600' },
    { name: 'Arts', value: 10, color: 'bg-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6">
      <div className="max-w-7xl w-full mx-auto space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">University ERP Dashboard</h1>
            <p className="text-slate-600 mt-1">Real-time overview of university operations</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition shadow-sm">
              <Download size={18} />
              Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              <Calendar size={18} />
              Date Range
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.bgGradient} bg-opacity-10`}>
                    <Icon className={`text-${stat.color}-600`} size={24} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Student Enrollment (2026)</h2>
                <p className="text-sm text-slate-600 mt-1">Monthly registration trends</p>
              </div>
            </div>
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                <line x1="0" y1="40" x2="600" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="80" x2="600" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="160" x2="600" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                <path
                  d="M 0 150 Q 50 130, 100 140 T 200 100 T 300 90 T 400 110 T 500 70 T 600 50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 150 Q 50 130, 100 140 T 200 100 T 300 90 T 400 110 T 500 70 T 600 50 L 600 200 L 0 200 Z"
                  fill="url(#gradient)"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                  <span key={i}>{month}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Courses by Department</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  {departments.map((dept, i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke={dept.color.replace('bg-', '')}
                      strokeWidth="30"
                      strokeDasharray="314"
                      strokeDashoffset={-314 + (314 * (departments.slice(0, i).reduce((a, b) => a + b.value, 0) / 100))}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">100%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {departments.map((dept, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                    <span className="text-sm text-slate-700">{dept.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{dept.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Registrations</h2>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Registration ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Student</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Course</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentRegistrations.map((reg, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-4 px-4 text-sm font-medium text-slate-900">{reg.id}</td>
                    <td className="py-4 px-4 text-sm text-slate-700">{reg.student}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-slate-900">{reg.course}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          reg.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : reg.status === 'Processing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                        {reg.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">{reg.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
