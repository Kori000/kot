import React, { useState, useEffect } from 'react';

function ChangeSize(minheight, minwidth) {
  if (minheight === undefined || minwidth === undefined) {
    throw new Error('minheight or minwidth is undefined');
  }
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

  const isNeedMini = viewportHeight < minheight && viewportWidth >= minwidth;

  return isNeedMini;
}
export default ChangeSize;
