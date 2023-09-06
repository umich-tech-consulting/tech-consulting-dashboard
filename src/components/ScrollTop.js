// A "bug" exists with react router. If you scroll down a page and then visit a new page, your scoll position on the new page will be the same as the scroll position on the previous page, instead of starting you at the top of the page. This component ensures that every time you visit a new page, you will start at the top of the page.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;