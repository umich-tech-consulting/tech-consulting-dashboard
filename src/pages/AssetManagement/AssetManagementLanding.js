import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LaptopReturn, LaptopCheckOut } from "../../icons/asset-management/AssetManagementLandingSvgs";

const AssetManagementLanding = () => {

  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in">
        <div className="headline-small text-neutral-9 dark:text-neutral-1">Laptop Asset Management</div>
        <div className="am-landing-container mt-6">
            <Link className="am-landing-container-button" to="/asset-management/return">
              <LaptopReturn />
              <div>Return</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management/checkout">
              <LaptopCheckOut />
              <div>Checkout</div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default AssetManagementLanding;
