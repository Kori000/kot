/**
 * @desc
 * Monitor defined viewport width and height, if viewport width is less than minwidth and viewport height is less than minheight, return true.
 * @usage
 * const isNeedMini = useMonitor(768, 1024);
 * if (isNeedMini) {
 *  // do something
 * }
 * @param {number} minheight
 * @param {number} minwidth
 * @returns {boolean}
 */

import React, { useState, useEffect } from 'react';

export default function useMonitor(minheight, minwidth) {
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
