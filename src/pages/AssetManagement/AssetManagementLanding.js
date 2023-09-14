import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LaptopReturn, LaptopCheckOut } from "../../components/AssetManagement/AssetManagementLandingSvgs";
// import laptop_swap from "../../icons/asset-management/laptop_swap.svg"
// import laptop_lookup from "../../icons/asset-management/laptop_lookup.svg"
// import laptop_warranty from "../../icons/asset-management/laptop_warranty.svg"
// import laptop_quickscan_check_out from "../../icons/asset-management/laptop_quickscan_check_out.svg"
// import laptop_quickscan_return from "../../icons/asset-management/laptop_quickscan_return.svg"

const AssetManagementLanding = () => {

  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in">
        <div className="headline-small dark:text-neutral-1">Laptop Asset Management</div>
        <div className="am-landing-container mt-6">
            <Link className="am-landing-container-button" to="/asset-management/return">
              <LaptopReturn />
              <div>Return</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management/checkout">
              <LaptopCheckOut />
              <div>Checkout</div>
            </Link>
            {/* <Link className="am-landing-container-button" to="/asset-management/swap">
              <img src={laptop_swap} alt='Laptop Swap Icon'/>
              <div>Swap</div>
            </Link> */}
            {/* <Link className="am-landing-container-button" to="/asset-management">
              <img src={laptop_lookup} alt='Laptop Lookup'/>
              <div>Lookup</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management">
              <img src={laptop_warranty} alt='Laptop Warranty Check'/>
              <div>Warranty</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management">
              <img src={laptop_quickscan_check_out} alt='Laptop Quickscan Check Out'/>
              <div>Quickscan Check Out</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management">
              <img src={laptop_quickscan_return} alt='Laptop Quickscan Return'/>
              <div>Quickscan Return</div>
            </Link> */}
        </div>
      </div>
    </>
  );
};

export default AssetManagementLanding;
