import React, { useState } from "react";
import CheckInTab from "./management_util/CheckInTab";
import CheckOutTab from "./management_util/CheckOutTab";
import SwapTab from "./management_util/SwapTab";

const LaptopManagement = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  return (
    <div className="rounded-md max-w-md w-full h-full shadow-light dark:shadow-dark bg-white dark:bg-black">
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
  );
};

export default LaptopManagement;
