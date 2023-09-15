import { useState, useEffect } from "react";


const DarkModeButton = () => {
    const [userPrefersDarkMode, setUserPrefersDarkMode] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode === 'true' || userPrefersDarkMode;
    });

    const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      localStorage.setItem('darkMode', String(newDarkMode));
      setUserPrefersDarkMode(newDarkMode);
    };

    useEffect(() => {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setUserPrefersDarkMode(prefersDarkMode);
    }, []);

    useEffect(() => {
      const htmlElement = document.querySelector('html');
      if (darkMode) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }, [darkMode]);

    return (
      <button aria-label="Darkmode/Lightmode Toggle" className="bg-white  dark:bg-neutral-9 border border-neutral-3 dark:border-neutral-8 h-6 w-12 my-2 rounded-full flex items-center" onClick={toggleDarkMode}>
        <div className="m-1">
          <div className={`transition-all duration-500 ease transform ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}>
            {!darkMode ?
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path className="stroke-neutral-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 2.5v1.875m5.3033.32167L13.9775 6.0225M17.5 10h-1.875m-.3217 5.3033-1.3258-1.3258M10 15.625V17.5m-3.9775-3.5225-1.32583 1.3258M4.375 10H2.5m3.5225-3.9775L4.69667 4.69667M13.125 10c0 .8288-.3292 1.6237-.9153 2.2097-.586.5861-1.3809.9153-2.2097.9153-.8288 0-1.62366-.3292-2.20971-.9153C7.20424 11.6237 6.875 10.8288 6.875 10c0-.8288.32924-1.62366.91529-2.20971C8.37634 7.20424 9.1712 6.875 10 6.875c.8288 0 1.6237.32924 2.2097.91529.5861.58605.9153 1.38091.9153 2.20971Z"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path className="stroke-neutral-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.1267 12.5019c-.9907.4129-2.0535.6248-3.1267.6233-4.4875 0-8.125-3.6375-8.125-8.125 0-1.10833.22167-2.16416.62333-3.12666-1.48044.61759-2.74502 1.65946-3.63447 2.99438C2.9744 6.20283 2.49986 7.7711 2.5 9.3752c0 4.4875 3.6375 8.125 8.125 8.125 1.6041.0001 3.1724-.4744 4.5073-1.3639 1.3349-.8894 2.3768-2.154 2.9944-3.6344Z"/>
              </svg>
            }
          </div>
        </div>
      </button>
    )
}
export default DarkModeButton