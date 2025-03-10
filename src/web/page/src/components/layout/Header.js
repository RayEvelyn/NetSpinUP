import React from 'react';
import { WireframeImage } from '../common';
import { WireframeElements } from '../../assets/assetRegistry';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <WireframeImage 
        elementKey="HEADER_LOGO"
        className="h-12 w-auto"
      />
      <nav>
        <WireframeImage 
          elementKey="NAV_MENU"
          className="h-8 w-auto"
        />
      </nav>
      <div className="profile">
        <WireframeImage 
          elementKey="USER_PROFILE"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header; 