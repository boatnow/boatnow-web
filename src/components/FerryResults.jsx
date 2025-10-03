"use client";

export default function FerryResults({ ferries, onSelectSeats }) {
  if (!ferries || ferries.length === 0) return null;

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">Available Ferries</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Price</button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Duration</button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">Rating</button>
          </div>
        </div>
        <div className="space-y-6">
          {ferries.map((ferry) => (
            <div key={ferry.id} className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center card-hover transition-transform">
              <div className="flex items-start space-x-4 mb-4 md:mb-0">
                <div className="text-4xl">🚢</div>
                <div>
                  <h4 className="text-xl font-bold">{ferry.name}</h4>
                  <p className="text-gray-400 text-sm">Operated by {ferry.operator}</p>
                  <div className="flex items-center space-x-1 text-yellow-400 text-sm mt-1">
                    <span className="font-semibold">{ferry.rating}</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto">
                <div className="text-center">
                  <p className="text-sm text-gray-400">Departure</p>
                  <p className="font-bold text-lg">{ferry.departure}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-bold text-lg">{ferry.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="font-bold text-lg text-cyan-400">₹{ferry.price}</p>
                </div>
                <button 
                  onClick={() => onSelectSeats(ferry.id)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all w-full md:w-auto"
                >
                  Select Seats
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
