import React, { useState } from 'react';
import { getAsset } from './assets/assetRegistry';

function App() {
  const [currentView, setCurrentView] = useState('wireframe');
  const [currentPage, setCurrentPage] = useState('home');
  
  // Debug helper
  const debugAsset = (key) => {
    const asset = getAsset(key);
    console.log(`Loading asset ${key}:`, asset);
    return asset;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* View toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => {
            console.log('Switching view to:', currentView === 'wireframe' ? 'pages' : 'wireframe');
            setCurrentView(currentView === 'wireframe' ? 'pages' : 'wireframe');
          }}
          className="px-4 py-2 rounded shadow bg-blue-500 text-white"
        >
          {currentView === 'wireframe' ? 'Show Pages' : 'Show Wireframe'}
        </button>
        {currentView === 'pages' && (
          <button 
            onClick={() => {
              console.log('Switching page to:', currentPage === 'home' ? 'contact' : 'home');
              setCurrentPage(currentPage === 'home' ? 'contact' : 'home');
            }}
            className="px-4 py-2 rounded shadow bg-green-500 text-white"
          >
            {currentPage === 'home' ? 'Show Contact' : 'Show Home'}
          </button>
        )}
      </div>

      <div className="debug-info fixed top-20 left-4 bg-black/50 text-white p-2 rounded">
        View: {currentView}, Page: {currentPage}
      </div>

      {currentView === 'wireframe' ? (
        // Original wireframe view
        <>
          <header className="p-4">
            <img 
              src={debugAsset('MAIN_LOGO')} 
              alt="Logo" 
              className="h-12"
            />
          </header>
          <main className="container mx-auto px-4">
            <img 
              src={debugAsset('HERO_MAIN')} 
              alt="Hero" 
              className="w-full"
            />
          </main>
        </>
      ) : (
        // Page view with debugging
        <div className="container mx-auto px-4">
          {currentPage === 'home' ? (
            <div>
              <p className="text-red-500">Loading Home Page...</p>
              <img 
                src={debugAsset('HERO_BACKGROUND')} 
                alt="Home Page" 
                className="w-full"
                onError={(e) => {
                  console.error('Failed to load home image');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ) : (
            <div>
              <p className="text-red-500">Loading Contact Page...</p>
              <img 
                src={debugAsset('CONTACT')} 
                alt="Contact Page" 
                className="w-full"
                onError={(e) => {
                  console.error('Failed to load contact image');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;