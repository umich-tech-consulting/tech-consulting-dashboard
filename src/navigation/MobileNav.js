import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "../components/Navigation/DarkModeButton";
import { HamburgerMenu, MobileLogo, CloseMenu } from "../icons/nav/NavigationSvgs";
import GitInfo from "react-git-info/macro";

const gitInfo = GitInfo();

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        // If the screen width is less than or equal to 768px, use the state value
        setShowMobileNav(showMobileNav);
      } else {
        // If the screen width is greater than 768px, always set showMobileNav to false
        setShowMobileNav(false);
      }
    };

    // Add the listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Check the initial screen width
    handleMediaQueryChange(mediaQuery);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [showMobileNav]);

  return (
    <>
      <div className="fixed w-full z-50 mb-16">
        <div className="bg-white dark:bg-neutral-9 shadow-light dark:shadow-dark p-4 md:hidden z-50 ">
          <div className="flex justify-between items-start">
            <button onClick={toggleMobileNav}>
              {showMobileNav ? <CloseMenu /> : <HamburgerMenu /> }
            </button>
            <div className="">
              <Link to="/" aria-label="Home Button">
                <MobileLogo />
              </Link>
            </div>
            <div className="w-6"></div>
          </div>
        </div>
        <div
          className={`${
            !showMobileNav && "hidden"
          }  h-screen bg-neutral-1 dark:bg-neutral-10 text-neutral-9 dark:text-neutral-2 z-50 p-4 absolute overflow-y-scroll w-full max-h-screen`}
        >
          <div className="flex flex-col gap-4 mt-4">
            <Link to="/" className="headline-large hover:text-blue-10* dark:hover:text-yellow-5*" onClick={toggleMobileNav}>
              Home
            </Link>
            <Link
              to="/announcements"
              className="headline-large hover:text-blue-10* dark:hover:text-yellow-5*"
              onClick={toggleMobileNav}
            >
              Announcements
            </Link>
            <Link
              to="/warranty"
              className="headline-large hover:text-blue-10* dark:hover:text-yellow-5*"
              onClick={toggleMobileNav}
            >
              Warranty
            </Link>
            <Link
              to="/asset-management"
              className="headline-large hover:text-blue-10* dark:hover:text-yellow-5*"
              onClick={toggleMobileNav}
            >
              Asset Management
            </Link>
            <Link
              to="/resources"
              className="headline-large hover:text-blue-10* dark:hover:text-yellow-5*"
              onClick={toggleMobileNav}
            >
              Resources
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-8 headline-small">
            <div className="title-medium text-neutral-7 dark:text-neutral-4 mt-8">
              Quick Links
            </div>
            <a
              href="https://wolverineaccess.umich.edu/launch-task/all/employee-self-service?taskReferrerCenterId=1700"
              target="blank"
              rel="noopener noreferrer"
              title="Clock in and out of work using the Time Reporting tab"
              className="hover:text-blue-10* dark:hover:text-yellow-5*"
            >
              TimeClock
            </a>
            <a
              href="http://umich-its-annarbor.slack.com/"
              target="blank"
              rel="noopener noreferrer"
              title="Information Technology Services Slack workspace"
              className="hover:text-blue-10* dark:hover:text-yellow-5*"
            >
              Slack
            </a>
            <a
              href="https://teamdynamix.umich.edu/"
              target="blank"
              rel="noopener noreferrer"
              title="Ticket and asset management system"
              className="hover:text-blue-10* dark:hover:text-yellow-5*"
            >
              TDX
            </a>
            <a
              href="http://gsx2.apple.com/"
              target="blank"
              rel="noopener noreferrer"
              title="Apple Global Service Exchange login"
              className="hover:text-blue-10* dark:hover:text-yellow-5*"
            >
              GSX
            </a>
            <div className="body-medium flex text-neutral-9 dark:text-neutral-1 mt-20 mb-20 justify-between items-end">
              <div className="gap-2 flex flex-col justify-between">
                <a
                  href="https://forms.gle/kb1CQuKLGzneFGRj8"
                  target="blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-1 dark:hover:bg-neutral-9 w-fit py-1 rounded-md"
                  title="Feedback Form"
                >
                  <div className="body-small">Feedback</div>
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1sVpM8OqohlyAYyO8vc_9vOE845Q3UEgG?usp=drive_link"
                  target="blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-1 dark:hover:bg-neutral-9 w-fit py-1 rounded-md"
                  title="Dashboard Documentation"
                >
                  <div className="body-small">Documentation</div>
                </a>
                <a
                  href="https://github.com/umich-tech-consulting/tech-consulting-dashboard"
                  target="blank"
                  rel="noopener noreferrer"
                  className="mt-2 body-small text-neutral-8 dark:text-neutral-4 hover:underline hover:text-neutral-9 dark:hover:text-neutral-1"
                >
                  Git Hash: {gitInfo.commit.shortHash}
                </a>
              </div>
              <DarkModeButton />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default MobileNav;
