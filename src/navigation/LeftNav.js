import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "../components/Navigation/DarkModeButton";
import {
  HomeInactive,
  HomeActive,
  AnnouncementsInactive,
  AnnouncementsActive,
  WarrantyInactive,
  WarrantyActive,
  AssetManagementActive,
  AssetManagementInactive,
  Logo,
  ResourcesActive,
  ResourceInactive,
} from "../icons/nav/NavigationSvgs";
import slack_logo from "../icons/nav/slack_logo.png";
import tdxlogo from "../icons/nav/tdxlogo.png";
import gsxicon from "../icons/nav/gsxicon.png";
import umichicon from "../icons/nav/umichicon.png";
import GitInfo from "react-git-info/macro";

const gitInfo = GitInfo();
const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="box-border pt-5 pl-2 pr-2 h-screen border-r bg-base-light dark:bg-neutral-10 border-neutral-3 dark:border-neutral-8 w-[230px]">
      <Link to="/" aria-label="Home Button">
        <Logo />
      </Link>
      <div className="mt-6 w-50">
        <Link
          to="/"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/"
              ? "bg-blue-10* dark:bg-yellow-5*"
              : "bg-base-light dark:bg-neutral-10 hover:bg-blue-1 dark:hover:bg-neutral-9"
          }`}
        >
          {location.pathname === "/" ? <HomeActive /> : <HomeInactive />}
          <div
            className={`body-medium leading-none ${
              location.pathname === "/"
                ? "text-neutral-1 dark:text-neutral-9"
                : "text-neutral-9 dark:text-neutral-1"
            }`}
          >
            Home
          </div>
        </Link>
        <Link
          to="/announcements"
          className={`link-container ${
            location.pathname === "/announcements"
              ? "bg-blue-10* dark:bg-yellow-5*"
              : "bg-base-light dark:bg-neutral-10 hover:bg-blue-1 dark:hover:bg-neutral-9"
          }`}
        >
          {location.pathname === "/announcements" ? (
            <AnnouncementsActive />
          ) : (
            <AnnouncementsInactive />
          )}
          <div
            className={`body-medium leading-none ${
              location.pathname === "/announcements"
                ? "text-neutral-1 dark:text-neutral-9"
                : "text-neutral-9 dark:text-neutral-1"
            }`}
          >
            Announcements
          </div>
        </Link>
        <Link
          to="/warranty"
          className={`link-container ${
            location.pathname === "/warranty"
              ? "bg-blue-10* dark:bg-yellow-5*"
              : "bg-base-light dark:bg-neutral-10 hover:bg-blue-1 dark:hover:bg-neutral-9"
          }`}
        >
          {location.pathname === "/warranty" ? (
            <WarrantyActive />
          ) : (
            <WarrantyInactive />
          )}
          <div
            className={`body-medium leading-none ${
              location.pathname === "/warranty"
                ? "text-neutral-1 dark:text-neutral-9"
                : "text-neutral-9 dark:text-neutral-1"
            }`}
          >
            Warranty
          </div>
        </Link>
        <Link
          to="/asset-management"
          className={`link-container ${
            location.pathname.startsWith("/asset-management")
              ? "bg-blue-10* dark:bg-yellow-5*"
              : "bg-base-light dark:bg-neutral-10 hover:bg-blue-1 dark:hover:bg-neutral-9"
          }`}
        >
          {location.pathname.startsWith("/asset-management") ? (
            <AssetManagementActive />
          ) : (
            <AssetManagementInactive />
          )}
          <div className={`body-medium leading-none ${
            location.pathname.startsWith("/asset-management")
              ? "text-neutral-1 dark:text-neutral-9"
              : "text-neutral-9 dark:text-neutral-1"
          }`}>
            Asset Management
          </div>
        </Link>
        <Link
          to="/resources"
          className={`link-container ${
            location.pathname.startsWith("/resources")
              ? "bg-blue-10* dark:bg-yellow-5*"
              : "bg-base-light dark:bg-neutral-10 hover:bg-blue-1 dark:hover:bg-neutral-9"
          }`}
        >
          {location.pathname.startsWith("/resources") ? (
            <ResourcesActive />
          ) : (
            <ResourceInactive />
          )}
          <div
            className={`body-medium leading-none ${
              location.pathname.startsWith("/resources")
                ? "text-neutral-1 dark:text-neutral-9"
                : "text-neutral-9 dark:text-neutral-1"
            }`}
          >
            Resources
          </div>
        </Link>
      </div>
      <div className="absolute bottom-0 pb-2 w-[213.3px] body-medium text-neutral-9 dark:text-neutral-1">
        <div className="bg-white dark:bg-neutral-9 p-3 rounded-md">
          <div className="mb-4 title-small">Quick Links</div>
          <div className="flex flex-col gap-2">
            <a
              href="https://wolverineaccess.umich.edu/launch-task/all/employee-self-service?taskReferrerCenterId=1700"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-blue-1 dark:hover:bg-neutral-8 w-fit py-1 px-2 rounded-md"
              title="Clock in and out of work using the Time Reporting tab"
            >
              <img className="w-4 h-4" src={umichicon} alt="Umich Icon" />
              <div>TimeClock</div>
            </a>
            <a
              href="http://umich-its-annarbor.slack.com/"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-blue-1 dark:hover:bg-neutral-8 w-fit py-1 px-2 rounded-md"
              title="Information Technology Services Slack workspace"
            >
              <img className="w-4 h-4" src={slack_logo} alt="Slack Logo" />
              <div>Slack</div>
            </a>
            <a
              href="https://teamdynamix.umich.edu/"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-blue-1 dark:hover:bg-neutral-8 w-fit py-1 px-2 rounded-md"
              title="Ticket and asset management system"
            >
              <img className="w-4 h-4" src={tdxlogo} alt="TDX Logo" />
              <div>TDX</div>
            </a>
            <a
              href="http://gsx2.apple.com/"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-blue-1 dark:hover:bg-neutral-8 w-fit py-1 px-2 rounded-md"
              title="Apple Global Service Exchange login"
            >
              <img className="w-4 h-4" src={gsxicon} alt="GSX Icon" />
              <div>GSX</div>
            </a>
          </div>
        </div>
        <div className="my-2">
          <DarkModeButton />
        </div>
        <div className="flex mt-2">
          <a
            href="https://forms.gle/kb1CQuKLGzneFGRj8"
            target="blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-1 dark:hover:bg-neutral-9 w-fit py-1 px-2 rounded-md"
            title="Feedback Form"
          >
            <div className="body-small">Feedback</div>
          </a>
          <a
            href="https://drive.google.com/drive/folders/1sVpM8OqohlyAYyO8vc_9vOE845Q3UEgG?usp=drive_link"
            target="blank"
            rel="noopener noreferrer"
            className="hover:bg-blue-1 dark:hover:bg-neutral-9 w-fit py-1 px-2 rounded-md"
            title="Dashboard Documentation"
          >
            <div className="body-small">Documentation</div>
          </a>
        </div>
        <a
          href="https://github.com/umich-tech-consulting/tech-consulting-dashboard"
          target="blank"
          rel="noopener noreferrer"
          className="mt-2 px-2 body-small text-neutral-8 dark:text-neutral-4 hover:underline hover:text-neutral-9 dark:hover:text-neutral-1"
        >
          Git Hash: {gitInfo.commit.shortHash}
        </a>
      </div>
    </div>
  );
};
export default LeftNav;
