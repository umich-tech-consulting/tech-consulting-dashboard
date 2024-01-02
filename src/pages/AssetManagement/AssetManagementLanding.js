import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  LaptopReturn,
  LaptopCheckOut,
  ProgramOverview
} from "../../icons/asset-management/AssetManagementLandingSvgs";

const AssetManagementLanding = () => {

  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in">
        <div className="headline-small text-neutral-9 dark:text-neutral-1">Laptop Asset Management</div>
        <div className="am-landing-container mt-6">
          {/* <Link className="am-landing-container-button" to="/asset-management/return">
            <LaptopReturn />
            <div>Return</div>
          </Link>
          <Link className="am-landing-container-button" to="/asset-management/checkout">
            <LaptopCheckOut />
            <div>Checkout</div>
          </Link>
          <Link className="am-landing-container-button" to="/asset-management/program-overview">
            <ProgramOverview />
            <div>Program Overview</div>
          </Link> */}
          <Link className="am-landing-container-button" to="/asset-management/return">
            <LaptopReturn />
            <div>Return</div>
          </Link>
          <Link className="am-landing-container-button" to="/asset-management/checkout">
            <LaptopCheckOut />
            <div>Checkout</div>
          </Link>
          <div className="relative">
            <div className="absolute left-0 top-0 bg-neutral-3 h-full w-full bg-opacity-60 rounded-md">
              <div className="title-medium flex w-full h-full items-center justify-center">
                  <div className="rotate-12 bg-black text-yellow-4">WIP</div>
              </div>
            </div>
            <Link className="am-landing-container-button" to="/asset-management/program-overview">
              <ProgramOverview />
              <div>Program Overview</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetManagementLanding;
