/**
 * @desc
 * Monitor defined viewport width, if viewport width is less than width, return true.
 * @usage
 * const isLess768 = useLessWidth(768);
 * if (isLess768) {
 * // do something
 * }
 * @param {number} width
 * @returns {boolean}
 */

import React, { useState, useEffect } from 'react';

export default function useLessWidth(width) {
  if (typeof width !== 'number') {
    throw new Error('The width must be a number');
  }
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

  const elementWidth = viewportWidth < width ? true : false;

  return elementWidth;
}
