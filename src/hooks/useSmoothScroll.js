import { useEffect, useCallback } from 'react';

/**
 * Custom hook for smooth scroll interactions with Lenis
 * Provides optimized scrolling functions that work with the global Lenis instance
 */
export const useSmoothScroll = () => {
  // Scroll to element by ID
  const scrollToElement = useCallback((elementId, options = {}) => {
    const element = document.getElementById(elementId);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, {
        offset: options.offset || -80, // Account for navbar
        duration: options.duration || 1.4,
        easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        immediate: false,
        ...options,
      });
    }
  }, []);

  // Scroll to top
  const scrollToTop = useCallback((duration = 1.4) => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration });
    }
  }, []);

  // Scroll by amount
  const scrollBy = useCallback((amount, duration = 0.8) => {
    if (window.lenis) {
      window.lenis.scrollTo(window.scrollY + amount, { duration });
    }
  }, []);

  // Stop/start scroll
  const stopScroll = useCallback(() => {
    if (window.lenis) {
      window.lenis.stop();
    }
  }, []);

  const startScroll = useCallback(() => {
    if (window.lenis) {
      window.lenis.start();
    }
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollBy,
    stopScroll,
    startScroll,
    lenis: typeof window !== 'undefined' ? window.lenis : null,
  };
};

/**
 * Hook to detect scroll direction with Lenis
 */
export const useScrollDirection = (callback) => {
  useEffect(() => {
    if (!window.lenis) return;

    const handleScroll = ({ scroll, direction }) => {
      callback({ scroll, direction, isScrollingDown: direction === 1 });
    };

    window.lenis.on('scroll', handleScroll);

    return () => {
      window.lenis?.off('scroll', handleScroll);
    };
  }, [callback]);
};

export default useSmoothScroll;
