"use client";

import { useState } from "react";

export default function Navigation({ isLoggedIn, isMerchant, onPageChange, onUserSignin, onMerchantSignup, onMerchantLogin, onDashboard, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 glass-effect">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold">B</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold">booknaav</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => onPageChange('home')} 
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('activities')} 
              className="hover:text-cyan-400 transition-colors"
            >
              Book Activities
            </button>
            <button 
              onClick={() => onPageChange('trips')} 
              className="hover:text-cyan-400 transition-colors"
            >
              My Trips
            </button>
          </div>

          {/* Top Right Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={onMerchantSignup}
                  className="border border-cyan-400 text-cyan-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all text-xs sm:text-sm font-medium"
                >
                  <span className="hidden sm:inline">Partner With Us</span>
                  <span className="sm:hidden">Partner</span>
                </button>
                <button 
                  onClick={onUserSignin}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all text-xs sm:text-sm font-medium"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={onLogout}
                  className="border border-gray-400 text-gray-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-gray-400 hover:text-gray-900 transition-all text-xs sm:text-sm font-medium"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <span className="sm:hidden">Out</span>
                </button>
                <button 
                  onClick={onDashboard}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all text-xs sm:text-sm font-medium"
                >
                  <span className="hidden sm:inline">{isMerchant ? 'Merchant Dashboard' : 'My Dashboard'}</span>
                  <span className="sm:hidden">Dashboard</span>
                </button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-2 p-2 text-white hover:text-cyan-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => {
                  onPageChange('home');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left hover:text-cyan-400 transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onPageChange('activities');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left hover:text-cyan-400 transition-colors py-2"
              >
                Book Activities
              </button>
              <button 
                onClick={() => {
                  onPageChange('trips');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left hover:text-cyan-400 transition-colors py-2"
              >
                My Trips
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
