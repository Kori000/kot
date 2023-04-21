import Bowser from 'bowser';

export default function IsSafari() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  if (browser.getBrowserName() === 'Safari') {
    return true;
  }
  return false;
}
