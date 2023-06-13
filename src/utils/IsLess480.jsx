import React, { useState, useEffect } from 'react';

export default function IsLess480() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const elementWidth = viewportWidth < 480 ? true : false;

  return elementWidth;
}
