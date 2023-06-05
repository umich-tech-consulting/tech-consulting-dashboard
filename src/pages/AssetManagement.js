import { useState } from "react";
import { Helmet } from "react-helmet";
import CheckInTab from "../components/asset-management-components/CheckInTab";
import CheckOutTab from "../components/asset-management-components/CheckOutTab";
import SwapTab from "../components/asset-management-components/SwapTab";

const AssetManagement = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <Helmet>
          <title>Announcements</title>
      </Helmet>
      <div className="rounded-md max-w-lg w-full h-full shadow-light dark:shadow-dark bg-white dark:bg-black">
        <div className="flex mb-3">
          <button
            className={`py-3 flex-1 label-large rounded-tl-md bg-white dark:bg-black ${
              activeTab === 1
                ? "border-b border-white text-neutral-9 dark:text-neutral-1 dark:border-black"
                : "border-b border-neutral-3  text-neutral-8 dark:border-neutral-9 dark:text-neutral-3"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Check In
          </button>
          <button
            className={`py-4 flex-1 label-large bg-white dark:bg-black ${
              activeTab === 2
                ? "border border-t-0 border-b-white border-l-neutral-3 border-r-neutral-3 text-neutral-9 dark:text-neutral-1 dark:border-b-black dark:border-l-neutral-9 dark:border-r-neutral-9"
                : "border-l border-r border-b border-neutral-3 text-neutral-8 dark:border-neutral-9 dark:text-neutral-3"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Check Out
          </button>
          <button
            className={`py-3 flex-1 label-large rounded-tr-md bg-white dark:bg-black ${
              activeTab === 3
                ? "border-b border-white text-neutral-9 dark:text-neutral-1 dark:border-black"
                : "border-b border-neutral-3 text-neutral-8 dark:border-neutral-9 dark:text-neutral-3"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Swap
          </button>
        </div>
        <div>
          {activeTab === 1 && (
            <CheckInTab />
            )}
          {activeTab === 2 && (
            <CheckOutTab />
            )}
          {activeTab === 3 && (
            <SwapTab />
            )}
        </div>
      </div>
    </>
  );
};

export default AssetManagement;
