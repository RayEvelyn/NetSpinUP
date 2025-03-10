import React from 'react';
import { getAsset } from '../../assets/assetRegistry';

const FigmaImage = ({ nodeKey, alt, className, ...props }) => {
  const imagePath = getAsset(nodeKey);
  
  if (!imagePath) {
    console.warn(`No image found for node key: ${nodeKey}`);
    return null;
  }

  return (
    <img 
      src={imagePath}
      alt={alt || nodeKey.toLowerCase().replace(/_/g, ' ')}
      className={className}
      {...props}
    />
  );
};

export default FigmaImage; 