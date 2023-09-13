import { Link, useLocation } from "react-router-dom";
// import logo from "../icons/left-nav/logo.svg";
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
import google_slides from "../icons/left-nav/google_slides.png";
import google_forms from "../icons/left-nav/google_forms.png";

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
        <div className="bg-blue-9 p-3 rounded-md mb-3">
          <div className="title-small text-neutral-1 mb-4">Password Reset</div>
          <a href="https://docs.google.com/presentation/d/1EtJ8yeuP5Aauassfl5urtBQLZLXla27xtrqyKBqfXrM/edit?usp=sharing" target="blank" rel="noopener noreferrer" className="flex items-top gap-2 hover:bg-blue-7 w-fit py-1 px-2 rounded-md" title="Google Slides outlining how to reset a password in person">
            <img className="mt-1 w-4 h-4" src={google_slides} alt='Google Slides' />
            <div className="text-neutral-1">In-person password reset training</div>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetry8noWpu3c0kF_JSpy3irZMYh9nhCeZUJagx329WMVxWnw/viewform" target="blank" rel="noopener noreferrer" className="flex items-top gap-2 hover:bg-blue-7 w-fit py-1 px-2 rounded-md" title="Please fill out this form when you help someone reset a password or work with someone on an issue following a self-service password reset">
            <img className="mt-1 w-4 h-4" src={google_forms} alt='Google Forms' />
            <div className="text-neutral-1">Password Project Tracking</div>
          </a>
          <hr className="pb-[2px] mt-[2px] border-blue-8"></hr>
          <div className="text-white body-small font-medium mt-2 mb-2">If WiFi issues occur after reset:</div>
          <div className="text-neutral-2 body-small mt-2">- Forget the network and reconnect</div>
          <div className="flex">
            <div className="text-neutral-2 body-small mt-2 mb-1">- Or use</div>
            <a href="https://msetup.its.umich.edu/" target="blank" rel="noopener noreferrer" className="flex items-top gap-1 hover:bg-blue-7 w-fit py-1 px-1 m-1 mb-0 rounded-md items-center" title="Information about connecting to Mwireless">
              <img className="w-3 h-3" src={umichicon} alt='Umich Icon' />
              <div className="text-neutral-1 body-small">Msetup</div>
            </a>

          </div>
          {/* <div className="text-white body-small font-medium mt-2 mb-1">If customer has trouble with Wifi after password reset</div> */}
        </div>
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
        <div className="mt-2 px-2 body-small text-neutral-7">v.0.0.1(&alpha;)</div>
      </div>
    </div>
  );
};
export default LeftNav;
