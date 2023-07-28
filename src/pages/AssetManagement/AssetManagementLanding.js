import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import laptop_return from "../../icons/asset-management/laptop_return.svg"
import laptop_check_in from "../../icons/asset-management/laptop_check_out.svg"
import laptop_swap from "../../icons/asset-management/laptop_swap.svg"

const AssetManagementLanding = () => {

  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="headline-small">Laptop Asset Management</div>
        <div className="am-landing-container mt-6">
            <Link className="am-landing-container-button" to="/asset-management/return">
              <img src={laptop_return} alt='Laptop Return Icon'/>
              <div>Return</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management/checkout">
              <img src={laptop_check_in} alt='Laptop Check In Icon'/>
              <div>Check Out</div>
            </Link>
            <Link className="am-landing-container-button" to="/asset-management/swap">
              <img src={laptop_swap} alt='Laptop Swap Icon'/>
              <div>Swap</div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default AssetManagementLanding;