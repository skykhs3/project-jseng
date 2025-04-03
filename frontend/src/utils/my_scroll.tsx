import { useRef, useCallback } from "react";

// Easing function for smooth scroll
const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const isScrolling = useRef(false); // To keep track of scrolling state

  // Memoized scroll function using useCallback
  const setScrollPosition = useCallback(
    (scrollPosition: number, duration = 1000) => {
      const start = window.scrollY; // Current scroll position
      const startTime = performance.now(); // Start time of the scroll

      // Function to animate the scroll
      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1
        const easing = easeInOutQuad(progress); // Calculate easing

        // Scroll to the new position
        window.scrollTo(0, start + (scrollPosition - start) * easing);

        // Continue animation if duration not reached
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling.current = false; // Reset scrolling state
        }
      };

      isScrolling.current = true; // Set scrolling state
      requestAnimationFrame(animateScroll); // Start animation
    },
    [],
  );

  return { setScrollPosition, isScrolling }; // Return scroll function and state
};

export default useSmoothScroll;
