import { Link } from "react-router-dom";
import {
  ExternalLink,
  ChevronRight,
  ResourcesLogo,
} from "../../icons/home/HomeSvgs";
import umichicon from "../../icons/nav/umichicon.png";
import slack_logo from "../../icons/nav/slack_logo.png";
import tdxlogo from "../../icons/nav/tdxlogo.png";
import gsxicon from "../../icons/nav/gsxicon.png";

const HomeQuickLinks = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-9 rounded-xl flex flex-col title-medium text-neutral-8 dark:text-neutral-3 border border-neutral-2 dark:border-neutral-8">
        <div className="title-large text-neutral-9 dark:text-neutral-2 p-6">Quick Links</div>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <a
          href="https://wolverineaccess.umich.edu/launch-task/all/employee-self-service?taskReferrerCenterId=1700"
          target="blank"
          rel="noopener noreferrer"
          className="flex w-full justify-between px-6 py-5 hover:bg-blue-0 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={umichicon} alt="Umich Logo" />
            <div>TimeClock</div>
          </div>
          <ExternalLink />
        </a>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <a
          href="http://umich-its-annarbor.slack.com/"
          target="blank"
          rel="noopener noreferrer"
          className="flex w-full justify-between px-6 py-5 hover:bg-blue-0 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={slack_logo} alt="Slack Logo" />
            <div>Slack</div>
          </div>
          <ExternalLink />
        </a>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <a
          href="https://teamdynamix.umich.edu/"
          target="blank"
          rel="noopener noreferrer"
          className="flex w-full justify-between px-6 py-5 hover:bg-blue-0 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={tdxlogo} alt="TDX Logo" />
            <div>TDX</div>
          </div>
          <ExternalLink />
        </a>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <a
          href="http://gsx2.apple.com/"
          target="blank"
          rel="noopener noreferrer"
          className="flex w-full justify-between px-6 py-5 hover:bg-blue-0 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src={gsxicon} alt="GSX Logo" />
            <div>GSX</div>
          </div>
          <ExternalLink />
        </a>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <Link
          to="/resources"
          className="flex w-full justify-between p-6 hover:bg-blue-0 dark:hover:bg-neutral-8 rounded-b-xl transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <ResourcesLogo />
            <div>Resources</div>
          </div>
          <ChevronRight />
        </Link>
      </div>
    </>
  );
};
export default HomeQuickLinks;
