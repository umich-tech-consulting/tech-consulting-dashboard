import { Link, useLocation } from "react-router-dom";
//import logo from "../icons/left-nav/logo.svg";
// import home_inactive from "../icons/left-nav/home_inactive.svg"; // Hidden while homepage is disabled
// import home_active from "../icons/left-nav/home_active.svg"; // Hidden while homepage is disabled
import announcements_inactive from "../icons/left-nav/announcements_inactive.svg";
import announcements_active from "../icons/left-nav/announcements_active.svg";
// import asset_management_inactive from "../icons/left-nav/asset_management_inactive.svg";
// import asset_management_active from "../icons/left-nav/asset_management_active.svg";
import resources_inactive from "../icons/left-nav/resources_inactive.svg";
import resources_active from "../icons/left-nav/resources_active.svg";
import slack_logo from "../icons/left-nav/slack_logo.png";
import tdxlogo from "../icons/left-nav/tdxlogo.png";
import gsxicon from "../icons/left-nav/gsxicon.png";
import umichicon from "../icons/left-nav/umichicon.png";
import umich_tcd_logo from "../icons/left-nav/umich_tcd_logo.svg";
import GitInfo from 'react-git-info/macro'

const gitInfo = GitInfo();
const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="box-border pt-5 pl-2 pr-2 h-screen border-r bg-base-light border-neutral-3 w-[230px]">
      {/* THis is where the icon will link to */}
      <Link to='/announcements'>
        {/* <img className="h-10 w-10" src={logo} alt='Dashboard Logo' /> */}
        <img className="h-10" src={umich_tcd_logo} alt='Dashboard Logo' />
      </Link>
      <div className="mt-6 w-50">
        {/* <Link
          to="/"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/"
              ? "bg-blue-9"
              : "bg-base-light hover:bg-blue-0"
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
        </Link> */}
        <Link
          to="/announcements"
          className={`link-container ${
            location.pathname === "/announcements"
              ? "bg-blue-9"
              : "bg-base-light hover:bg-blue-0"
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
        {/* <Link
          to="/asset-management"
          className={`link-container ${
            location.pathname.startsWith("/asset-management")
              ? "bg-blue-9"
              : "bg-base-light hover:bg-blue-0"
          }`}
        >
          {location.pathname.startsWith("/asset-management") ? (
            <img src={asset_management_active} alt='Active Asset Management Logo' />
          ) : (
            <img src={asset_management_inactive} alt='Inactive Asset Management Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname.startsWith("/asset-management")
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Asset Management
          </div>
        </Link> */}
        <Link
          to="/resources"
          className={`link-container ${
            location.pathname.startsWith("/resources")
              ? "bg-blue-9"
              : "bg-base-light hover:bg-blue-0"
          }`}
        >
          {location.pathname.startsWith("/resources") ? (
            <img src={resources_active} alt='Active Resources Logo' />
          ) : (
            <img src={resources_inactive} alt='Inactive Resources Logo' />
          )}
          <div className={`body-medium leading-none ${
            location.pathname.startsWith("/resources")
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
            <a href="https://wolverineaccess.umich.edu/launch-task/all/employee-self-service?taskReferrerCenterId=1700" target="blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Clock in and out of work using the Time Reporting tab">
              <img className="w-4 h-4" src={umichicon} alt='Umich Icon' />
              <div>TimeClock</div>
            </a>
            <a href="http://umich-its-annarbor.slack.com/" target="blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Information Technology Services Slack workspace">
              <img className="w-4 h-4" src={slack_logo} alt='Slack Logo' />
              <div>Slack</div>
            </a>
            <a href="https://teamdynamix.umich.edu/" target="blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Ticket and asset management system">
              <img className="w-4 h-4" src={tdxlogo} alt='TDX Logo' />
              <div>TDX</div>
            </a>
            <a href="http://gsx2.apple.com/" target="blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Apple Global Service Exchange login">
              <img className="w-4 h-4" src={gsxicon} alt='GSX Icon' />
              <div>GSX</div>
            </a>
          </div>
        </div>
        <div className="flex mt-2">
          <a href="https://forms.gle/kb1CQuKLGzneFGRj8" target="blank" rel="noopener noreferrer" className="hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Feedback Form">
            <div className="body-small">Feedback</div>
          </a>
          <a href="https://drive.google.com/drive/folders/1sVpM8OqohlyAYyO8vc_9vOE845Q3UEgG?usp=drive_link" target="blank" rel="noopener noreferrer" className="hover:bg-blue-0 w-fit py-1 px-2 rounded-md" title="Dashboard Documentation">
            <div className="body-small">Documentation</div>
          </a>
        </div>
        <div className="mt-2 px-2 body-small text-neutral-7">Git Hash: {gitInfo.commit.shortHash}</div>
      </div>
    </div>
  );
};
export default LeftNav;
