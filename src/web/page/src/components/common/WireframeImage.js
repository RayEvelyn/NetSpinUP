import React from 'react';
import { getAssetPath } from '../../assets/assetRegistry';

const WireframeImage = ({ elementKey, alt, className, ...props }) => {
  const imagePath = getAssetPath(elementKey);
  
  return (
    <img 
      src={imagePath}
      alt={alt || elementKey.toLowerCase().replace(/_/g, ' ')}
      className={className}
      {...props}
    />
  );
};

export default WireframeImage; 