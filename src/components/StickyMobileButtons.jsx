import React, { useState, useEffect, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';

const StickyMobileButtons = memo(() => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoized navigation handler
  const handleNavigateContact = useCallback(() => navigate('/contact'), [navigate]);

  // Handle scroll for sticky button on mobile
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past 300px
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`lg:hidden fixed top-24 left-0 right-0 z-40 px-4 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex gap-3">
        <button 
          onClick={handleNavigateContact} 
          className="flex-1 px-6 py-3 bg-[#f6f1ef] text-[#333333] hover:bg-white transition-all duration-300 font-wix-madefor font-semibold rounded-full shadow-lg text-base"
        >
          GET A QUOTE
        </button>
        <a 
          href="tel:+17867890097" 
          className="flex items-center justify-center px-6 py-3 bg-white text-[#333333] hover:bg-[#f6f1ef] transition-all duration-300 font-wix-madefor font-bold rounded-full shadow-lg text-base"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          CALL
        </a>
      </div>
    </div>
  );
});

export default StickyMobileButtons;
