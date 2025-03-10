export const wireframeMap = {
  // Example mapping (update with your actual wireframe elements)
  'element_1': 'Header Logo',
  'element_2': 'Navigation Menu',
  'element_3': 'Hero Section',
  // ... add more mappings based on your wireframe
};

export const getWireframeElement = (number) => {
  return wireframeMap[`element_${number}`] || 'Unknown Element';
}; yest