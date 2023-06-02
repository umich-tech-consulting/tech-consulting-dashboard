import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNav = ({isToggleOn, handleToggleClick}) => {
  const [userPrefersDarkMode, setUserPrefersDarkMode] = useState(false);
  const location = useLocation();
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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    return (
      <div className={`box-border p-5 h-[74px] sm:left-[96px] md:left-[96px] lg:left-[96px] xl:left-${isToggleOn ? "[96px]" : "[276px]"} fixed top-0 w-full bg-white border-b border-neutral-4 dark:bg-black dark:border-neutral-8`}>
        <div className={`flex justify-between h-full items-center sm:mr-[96px] xl:mr-${isToggleOn ? "[96px]" : "[276px]"} pl-8 pr-8`}>
        {dropdownOpen && (
          <div className="absolute bg-white dark:bg-black w-full h-screen top-0 left-0 z-50 pt-[24.5px] pl-[52px] pr-[52px]">
            <button id='toggle-button' className="box-border sm:hidden" onClick={toggleDropdown}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" className="stroke-neutral-9 dark:stroke-neutral-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div className="flex flex-col mt-4 gap-y-4 w-full">
              <Link
                onClick={toggleDropdown}
                to="/"
                className={`p-4 rounded-xl flex gap-x-4 w-full ${
                  location.pathname === "/"
                    ? "bg-neutral-3 dark:bg-neutral-9"
                    : "bg-white dark:bg-black"
                }`}
              >
                {location.pathname === "/" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-9 dark:fill-neutral-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20V18.5H3.525V17.45C3.125 17.45 2.775 17.3 2.475 17C2.175 16.7 2.025 16.35 2.025 15.95V4.5C2.025 4.1 2.175 3.75 2.475 3.45C2.775 3.15 3.125 3 3.525 3H20.475C20.875 3 21.225 3.15 21.525 3.45C21.825 3.75 21.975 4.1 21.975 4.5V15.95C21.975 16.35 21.825 16.7 21.525 17C21.225 17.3 20.875 17.45 20.475 17.45V18.5H24V20H0Z"/>
                  </svg>
                ) : (
                  <svg className="fill-neutral-9 dark:fill-neutral-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20V18.5H3.525V17.45C3.125 17.45 2.775 17.3 2.475 17C2.175 16.7 2.025 16.35 2.025 15.95V4.5C2.025 4.1 2.175 3.75 2.475 3.45C2.775 3.15 3.125 3 3.525 3H20.475C20.875 3 21.225 3.15 21.525 3.45C21.825 3.75 21.975 4.1 21.975 4.5V15.95C21.975 16.35 21.825 16.7 21.525 17C21.225 17.3 20.875 17.45 20.475 17.45V18.5H24V20H0ZM3.525 15.95H20.475V4.5H3.525V15.95Z"/>
                  </svg>
                )}
                <div className="title-medium text-neutral-9 dark:text-neutral-3">
                  Asset Management
                </div>
              </Link>
              <Link
                onClick={toggleDropdown}
                to="/announcements"
                className={`p-4 rounded-xl flex gap-x-4 w-full ${
                  location.pathname === "/announcements"
                    ? "bg-neutral-3 dark:bg-neutral-9"
                    : "bg-white dark:bg-black"
                }`}
              >
                <svg
                  className="fill-neutral-9 dark:fill-neutral-4"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M730 606v-60h150v60H730Zm50 290-121-90 36-48 121 90-36 48Zm-82-503-36-48 118-89 36 48-118 89ZM210 856V696h-70q-24.75 0-42.375-17.625T80 636V516q0-24.75 17.625-42.375T140 456h180l200-120v480L320 696h-50v160h-60Zm90-280Zm260 134V442q27 24 43.5 58.5T620 576q0 41-16.5 75.5T560 710ZM140 516v120h196l124 74V442l-124 74H140Z" />
                </svg>
                <div className="title-medium text-neutral-9 dark:text-neutral-4">
                  Announcements
                </div>
              </Link>
              <Link
                onClick={toggleDropdown}
                to="/resources"
                className={`p-4 rounded-xl flex gap-x-4 w-full ${
                  location.pathname === "/resources"
                    ? "bg-neutral-3 dark:bg-neutral-9"
                    : "bg-white dark:bg-black"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-neutral-9 dark:fill-neutral-4"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                >
                  <path d="M480 996q-78-69-170.5-106T120 853V424q94 0 186.5 43T480 587q81-77 173.5-120T840 424v429q-97 0-189.5 37T480 996Zm0-77q71-51 146.5-81.5T780 799V489q-68 11-143.5 54.5T480 664q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480 919Zm3-475q-65 0-109.5-44.5T329 290q0-65 44.5-109.5T483 136q65 0 109.5 44.5T637 290q0 65-44.5 109.5T483 444Zm.159-60Q522 384 549.5 356.341q27.5-27.66 27.5-66.5Q577 251 549.341 223.5q-27.66-27.5-66.5-27.5Q444 196 416.5 223.659q-27.5 27.66-27.5 66.5Q389 329 416.659 356.5q27.66 27.5 66.5 27.5ZM482 288Zm-2 416Z" />
                </svg>
                <div className="title-medium text-neutral-9 dark:text-neutral-4">
                  Resources
                </div>
              </Link>
            </div>
          </div>
        )}
          <button className="box-border sm:hidden" onClick={toggleDropdown}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 9H20.25M3.75 15.75H20.25" className="stroke-neutral-9 dark:stroke-neutral-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div className=" hidden sm:block md:block lg:block xl:block headline-medium text-neutral-9 dark:text-neutral-3">Tech Consultant Dashboard</div>
          <div className="flex gap-x-6">
            <button className="w-[24px] h-[24px]">
              <svg className="hidden" width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M9.78504 2.23627C9.78504 3.47136 8.78386 4.47253 7.54877 4.47253C6.31368 4.47253 5.3125 3.47136 5.3125 2.23627C5.3125 1.00118 6.31368 0 7.54877 0C8.78386 0 9.78504 1.00118 9.78504 2.23627Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M14.2991 22.5378V22.5373C14.2747 22.4079 12.2128 16.6687 12.2128 16.6687L9.09789 13.497V7.05845C9.09789 5.5959 6.44489 4.64076 6.13462 4.85522C5.93096 4.99589 1.26497 7.89188 1.26497 7.89188L0.770034 12.8189C0.763873 12.8643 0.759766 12.9096 0.759766 12.9565C0.759766 13.5125 1.21054 13.9632 1.76642 13.9632C2.32243 13.9632 2.77308 13.5124 2.77308 12.9565L3.18946 9.20445L5.50805 7.85436V13.478L9.76253 17.5804L11.9338 23.2053C12.1111 23.6698 12.5596 23.9999 13.0862 23.9999C13.768 23.9999 14.321 23.447 14.321 22.7657C14.3212 22.6875 14.3212 22.6529 14.2991 22.5372L14.2991 22.5378Z" />
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M0.295215 21.738C0.111412 21.9537 0 22.2326 0 22.5379C0 23.2196 0.552944 23.7725 1.23461 23.7725C1.67032 23.7725 2.0523 23.5463 2.27224 23.2054L6.04839 18.3204L7.20974 15.7525L5.30018 13.9629L3.88862 16.843L0.295215 21.738Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M9.64865 9.60352C9.64865 9.60352 9.61082 12.3766 9.64865 12.3195C9.68185 12.2697 11.045 13.4009 11.3958 13.6934C11.4216 13.7177 11.4485 13.7399 11.4768 13.7613C11.4773 13.7613 11.4778 13.7618 11.4778 13.7618C11.6457 13.8879 11.8539 13.9631 12.08 13.9631C12.6355 13.9631 13.0865 13.5123 13.0865 12.9564C13.0865 12.5818 12.8828 12.3506 12.5772 12.0823L9.64865 9.60352Z"/>
              </svg>
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M14.5938 16.0486L12.3634 14.2547L15.6119 7.75767C15.7089 7.56373 15.7574 7.36979 15.8059 7.17585C15.9513 6.35161 15.515 5.52737 14.7392 5.13949C14.5453 5.04252 14.3998 4.99403 14.2059 4.94555C14.1089 4.94555 14.0604 4.89706 13.9634 4.89706L10.0847 4.70312C9.79375 4.70312 9.50284 4.80009 9.26041 4.99403L5.96344 7.70919C5.4301 8.14555 5.38162 8.87283 5.81798 9.40616C6.01192 9.64858 6.25435 9.74555 6.49677 9.84252C6.83617 9.93949 7.22405 9.84252 7.51495 9.6001L10.424 7.17585L11.5392 7.22434L8.82405 12.6062C8.58162 13.091 8.58162 13.5759 8.72708 14.0607C8.87253 14.4971 9.16344 14.885 9.55132 15.1274L12.6059 17.6001V22.788C12.6059 23.4668 13.1392 24.0001 13.818 24.0001C14.4968 24.0001 15.0301 23.4668 15.0301 22.788V16.9698C15.0786 16.6304 14.8847 16.291 14.5938 16.0486Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M8.29148 15.2241L7.51573 17.1635L2.23087 18.6181C1.60057 18.812 1.21269 19.4423 1.40663 20.1211C1.55208 20.6544 2.03693 20.9938 2.57027 20.9938C2.66724 20.9938 2.76421 20.9938 2.90966 20.9453L8.77661 19.3453C9.16449 19.2484 9.4554 18.9575 9.60085 18.6181L10.3281 16.8726L9.11601 15.9029C8.72813 15.709 8.4857 15.4665 8.29176 15.2241H8.29148Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M20.0728 9.45475L17.2122 9.06687L16.5334 8.09717V8.14565L15.3213 10.5214L15.5637 10.8608C15.7577 11.1032 16.0486 11.2972 16.388 11.3457L19.7819 11.8305H19.9758C20.5577 11.8305 21.091 11.3941 21.188 10.8123C21.188 10.182 20.7516 9.55172 20.0728 9.45475Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M18.4722 2.37576C18.4722 3.6879 17.4086 4.75152 16.0965 4.75152C14.7843 4.75152 13.7207 3.6879 13.7207 2.37576C13.7207 1.06362 14.7843 0 16.0965 0C17.4086 0 18.4722 1.06362 18.4722 2.37576Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M3.68504 2.6665C3.39413 2.6665 3.2002 2.86044 3.2002 3.15135C3.2002 3.44226 3.39413 3.6362 3.68504 3.6362H7.85475C8.14566 3.6362 8.33959 3.44226 8.33959 3.15135C8.33959 2.86044 8.14566 2.6665 7.85475 2.6665H3.68504Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M5.1394 6.25438C5.1394 5.96347 4.94546 5.76953 4.65455 5.76953H0.484849C0.19394 5.76953 0 5.96347 0 6.25438C0 6.54529 0.19394 6.73923 0.484849 6.73923H4.65455C4.94546 6.73923 5.1394 6.54529 5.1394 6.25438Z"/>
                <path className="fill-neutral-9 dark:fill-neutral-1" d="M1.4541 11.6367C1.4541 11.9276 1.64804 12.1216 1.93895 12.1216H6.10865C6.39956 12.1216 6.5935 11.9276 6.5935 11.6367C6.5935 11.3458 6.39956 11.1519 6.10865 11.1519H1.93895C1.69653 11.1519 1.4541 11.3943 1.4541 11.6367Z"/>
              </svg>
            </button>
            <button onClick={toggleDarkMode}>
              <svg xmlns="http://www.w3.org/2000/svg" className="dark:hidden fill-neutral-9" height="24" viewBox="0 96 960 960" width="24">
                <path d="M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="hidden dark:block fill-neutral-3" height="24" viewBox="0 96 960 960" width="24">
                <path d="M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480 936Zm0-60q109 0 190-67.5T771 650q-25 11-53.667 16.5Q688.667 672 660 672q-114.689 0-195.345-80.655Q384 510.689 384 396q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180 576q0 125 87.5 212.5T480 876Zm-4-297Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default TopNav;
