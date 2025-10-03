"use client";

import { useState } from "react";

export default function SeatSelectionModal({ isOpen, onClose, ferry, onProceedToBook }) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const bookedSeats = new Set([3, 7, 12, 18]); // Example booked seats

  const toggleSeat = (seatNumber) => {
    if (bookedSeats.has(seatNumber)) return;
    
    const newSelectedSeats = new Set(selectedSeats);
    if (newSelectedSeats.has(seatNumber)) {
      newSelectedSeats.delete(seatNumber);
    } else {
      newSelectedSeats.add(seatNumber);
    }
    setSelectedSeats(newSelectedSeats);
  };

  const getSeatClass = (seatNumber) => {
    let baseClass = "w-12 h-12 flex items-center justify-center rounded-lg font-bold transition-colors cursor-pointer seat";
    if (bookedSeats.has(seatNumber)) {
      return baseClass + " bg-red-500 text-white";
    } else if (selectedSeats.has(seatNumber)) {
      return baseClass + " bg-cyan-500 text-white";
    } else {
      return baseClass + " bg-green-500 text-white";
    }
  };

  const calculateTotal = () => {
    if (!ferry || selectedSeats.size === 0) return 0;
    const baseFare = selectedSeats.size * ferry.price;
    const taxes = baseFare * 0.1;
    return baseFare + taxes;
  };

  const handleProceed = () => {
    if (selectedSeats.size > 0) {
      onProceedToBook(Array.from(selectedSeats).sort((a, b) => a - b));
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal open fixed inset-0 bg-black bg-opacity-80 z-50">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-screen overflow-y-auto border border-gray-700">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold">Choose Your Seats</h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white text-3xl transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Ferry Info */}
              <div className="xl:col-span-1">
                <div className="bg-gray-700 rounded-2xl p-6 mb-6">
                  <h4 className="text-xl font-bold mb-4">{ferry?.name || 'Ferry Details'}</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Operator:</span>
                      <span>{ferry?.operator || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Departure:</span>
                      <span>{ferry?.departure || '-'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span>{ferry?.duration || '-'}</span>
                    </div>
                  </div>
                </div>
                {/* Seat Legend */}
                <div className="bg-gray-700 rounded-2xl p-6">
                  <h5 className="font-semibold mb-4">Seat Legend</h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-lg"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-lg"></div>
                      <span className="text-sm">Booked</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-lg"></div>
                      <span className="text-sm">Selected</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Seat Layout */}
              <div className="xl:col-span-1">
                <div className="bg-gray-700 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">🚢 Captain</span>
                    <span className="text-sm text-gray-400">Main Deck</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((seatNumber) => (
                      <div
                        key={seatNumber}
                        className={getSeatClass(seatNumber)}
                        onClick={() => toggleSeat(seatNumber)}
                      >
                        {seatNumber}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-sm text-gray-400">
                    Click on available seats to select
                  </div>
                </div>
              </div>
              {/* Booking Summary */}
              <div className="xl:col-span-1">
                <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl p-6 border border-cyan-700">
                  <h4 className="text-xl font-bold mb-6">Booking Summary</h4>
                  <div className="mb-6">
                    {selectedSeats.size > 0 ? (
                      <div>
                        <h5 className="font-semibold">Selected Seats:</h5>
                        <p className="text-sm text-gray-300">
                          {Array.from(selectedSeats).sort((a, b) => a - b).join(', ')}
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-300">No seats selected</p>
                    )}
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Base Fare:</span>
                      <span className="font-semibold">
                        ₹{selectedSeats.size > 0 ? selectedSeats.size * (ferry?.price || 0) : 0}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Service Tax:</span>
                      <span className="font-semibold">
                        ₹{selectedSeats.size > 0 ? (selectedSeats.size * (ferry?.price || 0) * 0.1).toFixed(2) : 0}
                      </span>
                    </div>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-cyan-400">₹{calculateTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={handleProceed}
                    disabled={selectedSeats.size === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    💳 Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
