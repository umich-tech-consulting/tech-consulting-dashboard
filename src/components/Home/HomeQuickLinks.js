import { Link } from "react-router-dom"
import { ExternalLink, ChevronRight, ResourcesLogo } from "../../icons/home/HomeSvgs"
import umichicon from "../../icons/nav/umichicon.png"
import slack_logo from "../../icons/nav/slack_logo.png"
import tdxlogo from "../../icons/nav/tdxlogo.png"
import gsxicon from "../../icons/nav/gsxicon.png"


const HomeQuickLinks = () => {

     return (
       <>
        <div className="w-full bg-white rounded-xl shadow-light dark:shadow-dark flex flex-col title-medium text-neutral-8">
            <div className="title-large text-neutral-9 p-6">Quick Links</div>
            <hr className="border-[1.4px] border-base-light"></hr>
            <a className="flex w-full justify-between px-6 py-5 hover:bg-blue-0">
                 <div className="flex items-center gap-4">
                    <img className="w-6 h-6" src={umichicon} alt="Umich Logo" />
                    <div>Wolverine Access</div>
                </div>
                <ExternalLink />
            </a>
            <hr className="border-[1.4px] border-base-light"></hr>
            <a className="flex w-full justify-between px-6 py-5 hover:bg-blue-0">
                <div className="flex items-center gap-4">
                    <img className="w-6 h-6" src={slack_logo} alt="Slack Logo" />
                    <div>Slack</div>
                </div>
                <ExternalLink />
            </a>
            <hr className="border-[1.4px] border-base-light"></hr>
            <a className="flex w-full justify-between px-6 py-5 hover:bg-blue-0">
                <div className="flex items-center gap-4">
                    <img className="w-6 h-6" src={tdxlogo} alt="TDX Logo" />
                    <div>TDX</div>
                </div>
                <ExternalLink />
            </a>
            <hr className="border-[1.4px] border-base-light"></hr>
            <a className="flex w-full justify-between px-6 py-5 hover:bg-blue-0">
                <div className="flex items-center gap-4">
                    <img className="w-6 h-6" src={gsxicon} alt="GSX Logo" />
                    <div>GSX</div>
                </div>
                <ExternalLink />
            </a>
            <hr className="border-[1.4px] border-base-light"></hr>
            <Link to="/resources" className="flex w-full justify-between p-6 hover:bg-blue-0 rounded-b-xl">
                <div className="flex items-center gap-4">
                    <ResourcesLogo />
                    <div>Resources</div>
                </div>
                <ChevronRight />
            </Link>
        </div>
       </>
     )
 }
 export default HomeQuickLinks