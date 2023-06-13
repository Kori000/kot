/**
 * @desc
 * Detect if the browser is Safari.
 * @usage
 * import IsSafari from 'src/utils/IsSafari';
 * if (IsSafari()) {
 * // do something
 * }
 * @returns {boolean}
 */

import Bowser from 'bowser';

export default function IsSafari() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  if (browser.getBrowserName() === 'Safari') {
    return true;
  }
  return false;
}
