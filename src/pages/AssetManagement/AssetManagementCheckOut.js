import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import dashboard_settings from "../../config.json"
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg";
import UniqnameFormField from "../../components/AssetManagement/UniqnameFormField";
import AssetNumberFormField from "../../components/AssetManagement/AssetNumberFormField";
import CommentFormField from "../../components/AssetManagement/CommentFormField";
import SubmitOrCancelForm from "../../components/AssetManagement/SubmitOrCancelForm";
import CheckoutSubmitSuccess from "../../components/AssetManagement/Checkout/CheckoutSubmitSuccess";
import HighErrorAlert from "../../components/AssetManagement/HighErrorAlert";
import UncaughtErrorAlert from "../../components/AssetManagement/UncaughtErrorAlert";
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitButtonValue, setSubmitButtonValue] = useState("Submit");
  const [tdxResponse, setTdxResponse] = useState(null);
  const [uniqnameError, setUniqnameError] = useState(null);
  const [uniqnameErrorMessage, setUniqnameErrorMessage] = useState(null);
  const [assetError, setAssetError] = useState(null);
  const [assetErrorMessage, setAssetErrorMessage] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [uncaughtError, setUncaughtError] = useState(false); // If  TDX  returns an error message the that the api/dashboard isn't looking for, have users resolve the issue in TDX
  const tdxBaseUrl = `https://${dashboard_settings.TDX.TDX_DOMAIN}/${dashboard_settings.TDX.USE_SANDBOX ? 'SB' : ''}TDNext/apps` // if sandbox is used, then SB will be added before TDNext
 //Api Data End

  const uniqnameInputRef = useRef(null);
  const assetInputRef = useRef(null);

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
    setUniqnameError(null);
    setUniqnameErrorMessage(null);
    setAssetError(null);
    setAssetErrorMessage(null);
    setSubmitButtonValue(
      <>
        <div className="am-action-submit-button-spinner">
          <div>Loading</div>
          <svg aria-hidden="true" class="w-5 h-5 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#0477cc"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#ffffff"/>
          </svg>
          {/* <img src={spinner} alt="Loading Spinner" /> */}
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
        const data = await res.json();
        setIsSubmitted(true);
        setTdxResponse(data);
        setUniqnameError(null);
        setAssetError(null);
      }
      if (!res.ok) {
        increaseErrorCount();
        console.log(errorCount);
        const data = await res.json();
        switch (data.error_number) {
          case 1: // Uniqname does not exist in TDX
            setUniqnameError(true);
            setUniqnameErrorMessage(
              `Uniqname ${data.attributes.uniqname} does not exist in TDX${
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
      increaseErrorCount();
      console.log(errorCount);
      setSubmitButtonValue("Server Offline");
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

  return (
    <>
      <Helmet>
        <title>Laptop Checkout</title>
      </Helmet>
      <div className="am-action-main">
        {errorCount > 1 && <HighErrorAlert resetErrorCount={resetErrorCount} />}
        <div className="am-action-container">
          {isSubmitted ? ( // Check if form is submitted
            <CheckoutSubmitSuccess
              tdxResponse={tdxResponse}
              tdxBaseUrl={tdxBaseUrl}
            />
          ) : (
            <div className="am-action-form">
              <div className="am-action-form-header">
                <div>Laptop Checkout</div>
                <img src={laptop_check_out} alt="Laptop Check Out Icon" />
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
                />
                <CommentFormField setComment={setComment} comment={comment} />
              </div>
              <SubmitOrCancelForm
                submitButtonValue={submitButtonValue}
                isSubmitDisabled={isSubmitDisabled}
                handleSubmit={handleSubmit}
              />
              {uncaughtError && <UncaughtErrorAlert />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetManagementCheckOut;
