import React, { useState } from 'react';
import { getAsset } from './assets/assetRegistry';

function App() {
  const [currentView, setCurrentView] = useState('wireframe');
  
  // Header Component
  const Header = () => (
    <header className="w-full">
      <nav className="relative">
        <img 
          src={getAsset('HEADER_SECTION')}
          alt="Header Background"
          className="w-full"
        />
        <img 
          src={getAsset('NAV_PRIMARY')}
          alt="Navigation"
          className="absolute top-0 left-0 w-full"
        />
      </nav>
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="w-full mt-auto">
      <img 
        src={getAsset('FOOTER')} // Add this to assetRegistry if not there
        alt="Footer"
        className="w-full"
      />
    </footer>
  );

  // Page Content Component
  const PageContent = ({ pageKey }) => {
    const pageLayouts = {
      home: (
        <div className="relative">
          <img 
            src={getAsset('HERO_BACKGROUND')}
            alt="Hero Background"
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full">
            <img 
              src={getAsset('HERO_CONTENT')}
              alt="Hero Content"
              className="w-full"
            />
          </div>
        </div>
      ),
      contact: (
        <div className="relative">
          <img 
            src={getAsset('CONTACT')}
            alt="Contact Content"
            className="w-full"
          />
        </div>
      )
    };

    return pageLayouts[pageKey] || null;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* View toggles */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setCurrentView('wireframe')}
          className={`px-4 py-2 rounded shadow ${currentView === 'wireframe' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}
        >
          Wireframe
        </button>
        <button 
          onClick={() => setCurrentView('home')}
          className={`px-4 py-2 rounded shadow ${currentView === 'home' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentView('contact')}
          className={`px-4 py-2 rounded shadow ${currentView === 'contact' ? 'bg-blue-600 text-white' : 'bg-blue-100'}`}
        >
          Contact
        </button>
      </div>

      {currentView === 'wireframe' ? (
        // Original wireframe view
        <>
          <header className="p-4">
            <img 
              src={getAsset('MAIN_LOGO')} 
              alt="Logo" 
              className="h-12"
            />
          </header>
          <main className="container mx-auto px-4">
            <img 
              src={getAsset('HERO_MAIN')} 
              alt="Hero" 
              className="w-full"
            />
          </main>
        </>
      ) : (
        // Structured page view
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <PageContent pageKey={currentView} />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;