"use client";

import { useState } from "react";

export default function HomePage({ onSearchFerry }) {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1'
  });

  const handleSearch = () => {
    if (searchData.from && searchData.to && searchData.date) {
      onSearchFerry(searchData);
    }
  };

  const scrollToSearch = () => {
    document.getElementById('searchSection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section - BookNaav Style */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                Explore the Seas with
                <span className="text-blue-300 block lg:inline">
                  BookNaav
                </span>
              </h1>
              <p className="text-base sm:text-lg text-blue-100 mb-3 sm:mb-4 font-medium">
                जहाज में सवार, नई उड़ान के लिए तैयार
              </p>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Book boats in India with ease, track your journey, and get 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Book Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-blue-200 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="text-center">
                  {/* Boat Illustration */}
                  <div className="mb-4 lg:mb-6">
                    <svg width="180" height="135" viewBox="0 0 200 150" className="mx-auto">
                      {/* Water */}
                      <path d="M0 120 Q50 110 100 120 T200 120 L200 150 L0 150 Z" fill="#3B82F6" opacity="0.3"/>
                      {/* Boat Hull */}
                      <ellipse cx="100" cy="110" rx="60" ry="15" fill="#8B4513"/>
                      {/* Sail */}
                      <path d="M100 110 L100 60 L140 80 Z" fill="#F5F5DC"/>
                      {/* Mast */}
                      <line x1="100" y1="110" x2="100" y2="60" stroke="#8B4513" strokeWidth="3"/>
                      {/* Flag */}
                      <rect x="100" y="60" width="20" height="15" fill="#EF4444"/>
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 text-blue-800">Boat Rentals</h3>
                  <p className="text-blue-700 text-sm lg:text-base">Browse and book boats in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="searchSection" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Find Your Perfect Journey</h2>
            <div className="bg-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium mb-2 sm:mb-3 text-gray-300">From</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Departure Port" 
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-600 border border-gray-500 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                      value={searchData.from}
                      onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    />
                    <div className="absolute right-3 top-3 sm:top-4 text-gray-400 text-sm sm:text-base">⚓</div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium mb-2 sm:mb-3 text-gray-300">To</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Destination Port" 
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-600 border border-gray-500 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
                      value={searchData.to}
                      onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    />
                    <div className="absolute right-3 top-3 sm:top-4 text-gray-400 text-sm sm:text-base">🌊</div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium mb-2 sm:mb-3 text-gray-300">Departure</label>
                  <input 
                    type="date" 
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-600 border border-gray-500 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white text-sm sm:text-base"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                  />
                </div>
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium mb-2 sm:mb-3 text-gray-300">Passengers</label>
                  <select 
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-600 border border-gray-500 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white text-sm sm:text-base"
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4+ Passengers</option>
                  </select>
                </div>
                <div className="lg:col-span-1 flex items-end">
                  <button 
                    onClick={handleSearch}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    🔍 Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
