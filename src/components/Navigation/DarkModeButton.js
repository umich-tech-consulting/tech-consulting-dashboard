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
      <button onClick={toggleDarkMode}>Darkmode Toggle</button>
    )
}
export default DarkModeButton