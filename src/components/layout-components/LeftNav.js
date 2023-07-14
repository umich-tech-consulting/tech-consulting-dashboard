import { Link, useLocation } from "react-router-dom";
import logo from "../../icons/left-nav/logo.svg";
import home_inactive from "../../icons/left-nav/home_inactive.svg";
import home_active from "../../icons/left-nav/home_active.svg";
import announcements_inactive from "../../icons/left-nav/announcements_inactive.svg";
import announcements_active from "../../icons/left-nav/announcements_active.svg";
import asset_management_inactive from "../../icons/left-nav/asset_management_inactive.svg";
import asset_management_active from "../../icons/left-nav/asset_management_active.svg";
import resources_inactive from "../../icons/left-nav/resources_inactive.svg";
import resources_active from "../../icons/left-nav/resources_active.svg";
import slack_logo from "../../icons/left-nav/slack_logo.png";
import tdxlogo from "../../icons/left-nav/tdxlogo.png";
import gsxicon from "../../icons/left-nav/gsxicon.png";

const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="box-border pt-5 pl-2 pr-2 h-screen border-r bg-base-light border-neutral-3 w-[230px]">
      <Link to='/'>
        <img className="h-10 w-10" src={logo} alt='Dashboard Logo' />
      </Link>
      <div className="mt-6 w-50">
        <Link
          to="/"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/" ? (
            <img src={home_active} alt='Active Home Logo' />
          ) : (
            <img src={home_inactive} alt='Inactive Home Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Home
          </div>
        </Link>
        <Link
          to="/announcements"
          className={`link-container ${
            location.pathname === "/announcements"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/announcements" ? (
            <img src={announcements_active} alt='Active Announcements Logo' />
          ) : (
            <img src={announcements_inactive} alt='Inactive Announcements Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/announcements"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Announcements
          </div>
        </Link>
        <Link
          to="/asset-management"
          className={`link-container ${
            location.pathname === "/asset-management"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/asset-management" ? (
            <img src={asset_management_active} alt='Active Asset Management Logo' />
          ) : (
            <img src={asset_management_inactive} alt='Inactive Asset Management Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/asset-management"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Asset Management
          </div>
        </Link>
        <Link
          to="/resources"
          className={`link-container ${
            location.pathname === "/resources"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/resources" ? (
            <img src={resources_active} alt='Active Resources Logo' />
          ) : (
            <img src={resources_inactive} alt='Inactive Resources Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/resources"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Resources
          </div>
        </Link>
      </div>
      <div className="absolute bottom-0 pb-2 w-[213.3px] body-medium text-neutral-9">
        <div className="bg-white p-3 rounded-md">
          <div className="mb-4 title-small">Quick Links</div>
          <div className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-2 hover:bg-neutral-2 w-fit py-1 px-2 rounded-md" title="Information Technology Services Slack workspace">
              <img className="w-4 h-4" src={slack_logo} alt='Slack Logo' />
              <div>Slack</div>
            </a>
            <a href="/" className="flex items-center gap-2 hover:bg-neutral-2 w-fit py-1 px-2 rounded-md" title="Ticket and asset management system">
              <img className="w-4 h-4" src={tdxlogo} alt='TDX Logo' />
              <div>TDX</div>
            </a>
            <a href="/" className="flex items-center gap-2 hover:bg-neutral-2 w-fit py-1 px-2 rounded-md" title="Apple Global Service Exchange login">
              <img className="w-4 h-4" src={gsxicon} alt='GSX Icon' />
              <div>GSX</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftNav;
