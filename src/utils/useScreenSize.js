import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(NaN);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};
