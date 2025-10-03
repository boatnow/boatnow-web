"use client";

export default function UserDashboard() {
  const userBookings = [
    { 
      id: 'BK-54321', 
      ferry: 'Ocean Explorer', 
      route: 'Port A to Port B', 
      date: '2024-10-25', 
      seats: '12, 13', 
      status: 'Confirmed', 
      total: '₹2640' 
    },
    { 
      id: 'BK-54322', 
      ferry: 'Sea Breeze', 
      route: 'Port C to Port D', 
      date: '2024-11-01', 
      seats: '5', 
      status: 'Pending', 
      total: '₹1650' 
    },
  ];

  return (
    <div className="relative pt-24 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Your Dashboard</h1>
        <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-4xl">👤</div>
            <div>
              <h2 className="text-2xl font-bold">Welcome Back, User!</h2>
              <p className="text-gray-400">View and manage your past bookings.</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-6">Your Bookings</h3>
          <div className="space-y-6">
            {userBookings.length === 0 ? (
              <p className="text-center text-gray-400">You have no past bookings.</p>
            ) : (
              userBookings.map((booking) => (
                <div key={booking.id} className="bg-gray-700 rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-lg font-bold">{booking.ferry}</p>
                      <p className="text-sm text-gray-400">{booking.route}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === 'Confirmed' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div><span className="font-medium text-gray-400">Date:</span> {booking.date}</div>
                    <div><span className="font-medium text-gray-400">Seats:</span> {booking.seats}</div>
                    <div><span className="font-medium text-gray-400">Booking ID:</span> {booking.id}</div>
                    <div><span className="font-medium text-gray-400">Total Paid:</span> <span className="text-cyan-400 font-bold">{booking.total}</span></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
