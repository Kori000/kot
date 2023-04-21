import React, { useState, useEffect } from 'react';

function ChangeSize() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isNeedMini = viewportHeight < 840 && viewportWidth >= 1200;

  return isNeedMini;
}
export default ChangeSize;
