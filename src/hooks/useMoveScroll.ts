import {useCallback, useEffect, useRef} from 'react';

const useMoveScroll = (elements) => {
  const scrollToTarget = (index) => {
    const targetElement = elements[index].current;
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 96;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      const animateScroll = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / 200, 1);
        window.scrollTo(0, startPosition + distance * progress);
        if (progress < 200) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };
  return {scrollToTarget};
};

export default useMoveScroll;
