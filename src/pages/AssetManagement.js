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
          <title>Asset Management</title>
      </Helmet>
      <div className="p-10 ">
        <div className="rounded-md max-w-lg w-full h-full shadow-light bg-white">
          <div className="flex mb-3">
            <button
              className={`py-3 flex-1 label-large rounded-tl-md bg-white ${
                activeTab === 1
                  ? "border-b border-white text-neutral-9"
                  : "border-b border-neutral-3  text-neutral-8"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Check In
            </button>
            <button
              className={`py-4 flex-1 label-large bg-white ${
                activeTab === 2
                  ? "border border-t-0 border-b-white border-l-neutral-3 border-r-neutral-3 text-neutral-9"
                  : "border-l border-r border-b border-neutral-3 text-neutral-8"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Check Out
            </button>
            <button
              className={`py-3 flex-1 label-large rounded-tr-md bg-white ${
                activeTab === 3
                  ? "border-b border-white text-neutral-9"
                  : "border-b border-neutral-3 text-neutral-8"
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
      </div>
    </>
  );
};

export default AssetManagement;
