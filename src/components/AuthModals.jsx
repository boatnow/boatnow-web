"use client";

import { useState } from "react";

export default function AuthModals({ 
  showUserSignin, 
  showMerchantSignup, 
  showMerchantLogin, 
  showMerchantDashboard,
  onCloseUserSignin,
  onCloseMerchantSignup,
  onCloseMerchantLogin,
  onCloseMerchantDashboard,
  onUserSignin,
  onMerchantSignup,
  onMerchantLogin
}) {
  const [userForm, setUserForm] = useState({ email: '', password: '' });
  const [merchantSignupForm, setMerchantSignupForm] = useState({ 
    businessName: '', 
    email: '', 
    password: '' 
  });
  const [merchantLoginForm, setMerchantLoginForm] = useState({ 
    email: '', 
    password: '' 
  });
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUserSignin = (e) => {
    e.preventDefault();
    onUserSignin(userForm);
    setUserForm({ email: '', password: '' });
  };

  const handleMerchantSignup = (e) => {
    e.preventDefault();
    onMerchantSignup(merchantSignupForm);
    setMerchantSignupForm({ businessName: '', email: '', password: '' });
  };

  const handleMerchantLogin = (e) => {
    e.preventDefault();
    onMerchantLogin(merchantLoginForm);
    setMerchantLoginForm({ email: '', password: '' });
  };

  return (
    <>
      {/* User Sign-in Modal */}
      {showUserSignin && (
        <div className="modal open fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full border border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Welcome Back!</h3>
                    <p className="text-gray-400">Sign in to manage your bookings</p>
                  </div>
                  <button 
                    onClick={onCloseUserSignin}
                    className="text-gray-400 hover:text-white text-3xl transition-colors"
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleUserSignin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" 
                      placeholder="yourname@example.com"
                      value={userForm.email}
                      onChange={(e) => setUserForm({...userForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword.userPassword ? "text" : "password"} 
                        required 
                        className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400" 
                        placeholder="Enter your password"
                        value={userForm.password}
                        onChange={(e) => setUserForm({...userForm, password: e.target.value})}
                      />
                      <button 
                        type="button" 
                        onClick={() => togglePassword('userPassword')} 
                        className="absolute right-3 top-4 text-gray-400 hover:text-white"
                      >
                        👁️
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                  <button 
                    onClick={() => { onCloseUserSignin(); /* Open merchant login */ }}
                    className="text-cyan-400 hover:underline"
                  >
                    Are you a merchant? Sign in here.
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Merchant Signup Modal */}
      {showMerchantSignup && (
        <div className="modal open fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full border border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Partner with AquaVoyage</h3>
                    <p className="text-gray-400">Join our network and grow your business</p>
                  </div>
                  <button 
                    onClick={onCloseMerchantSignup}
                    className="text-gray-400 hover:text-white text-3xl transition-colors"
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleMerchantSignup} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Business Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" 
                      placeholder="Your Company Name"
                      value={merchantSignupForm.businessName}
                      onChange={(e) => setMerchantSignupForm({...merchantSignupForm, businessName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Business Email</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" 
                      placeholder="business@company.com"
                      value={merchantSignupForm.email}
                      onChange={(e) => setMerchantSignupForm({...merchantSignupForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword.merchantPassword ? "text" : "password"} 
                        required 
                        className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" 
                        placeholder="Create a password"
                        value={merchantSignupForm.password}
                        onChange={(e) => setMerchantSignupForm({...merchantSignupForm, password: e.target.value})}
                      />
                      <button 
                        type="button" 
                        onClick={() => togglePassword('merchantPassword')} 
                        className="absolute right-3 top-4 text-gray-400 hover:text-white"
                      >
                        👁️
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Merchant Login Modal */}
      {showMerchantLogin && (
        <div className="modal open fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full border border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Merchant Login</h3>
                    <p className="text-gray-400">Access your business dashboard</p>
                  </div>
                  <button 
                    onClick={onCloseMerchantLogin}
                    className="text-gray-400 hover:text-white text-3xl transition-colors"
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleMerchantLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Business Email</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" 
                      placeholder="business@company.com"
                      value={merchantLoginForm.email}
                      onChange={(e) => setMerchantLoginForm({...merchantLoginForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword.merchantLoginPassword ? "text" : "password"} 
                        required 
                        className="w-full px-4 py-4 bg-gray-600 border border-gray-500 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" 
                        placeholder="Enter your password"
                        value={merchantLoginForm.password}
                        onChange={(e) => setMerchantLoginForm({...merchantLoginForm, password: e.target.value})}
                      />
                      <button 
                        type="button" 
                        onClick={() => togglePassword('merchantLoginPassword')} 
                        className="absolute right-3 top-4 text-gray-400 hover:text-white"
                      >
                        👁️
                      </button>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                  <button 
                    onClick={() => { onCloseMerchantLogin(); /* Open merchant signup */ }}
                    className="text-purple-400 hover:underline"
                  >
                    New partner? Sign up here.
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
