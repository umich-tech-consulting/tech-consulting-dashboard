import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import dashboard_settings from "../../config.json"
import UniqnameFormField from "../../components/AssetManagement/UniqnameFormField";
import AssetNumberFormField from "../../components/AssetManagement/AssetNumberFormField";
import CommentFormField from "../../components/AssetManagement/CommentFormField";
import SubmitOrCancelForm from "../../components/AssetManagement/SubmitOrCancelForm";
import HighErrorAlert from "../../components/AssetManagement/HighErrorAlert";
import UncaughtErrorAlert from "../../components/AssetManagement/UncaughtErrorAlert";
import { useNavigate } from "react-router";
// import spinner from "../../icons/asset-management/spinner.svg";

const AssetManagementCheckOut = () => {
  // Form data Start
  const [uniqname, setUniqname] = useState("");
  const [assetType, setAssetType] = useState("SAH");
  const [assetId, setAssetId] = useState("");
  const [comment, setComment] = useState("");
  const asset = `${assetType}${assetId}`;
  // Form Data End

  // Api Data Start
  const [submitButtonValue, setSubmitButtonValue] = useState("Submit");
  const [uniqnameError, setUniqnameError] = useState(null);
  const [uniqnameErrorMessage, setUniqnameErrorMessage] = useState(null);
  const [assetError, setAssetError] = useState(null);
  const [assetErrorMessage, setAssetErrorMessage] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [uncaughtError, setUncaughtError] = useState(false); // If  TDX  returns an error message the that the api/dashboard isn't looking for, have users resolve the issue in TDX

  const uniqnameInputRef = useRef(null);
  const assetInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (uniqnameInputRef.current) {
      uniqnameInputRef.current.focus();
    }
  }, []);

  const increaseErrorCount = () => {
    setErrorCount(errorCount + 1);
  };
  const resetErrorCount = () => {
    setErrorCount(0);
  };
  const uncaughtErrorTrue = () => {
    setUncaughtError(true);
  };
  const uncaughtErrorFalse = () => {
    setUncaughtError(false);
  };

  const tdxCheckoutLoan = async () => {
    setIsLoading(true);
    setUniqnameError(null);
    setUniqnameErrorMessage(null);
    setAssetError(null);
    setAssetErrorMessage(null);
    setSubmitButtonValue(
      <>
        <div className="am-action-submit-button-spinner">
          <div className="dot-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </>
    );

    try {
      const res = await fetch(`${dashboard_settings.API_URL}/tdx/loan/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uniqname: uniqname,
          asset: asset,
          comment: comment,
        }),
      });
      if (res.ok) {
        setIsLoading(false);
        const data = await res.json();
        localStorage.setItem('tdxResponse', JSON.stringify(data));
        navigate('/asset-management/checkout/success');
        setUniqnameError(null);
        setAssetError(null);
      }
      if (!res.ok) {
        setIsLoading(false);
        increaseErrorCount();
        console.log(errorCount);
        const data = await res.json();
        switch (data.error_number) {
          case 1: // Uniqname does not exist in TDX
            setUniqnameError(true);
            setUniqnameErrorMessage(
              `Uniqname ${data.attributes.uniqname} not found in TDX${
                data.details ? `: ${data.details}` : ""
              }`
            );
            break;
          case 2: // Asset does not exist in TDX
            setAssetError(true);
            setAssetErrorMessage(
              `Asset does not exist in TDX${
                data.details ? `: ${data.details}` : ""
              }`
            );

            break;
          case 3: // Either Uniqname or Asset matched multiple objects
            if (data.attributes.type === "person") {
              setUniqnameError(true);
              setUniqnameErrorMessage(
                `Multiple people found for uniqname ${
                  data.attributes.uniqname
                }. Contact manager for assistance${
                  data.details ? `: ${data.details}` : ""
                }`
              );
            }
            if (data.attributes.type === "asset") {
              setAssetError(true);
              setAssetErrorMessage(
                `Multiple assets found. Contact manager for assistance${
                  data.details ? `: ${data.details}` : ""
                }`
              );
            }
            break;
          case 4: // Invalid Uniqname
            setUniqnameError(true);
            setUniqnameErrorMessage(
              `Invalid uniqname format${
                data.details ? `: ${data.details}` : ""
              }`
            );
            break;
          case 5: // Invalid Asset
            setAssetError(true);
            setAssetErrorMessage(
              `Invalid asset format${data.details ? `: ${data.details}` : ""}`
            );
            break;
          case 6: // No valid loan ticket
            setUniqnameError(true);
            setUniqnameErrorMessage(
              `Customer ${data.attributes.uniqname} not eligible for a loan${
                data.details ? `: ${data.details}` : ""
              }`
            );
            break;
          case 7: // Asset is not ready for loan
            setAssetError(true);
            setAssetErrorMessage(
              `Asset is not ready to loan${
                data.details ? `: ${data.details}` : ""
              }`
            );
            break;
          case 10: // Unable to attach asset
              setAssetError(true);
              setAssetErrorMessage(
                `Asset could not be attached to ticket${
                  data.details ? `: ${data.details}` : ""
                }`
              )
              break;
          case 11: // Loan already fulfilled
              setUniqnameError(true);
              setUniqnameErrorMessage(
                `The customer already has a laptop loaned to them (${data.attributes.asset}) in TDX${data.attributes.ticket}${
                  data.details ? `: ${data.details}` : ""
                }`
              )
              break;
          default:
            uncaughtErrorTrue();
            // There is an error that wasn't caught
          // "Error Not recognized"
        }
        setSubmitButtonValue("Retry");
      }
    } catch (error) {
      setIsLoading(false);
      increaseErrorCount();
      console.log(errorCount);
      setSubmitButtonValue("Offline");
      uncaughtErrorTrue();
    }
  };

  const isSubmitDisabled =
  uniqname.length < 3 ||
  (assetType !== "SAHM" && assetId.length < 5) ||
  (assetType === "SAHM" && assetId.length < 4);

  const handleSubmit = () => {
    tdxCheckoutLoan();
    uncaughtErrorFalse();
  };

  useEffect(() => { // Set the height of the "determine" information on the right side of the page equal to that of the height of the form
    if (assetInputRef.current) {
      assetInputRef.current.focus();
    }

    // Calculate the height of am-action-form and set it to am-action-determine
    const amActionForm = document.querySelector(".am-action-form");
    const amActionDetermine = document.querySelector(".am-action-determine");

    if (amActionForm && amActionDetermine) {
      const formHeight = amActionForm.offsetHeight;
      amActionDetermine.style.height = `${formHeight}px`;
    }
  }, [uncaughtError]);

  return (
    <>
      <Helmet>
        <title>Laptop Checkout</title>
      </Helmet>
      <div className="am-action-main">
        {errorCount > 1 && <HighErrorAlert resetErrorCount={resetErrorCount} />}
        <div className="am-action-container">
          <div className="am-action-form-determine ">
            <div className="am-action-form">
              <div className="am-action-form-header-description">
                <div className="am-action-form-header">
                  <div>Laptop Checkout</div>
                  <svg className="h-5 w-fit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" role="img" aria-labelledby="laptop_checkout">
                    <title id="laptop_checkout">Laptop Checkout</title>
                    <circle cx="20" cy="20" r="20" className="fill-white dark:fill-black"/>
                    <path className="fill-[#0488E1] dark:fill-yellow-6" fillRule="evenodd" d="M20 40c11.0462 0 20-8.9538 20-20C40 8.95384 31.0462-.00000305 20-.00000401 8.95385-.00000498 4.5e-7 8.95384-5.2e-7 20-.00000148 31.0462 8.95384 40 20 40Zm1.0872-28.7795c-.2885-.2881-.6795-.4499-1.0872-.4499-.4077 0-.7987.1618-1.0872.4499l-6.1538 6.1539c-.1512.1408-.2724.3106-.3565.4994-.0841.1887-.1293.3924-.1329.599-.0037.2065.0343.4117.1117.6033.0774.1916.1925.3656.3386.5117.1461.1461.3201.2612.5117.3386.1916.0774.3967.1154.6033.1117.2066-.0036.4103-.0488.599-.1329.1887-.0841.3586-.2053.4994-.3565l3.5282-3.5282v11.6718c0 .408.1621.7993.4506 1.0879.2886.2885.6799.4506 1.0879.4506.408 0 .7993-.1621 1.0879-.4506.2885-.2886.4506-.6799.4506-1.0879V16.0205l3.5282 3.5282c.2916.2718.6773.4197 1.0759.4127.3986-.007.7789-.1685 1.0607-.4504.2819-.2819.4434-.6621.4504-1.0607.007-.3986-.1409-.7843-.4127-1.0759l-6.1538-6.1539Z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="am-action-form-description">Loan a Sites at Home Windows or Mac device to a customer after approval</div>
              </div>
              <div className="am-action-component-main">
                <UniqnameFormField
                  setUniqname={setUniqname}
                  uniqname={uniqname}
                  uniqnameError={uniqnameError}
                  setUniqnameError={setUniqnameError}
                  uniqnameErrorMessage={uniqnameErrorMessage}
                  isSubmitDisabled={isSubmitDisabled}
                  handleSubmit={handleSubmit}
                  inputRef={uniqnameInputRef}
                  isLoading={isLoading}
                />
                <AssetNumberFormField
                  setAssetId={setAssetId}
                  assetId={assetId}
                  setAssetType={setAssetType}
                  assetType={assetType}
                  assetError={assetError}
                  setAssetError={setAssetError}
                  assetErrorMessage={assetErrorMessage}
                  isSubmitDisabled={isSubmitDisabled}
                  handleSubmit={handleSubmit}
                  inputRef={assetInputRef}
                  isLoading={isLoading}
                />
                <CommentFormField setComment={setComment} comment={comment} />
              </div>
              <SubmitOrCancelForm
                isLoading={isLoading}
                submitButtonValue={submitButtonValue}
                isSubmitDisabled={isSubmitDisabled}
                handleSubmit={handleSubmit}
              />
              {uncaughtError && <UncaughtErrorAlert />}
            </div>
            <div className="am-action-determine">
              <div className="am-action-determine-header">Verify</div>
              <div className="flex flex-col gap-2 px-6">
                <div className="am-action-determine-item">&#8226; Sites at Home</div>
                <div className="am-action-determine-item-details">Is the customer here to pick up a Sites at Home Laptop or a laptop from Tech Shop?</div>
                <div className="am-action-determine-item">&#8226; Windows or Mac</div>
                <div className="am-action-determine-item-details">Mac tag: Red</div>
                <div className="am-action-determine-item-details">Windows tag: Green, Yellow, Blue, Pink</div>
                <div className="am-action-determine-item-details">Tech Repair Loaner tag: White </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetManagementCheckOut;
