import { Helmet } from "react-helmet";
// import { WindowsLogo, AppleLogo } from "../../icons/asset-management/ProgramOverviewSvgs";
import Inventory from "../../components/AssetManagement/ProgramOverview/Inventory.js"
import PendingWork from "../../components/AssetManagement/ProgramOverview/PendingWork.js"
import AssetBreakdown from "../../components/AssetManagement/ProgramOverview/AssetBreakdown.js";
// import HomeAnnouncement from "../components/Home/HomeAnnouncement";
// import HomeQuickLinks from "../components/Home/HomeQuickLinks";
// import HomeFastActions from "../components/Home/HomeFastActions";
// import HomePages from "../components/Home/HomePages";

const ProgramOverview = () => {
  return (
    <>
      <Helmet>
        <title>Program Overview</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 fade-in text-neutral-9">
        <div className="headline-small dark:text-neutral-1">Sites at Home Program Overview</div>
        <Inventory />
        <PendingWork />
        <AssetBreakdown />
        {/* <div className="w-full bg-white p-6 rounded-lg mt-5 flex items-center shadow-light">
            <div className="flex flex-col gap-3 grow">
                <div className="headline-medium text-neutral-8">Total Devices</div>
                <div className="display-large">1000</div>
            </div>
            <div className="headline-large flex flex-col gap-6 items-end">
                <div className="flex gap-3 items-center">
                    <WindowsLogo />
                    <div>800</div>
                </div>
                <div className="flex gap-3 items-center">
                    <AppleLogo />
                    <div>400</div>
                </div>
            </div>
        </div>
        <div className="w-full flex gap-8 mt-8">
          <div className="flex-1 bg-white p-6 rounded-lg flex items-center shadow-light">
              <div className="flex flex-col gap-3 grow">
                  <div className="headline-medium text-neutral-8">Available</div>
                  <div className="display-large">400</div>
              </div>
              <div className="headline-large flex flex-col gap-6 items-end">
                  <div className="flex gap-3 items-center">
                      <WindowsLogo />
                      <div>300</div>
                  </div>
                  <div className="flex gap-3 items-center">
                      <AppleLogo />
                      <div>100</div>
                  </div>
              </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg flex items-center shadow-light">
              <div className="flex flex-col gap-3 grow">
                  <div className="headline-medium text-neutral-8">On Loan</div>
                  <div className="display-large">600</div>
              </div>
              <div className="headline-large flex flex-col gap-6 items-end">
                  <div className="flex gap-3 items-center">
                      <WindowsLogo />
                      <div>400</div>
                  </div>
                  <div className="flex gap-3 items-center">
                      <AppleLogo />
                      <div>200</div>
                  </div>
              </div>
          </div>
        </div>
        <div className="w-full flex gap-8 mt-8">
          <div className="flex-1 bg-white p-6 rounded-lg flex items-center shadow-light">
              <div className="flex flex-col gap-3">
                  <div className="headline-medium text-neutral-8">Request Tickets</div>
                  <div className="display-large">12</div>
              </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg flex items-center shadow-light">
              <div className="flex flex-col gap-3">
                  <div className="headline-medium text-neutral-8">Customers Approved for Pickup</div>
                  <div className="display-large">20</div>
              </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProgramOverview;
