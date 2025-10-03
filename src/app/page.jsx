"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import HomePage from "../components/HomePage";
import ActivitiesPage from "../components/ActivitiesPage";
import UserDashboard from "../components/UserDashboard";
import FerryResults from "../components/FerryResults";
import SeatSelectionModal from "../components/SeatSelectionModal";
import AuthModals from "../components/AuthModals";
import MerchantDashboard from "../components/MerchantDashboard";
import MessageBox from "../components/MessageBox";

export default function App() {
  // Application State
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    isMerchant: false,
    currentPage: 'home',
  });

  // Modal States
  const [modals, setModals] = useState({
    showUserSignin: false,
    showMerchantSignup: false,
    showMerchantLogin: false,
    showMerchantDashboard: false,
    showSeatSelection: false,
  });

  // Message State
  const [message, setMessage] = useState({
    text: '',
    type: 'success',
    isVisible: false,
  });

  // Ferry Data
  const [ferries, setFerries] = useState([]);
  const [selectedFerry, setSelectedFerry] = useState(null);

  // Mock Ferry Data
  const mockFerries = [
    { id: 1, name: 'Ocean Explorer', operator: 'Voyage Co.', rating: 4.8, price: 1200, duration: '3h 15m', departure: '09:00 AM' },
    { id: 2, name: 'Sea Breeze', operator: 'Blue Line', rating: 4.5, price: 1500, duration: '2h 50m', departure: '10:30 AM' },
    { id: 3, name: 'Island Hopper', operator: 'Coastal Ferries', rating: 4.2, price: 1050, duration: '4h 0m', departure: '11:45 AM' },
  ];

  // Utility Functions
  const showMessage = (text, type = 'success') => {
    setMessage({ text, type, isVisible: true });
  };

  const closeMessage = () => {
    setMessage(prev => ({ ...prev, isVisible: false }));
  };

  // Navigation Functions
  const handlePageChange = (page) => {
    setAppState(prev => ({ ...prev, currentPage: page }));
  };

  const handleUserSignin = (formData) => {
    setAppState(prev => ({ ...prev, isLoggedIn: true, isMerchant: false, currentPage: 'dashboard' }));
    setModals(prev => ({ ...prev, showUserSignin: false }));
    showMessage('User signed in successfully!', 'success');
  };

  const handleMerchantSignup = (formData) => {
    setAppState(prev => ({ ...prev, isLoggedIn: true, isMerchant: true, currentPage: 'merchantDashboard' }));
    setModals(prev => ({ ...prev, showMerchantSignup: false, showMerchantDashboard: true }));
    showMessage('Merchant signed up successfully! Welcome.', 'success');
  };

  const handleMerchantLogin = (formData) => {
    setAppState(prev => ({ ...prev, isLoggedIn: true, isMerchant: true, currentPage: 'merchantDashboard' }));
    setModals(prev => ({ ...prev, showMerchantLogin: false, showMerchantDashboard: true }));
    showMessage('Merchant logged in successfully!', 'success');
  };

  const handleLogout = () => {
    setAppState(prev => ({ ...prev, isLoggedIn: false, isMerchant: false, currentPage: 'home' }));
    setModals(prev => ({ 
      showUserSignin: false, 
      showMerchantSignup: false, 
      showMerchantLogin: false, 
      showMerchantDashboard: false 
    }));
    showMessage('You have been logged out.', 'success');
  };

  const handleDashboard = () => {
    if (appState.isMerchant) {
      setModals(prev => ({ ...prev, showMerchantDashboard: true }));
    } else {
      setAppState(prev => ({ ...prev, currentPage: 'dashboard' }));
    }
  };

  // Ferry Functions
  const handleSearchFerry = (searchData) => {
    setFerries(mockFerries);
    showMessage('Search completed! Found available ferries.', 'success');
  };

  const handleSelectSeats = (ferryId) => {
    const ferry = mockFerries.find(f => f.id === ferryId);
    setSelectedFerry(ferry);
    setModals(prev => ({ ...prev, showSeatSelection: true }));
  };

  const handleProceedToBook = (selectedSeats) => {
    showMessage(`Proceeding to payment for selected seats: ${selectedSeats.join(', ')}`, 'success');
  };

  // Modal Functions
  const openUserSignin = () => setModals(prev => ({ ...prev, showUserSignin: true }));
  const closeUserSignin = () => setModals(prev => ({ ...prev, showUserSignin: false }));
  
  const openMerchantSignup = () => setModals(prev => ({ ...prev, showMerchantSignup: true }));
  const closeMerchantSignup = () => setModals(prev => ({ ...prev, showMerchantSignup: false }));
  
  const openMerchantLogin = () => setModals(prev => ({ ...prev, showMerchantLogin: true }));
  const closeMerchantLogin = () => setModals(prev => ({ ...prev, showMerchantLogin: false }));
  
  const closeMerchantDashboard = () => setModals(prev => ({ ...prev, showMerchantDashboard: false }));
  const closeSeatSelection = () => setModals(prev => ({ ...prev, showSeatSelection: false }));

  // Render Current Page
  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case 'home':
        return <HomePage onSearchFerry={handleSearchFerry} />;
      case 'activities':
        return <ActivitiesPage />;
      case 'dashboard':
        return <UserDashboard />;
      default:
        return <HomePage onSearchFerry={handleSearchFerry} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        isLoggedIn={appState.isLoggedIn}
        isMerchant={appState.isMerchant}
        onPageChange={handlePageChange}
        onUserSignin={openUserSignin}
        onMerchantSignup={openMerchantSignup}
        onMerchantLogin={openMerchantLogin}
        onDashboard={handleDashboard}
        onLogout={handleLogout}
      />
      
      <main style={{ flex: 1 }}>
        {renderCurrentPage()}
        {ferries.length > 0 && appState.currentPage === 'home' && (
          <FerryResults ferries={ferries} onSelectSeats={handleSelectSeats} />
        )}
      </main>

          <footer className="border-t border-gray-700 p-6 text-center text-gray-400">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} BookNaav - Boat Rentals in India</p>
            </div>
          </footer>

      {/* Modals */}
      <AuthModals
        showUserSignin={modals.showUserSignin}
        showMerchantSignup={modals.showMerchantSignup}
        showMerchantLogin={modals.showMerchantLogin}
        showMerchantDashboard={modals.showMerchantDashboard}
        onCloseUserSignin={closeUserSignin}
        onCloseMerchantSignup={closeMerchantSignup}
        onCloseMerchantLogin={closeMerchantLogin}
        onCloseMerchantDashboard={closeMerchantDashboard}
        onUserSignin={handleUserSignin}
        onMerchantSignup={handleMerchantSignup}
        onMerchantLogin={handleMerchantLogin}
      />

      <MerchantDashboard
        isOpen={modals.showMerchantDashboard}
        onClose={closeMerchantDashboard}
        onLogout={handleLogout}
      />

      <SeatSelectionModal
        isOpen={modals.showSeatSelection}
        onClose={closeSeatSelection}
        ferry={selectedFerry}
        onProceedToBook={handleProceedToBook}
      />

      <MessageBox
        message={message.text}
        type={message.type}
        isVisible={message.isVisible}
        onClose={closeMessage}
      />
    </div>
  );
}
