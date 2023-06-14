import { Helmet } from "react-helmet";
import { useState } from "react"; // Import useState
import CustomerCheckOut from "../components/asset-management-components/CustomerCheckOut";
import AssetDefault from "../components/asset-management-components/AssetDefault";

const Management = () => {
  const [isCheckOutClicked, setIsCheckOutClicked] = useState(false); // State variable for tracking button click

  return (
    <>
      <Helmet>
        <title>Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="mb-6 headline-large">Asset Management</div>
        {isCheckOutClicked ? <CustomerCheckOut setIsCheckOutClicked={setIsCheckOutClicked} /> : null }
        {isCheckOutClicked ? null : <AssetDefault setIsCheckOutClicked={setIsCheckOutClicked} /> }
      </div>
    </>
  );
};

export default Management;
