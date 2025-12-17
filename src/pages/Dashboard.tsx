import { Calendar, DollarSign, Download, Package, ShoppingCart, TrendingDown, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'New Orders',
      value: '1,240',
      change: '+5.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'orange',
      bgGradient: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Low Stock Items',
      value: '58',
      change: '-2.1%',
      trend: 'down',
      icon: Package,
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Active Users',
      value: '12k',
      change: '+8.4%',
      trend: 'up',
      icon: Users,
      color: 'green',
      bgGradient: 'from-green-500 to-green-600'
    }
  ];

  const recentOrders = [
    { id: '#ORD-2024-001', customer: 'John Doe', amount: '$450', status: 'Completed', date: '2024-12-15' },
    { id: '#ORD-2024-002', customer: 'Jane Smith', amount: '$320', status: 'Processing', date: '2024-12-16' },
    { id: '#ORD-2024-003', customer: 'Mike Johnson', amount: '$180', status: 'Pending', date: '2024-12-17' },
    { id: '#ORD-2024-004', customer: 'Sarah Williams', amount: '$920', status: 'Completed', date: '2024-12-17' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
      <div className="w-full  mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Overview</h1>
            <p className="text-slate-600 mt-1">Here's what's happening with your business today</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition shadow-sm">
              <Download size={18} />
              Download Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              <Calendar size={18} />
              Filter Date
            </button>
          </div>
        </div>

        {/* Stats Grid */}
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Analytics */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Revenue Analytics</h2>
                <p className="text-sm text-slate-600 mt-1">Tracking revenue over time</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-slate-600">Current Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <span className="text-slate-600">Previous Period</span>
                </div>
              </div>
            </div>
            
            {/* Simple SVG Chart */}
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="80" x2="600" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="160" x2="600" y2="160" stroke="#f1f5f9" strokeWidth="1" />
                
                {/* Revenue line */}
                <path
                  d="M 0 150 Q 50 130, 100 140 T 200 100 T 300 90 T 400 110 T 500 70 T 600 50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* Area fill */}
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
              
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Sales by Category */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Sales by Category</h2>
            
            {/* Donut Chart */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  {/* Electronics - 45% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="30"
                    strokeDasharray="314"
                    strokeDashoffset="0"
                  />
                  {/* Furniture - 30% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="30"
                    strokeDasharray="314"
                    strokeDashoffset="-141"
                  />
                  {/* Clothing - 25% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="30"
                    strokeDasharray="314"
                    strokeDashoffset="-235"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">100%</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-sm text-slate-700">Electronics</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <span className="text-sm text-slate-700">Furniture</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-sm text-slate-700">Clothing</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Recent Orders</h2>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-4 px-4 text-sm font-medium text-slate-900">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-slate-700">{order.customer}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-slate-900">{order.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">{order.date}</td>
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