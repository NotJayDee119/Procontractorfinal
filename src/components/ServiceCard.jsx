import React, { useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';

export const ServiceCard = memo(({ title, icon }) => {
  const navigate = useNavigate();
  
  // Memoized navigation handler
  const handleNavigateContact = useCallback(() => navigate('/contact'), [navigate]);
  
  // Handle icon as either a function or JSX element for backwards compatibility
  const IconComponent = typeof icon === 'function' ? icon() : icon;

  return (
    <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-secondary/50 hover:border-primary/20">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Icon Container */}
        <div className="w-24 h-24 flex items-center justify-center bg-secondary/40 rounded-2xl group-hover:bg-primary/5 transition-all duration-300">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {IconComponent}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-custom font-bold text-2xl text-primary leading-tight min-h-[3.5rem] flex items-center">
          {title}
        </h3>

        {/* Decorative Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Get a Quote Button */}
        <button 
          onClick={handleNavigateContact} 
          className="relative text-primary font-semibold text-sm tracking-wide hover:text-accent transition-colors duration-300 group/btn py-2"
          aria-label={`Get a quote for ${title}`}
        >
          <span className="relative z-10">GET A QUOTE</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:right-[-20px] transition-all duration-300">→</span>
        </button>
      </div>
    </div>
  );
});
