"use client";

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      name: "Scuba Diving",
      description: "Explore the vibrant underwater world.",
      price: 4500,
      image: "https://placehold.co/600x400/1d4ed8/ffffff?text=Scuba+Diving"
    },
    {
      id: 2,
      name: "Kayaking",
      description: "Paddle through serene lakes and rivers.",
      price: 1200,
      image: "https://placehold.co/600x400/059669/ffffff?text=Kayaking"
    },
    {
      id: 3,
      name: "Snorkeling",
      description: "Discover marine life in crystal clear waters.",
      price: 2500,
      image: "https://placehold.co/600x400/0891b2/ffffff?text=Snorkeling"
    },
    {
      id: 4,
      name: "Fishing Trip",
      description: "Deep sea fishing adventure with experienced guides.",
      price: 3500,
      image: "https://placehold.co/600x400/7c2d12/ffffff?text=Fishing"
    }
  ];

  return (
    <div className="relative pt-24 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Book Your Next
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From kayaking to scuba diving, find and book thrilling water activities with ease.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="glass-bg rounded-3xl overflow-hidden card-hover">
              <div className="relative w-full h-48">
                <img 
                  src={activity.image} 
                  alt={activity.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activity.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{activity.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-cyan-400">₹{activity.price}</span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-xl transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
