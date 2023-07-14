import { Helmet } from "react-helmet";
import { useState } from "react"; // Import useState
import CustomerCheckOut from "../components/asset-management-components/CustomerCheckOut";
import AssetDefault from "../components/asset-management-components/AssetDefault";
import CustomerReturn from "../components/asset-management-components/CustomerReturn";
import CustomerSwap from "../components/asset-management-components/CustomerSwap";

const Management = () => {
  const [isCheckOutClicked, setIsCheckOutClicked] = useState(false); // State variable for tracking button click
  const [isReturnClicked, setIsReturnClicked] = useState(false); // State variable for tracking button click
  const [isSwapClicked, setIsSwapClicked] = useState(false); // State variable for tracking button click

  return (
    <>
      <Helmet>
        <title>Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="headline-large">Asset Management</div>
        {isReturnClicked ? <CustomerReturn setIsReturnClicked={setIsReturnClicked} /> : null }
        {isCheckOutClicked ? <CustomerCheckOut setIsCheckOutClicked={setIsCheckOutClicked} /> : null }
        {isSwapClicked ? <CustomerSwap setIsSwapClicked={setIsSwapClicked} /> : null }
        {isCheckOutClicked || isReturnClicked || isSwapClicked ? null : <AssetDefault setIsCheckOutClicked={setIsCheckOutClicked} setIsReturnClicked={setIsReturnClicked} setIsSwapClicked={setIsSwapClicked} /> }
      </div>
    </>
  );
};

export default Management;
