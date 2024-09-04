import React from 'react';
import '../index.css'; 

const ShimmerLoader = () => {
  return (
    <div className="shimmer-loader">
      <div className="shimmer-item"></div>
      <div className="shimmer-item"></div>
      <div className="shimmer-item"></div>
    </div>
  );
};

export default ShimmerLoader;