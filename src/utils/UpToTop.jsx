/**
 * @desc
 * Scroll to the top of the page.
 * @usage
 * import UpToTop from 'src/utils/UpToTop';
 * UpToTop();
 */

// 回到页面最顶部
export default function UpToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
