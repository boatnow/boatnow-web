"use client";

import { useState } from "react";

export default function MerchantDashboard({ isOpen, onClose, onLogout }) {
  const [activeTab, setActiveTab] = useState('bookings');

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  if (!isOpen) return null;

  return (
    <div className="modal open fixed inset-0 bg-black bg-opacity-80 z-50">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-7xl w-full max-h-screen overflow-y-auto border border-gray-700">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Business Dashboard</h3>
                <p className="text-gray-400">Welcome back, <span className="text-purple-400">Partner!</span></p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  🚪 Logout
                </button>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white text-3xl transition-colors"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Quick Stats */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 border border-purple-700 mb-6">
                  <h4 className="text-xl font-bold mb-4">Today's Stats</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">₹65,000</div>
                      <div className="text-sm text-gray-300">Revenue</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-cyan-400">95</div>
                        <div className="text-xs text-gray-400">Bookings</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-yellow-400">8</div>
                        <div className="text-xs text-gray-400">Active Ferries</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-6 mb-6">
                  <h4 className="text-lg font-bold mb-4">Fleet Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Active Routes:</span>
                      <span className="text-green-400">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">In Service:</span>
                      <span className="text-cyan-400">8/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Maintenance:</span>
                      <span className="text-yellow-400">2</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm">
                      + Add New Ferry
                    </button>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm">
                      📊 View Reports
                    </button>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm">
                      ⚙️ Settings
                    </button>
                  </div>
                </div>
              </div>
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-6 bg-gray-700 rounded-xl p-1">
                  <button 
                    onClick={() => switchTab('bookings')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      activeTab === 'bookings' 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    📋 Bookings
                  </button>
                  <button 
                    onClick={() => switchTab('fleet')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      activeTab === 'fleet' 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    🚢 Fleet Management
                  </button>
                  <button 
                    onClick={() => switchTab('routes')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      activeTab === 'routes' 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    🗺️ Routes
                  </button>
                  <button 
                    onClick={() => switchTab('analytics')}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      activeTab === 'analytics' 
                        ? 'bg-purple-600 text-white' 
                        : 'hover:bg-gray-600 text-gray-300'
                    }`}
                  >
                    📈 Analytics
                  </button>
                </div>
                
                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                  <div className="bg-gray-700 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold">Recent Bookings</h4>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Today</button>
                        <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm">This Week</button>
                        <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-sm">This Month</button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="text-left py-3 px-4 text-gray-300">Booking ID</th>
                            <th className="text-left py-3 px-4 text-gray-300">Route</th>
                            <th className="text-left py-3 px-4 text-gray-300">Passenger</th>
                            <th className="text-left py-3 px-4 text-gray-300">Fare</th>
                            <th className="text-left py-3 px-4 text-gray-300">Status</th>
                            <th className="text-left py-3 px-4 text-gray-300">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-700">
                            <td className="py-4 px-4">#88723</td>
                            <td className="py-4 px-4">Port A → Port B</td>
                            <td className="py-4 px-4">Jane Doe</td>
                            <td className="py-4 px-4"><span className="font-bold">₹1200</span></td>
                            <td className="py-4 px-4"><span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Confirmed</span></td>
                            <td className="py-4 px-4 space-x-2">
                              <button className="text-purple-400 hover:text-purple-300">View</button>
                              <button className="text-yellow-400 hover:text-yellow-300">Edit</button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-700">
                            <td className="py-4 px-4">#88724</td>
                            <td className="py-4 px-4">Port C → Port D</td>
                            <td className="py-4 px-4">John Smith</td>
                            <td className="py-4 px-4"><span className="font-bold">₹2500</span></td>
                            <td className="py-4 px-4"><span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">Pending</span></td>
                            <td className="py-4 px-4 space-x-2">
                              <button className="text-purple-400 hover:text-purple-300">View</button>
                              <button className="text-yellow-400 hover:text-yellow-300">Edit</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Fleet Tab */}
                {activeTab === 'fleet' && (
                  <div className="bg-gray-700 rounded-2xl p-6">
                    <h4 className="text-xl font-bold mb-6">My Fleet</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
                        <div>
                          <div className="text-lg font-bold">Ocean Explorer</div>
                          <div className="text-sm text-gray-400">Capacity: 150 | Status: <span className="text-green-400">In Service</span></div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Manage</button>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
                        <div>
                          <div className="text-lg font-bold">Sea Breeze</div>
                          <div className="text-sm text-gray-400">Capacity: 100 | Status: <span className="text-yellow-400">Maintenance</span></div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Manage</button>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-xl flex justify-between items-center">
                        <div>
                          <div className="text-lg font-bold">Coastal Voyager</div>
                          <div className="text-sm text-gray-400">Capacity: 200 | Status: <span className="text-green-400">In Service</span></div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Manage</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Routes Tab */}
                {activeTab === 'routes' && (
                  <div className="bg-gray-700 rounded-2xl p-6">
                    <h4 className="text-xl font-bold mb-6">Active Routes</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-xl">
                        <div className="text-lg font-bold">Port A to Port B</div>
                        <div className="text-sm text-gray-400">Duration: 3 hours | Price: ₹1200 | Ferries: Ocean Explorer</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-xl">
                        <div className="text-lg font-bold">Port C to Port D</div>
                        <div className="text-sm text-gray-400">Duration: 5 hours | Price: ₹2500 | Ferries: Coastal Voyager</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics Tab */}
                {activeTab === 'analytics' && (
                  <div className="bg-gray-700 rounded-2xl p-6">
                    <h4 className="text-xl font-bold mb-6">Analytics</h4>
                    <div className="text-gray-400 space-y-4">
                      <div className="bg-gray-800 p-4 rounded-xl">
                        <p className="text-lg font-bold">Revenue Growth</p>
                        <div className="w-full h-48 bg-gray-700 rounded-lg mt-2 flex items-center justify-center">
                          <p className="text-sm text-gray-400">Chart Placeholder</p>
                        </div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-xl">
                        <p className="text-lg font-bold">Passenger Demographics</p>
                        <div className="w-full h-48 bg-gray-700 rounded-lg mt-2 flex items-center justify-center">
                          <p className="text-sm text-gray-400">Chart Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
