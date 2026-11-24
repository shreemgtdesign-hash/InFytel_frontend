import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function InfytelLogo({ className = "h-8 sm:h-9 w-auto", onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer select-none group ${className}`}
    >
      {!imgError ? (
        <img 
          src={logoImg} 
          alt="Infytel Logo" 
          onError={() => setImgError(true)}
          className="h-full w-auto max-h-10 object-contain transition-transform group-hover:scale-105 duration-200" 
        />
      ) : (
        <svg 
          viewBox="0 0 145 42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="infytelCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00B2FE" />
            </linearGradient>
            <linearGradient id="infytelRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>

          {/* Red loop around 'tel' */}
          <path
            d="M 85 24 C 82 12, 105 5, 126 10 C 138 13, 144 20, 140 26"
            stroke="url(#infytelRed)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          <text
            x="4"
            y="31"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="30"
            letterSpacing="-0.5px"
            fill="url(#infytelCyan)"
          >
            Infy
          </text>

          <text
            x="75"
            y="31"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="30"
            letterSpacing="-0.5px"
            fill="url(#infytelCyan)"
          >
            tel
          </text>

          <path
            d="M 140 26 C 136 32, 116 38, 96 36 C 85 34, 78 28, 85 24"
            stroke="url(#infytelRed)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
