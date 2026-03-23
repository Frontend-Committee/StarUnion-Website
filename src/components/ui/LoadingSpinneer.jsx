import React from "react";

const LoadingSpinner = ({ fullScreen = false }) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-bg33/80 backdrop-blur-sm z-50"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 border-4 rounded-full border-primary/20"></div>
        
        <div className="absolute w-16 h-16 border-4 border-transparent rounded-full border-t-primary border-b-secondary animate-spin"></div>
        
        <div className="w-6 h-6 rounded-full bg-primary/40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;