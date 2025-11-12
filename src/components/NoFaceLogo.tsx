"use client";

export default function NoFaceLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      className={className}
    >
      <defs>
        {/* Minimalist gradient */}
        <linearGradient id="minimalistGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Minimalist speech bubble */}
      <path 
        d="M12 16 C12 10 16 6 22 6 L42 6 C48 6 52 10 52 16 L52 36 C52 42 48 46 42 46 L28 46 L22 52 L22 46 C16 46 12 42 12 36 Z" 
        fill="url(#minimalistGradient)" 
        stroke="white" 
        strokeWidth="2"
      />
      
      {/* Minimalist conversation indicator */}
      <circle cx="24" cy="26" r="3" fill="white" />
      <circle cx="40" cy="26" r="3" fill="white" />
      <path 
        d="M20 36 Q 32 40 44 36" 
        stroke="white" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round"
      />
    </svg>
  );
}