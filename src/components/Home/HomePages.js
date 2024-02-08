import { Link } from "react-router-dom";
import {
  ChevronRight,
  ResourcesLogo,
  AssetManagementLogo,
  AnnouncementsLogo,
  WarrantyLogo
} from "../../icons/home/HomeSvgs";

const HomeQuickLinks = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-9 rounded-xl flex flex-col title-medium text-neutral-8 dark:text-neutral-3 border border-neutral-2 dark:border-neutral-8">
        <div className="title-large text-neutral-9 dark:text-neutral-2 p-6">Pages</div>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <Link
          to="/announcements"
          className="flex w-full justify-between p-6 hover:bg-blue-1 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <AnnouncementsLogo />
            <div>Announcements</div>
          </div>
          <ChevronRight />
        </Link>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <Link
          to="/warranty"
          className="flex w-full justify-between p-6 hover:bg-blue-1 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <WarrantyLogo />
            <div>Warranty</div>
          </div>
          <ChevronRight />
        </Link>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <Link
          to="/asset-management"
          className="flex w-full justify-between p-6 hover:bg-blue-1 dark:hover:bg-neutral-8 transition ease-in duration-[450ms]"
        >
          <div className="flex items-center gap-4">
            <AssetManagementLogo />
            <div>Asset Management</div>
          </div>
          <ChevronRight />
        </Link>
        <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
        <Link
          to="/resources"
          className="flex w-full justify-between p-6 hover:bg-blue-1 dark:hover:bg-neutral-8 rounded-b-xl transition ease-in duration-[450ms]"
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
