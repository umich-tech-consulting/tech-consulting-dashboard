import { Link } from "react-router-dom";
import {
  ChevronRight,
  ResourcesLogo,
  AssetManagementLogo,
  AnnouncementsLogo
} from "../../icons/home/HomeSvgs";

const HomeQuickLinks = () => {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-light dark:shadow-dark flex flex-col title-medium text-neutral-8">
        <div className="title-large text-neutral-9 p-6">Pages</div>
        <hr className="border-[1.4px] border-base-light"></hr>
        <Link
          to="/announcements"
          className="flex w-full justify-between p-6 hover:bg-blue-0"
        >
          <div className="flex items-center gap-4">
            <AnnouncementsLogo />
            <div>Announcements</div>
          </div>
          <ChevronRight />
        </Link>
        <hr className="border-[1.4px] border-base-light"></hr>
        <Link
          to="/asset-management"
          className="flex w-full justify-between p-6 hover:bg-blue-0"
        >
          <div className="flex items-center gap-4">
            <AssetManagementLogo />
            <div>Asset Management</div>
          </div>
          <ChevronRight />
        </Link>
        <Link
          to="/resources"
          className="flex w-full justify-between p-6 hover:bg-blue-0 rounded-b-xl"
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
