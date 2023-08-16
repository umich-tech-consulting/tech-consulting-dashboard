import { useState } from "react";
import { Helmet } from "react-helmet";
import dashboard_settings from "../../config.json"
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg";
import UniqnameFormField from "../../components/asset_management/UniqnameFormField";
import AssetNumberFormField from "../../components/asset_management/AssetNumberFormField";
import CommentFormField from "../../components/asset_management/CommentFormField";
import CheckoutSubmitOrCancelForm from "../../components/asset_management/Checkout/CheckoutSubmitOrCancelForm";
import CheckoutSubmitSuccess from "../../components/asset_management/Checkout/CheckoutSubmitSuccess";
import HighErrorAlert from "../../components/asset_management/HighErrorAlert";
import spinner from "../../icons/asset-management/spinner.svg";

const AssetManagementCheckOut = () => {
  // Form data Start
  const [uniqname, setUniqname] = useState("");
  const [assetType, setAssetType] = useState("TRL");
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
  const tdxBaseUrl = `https://${dashboard_settings.TDX.TDX_DOMAIN}/${dashboard_settings.TDX.USE_SANDBOX ? 'SB' : ''}TDNext/apps` // if sandbox is used, then SB will be added before TDNext

  const increaseErrorCount = () => {
    setErrorCount(errorCount + 1);
  };
  const resetErrorCount = () => {
    setErrorCount(0);
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
          <img src={spinner} alt="Loading Spinner" />
        </div>
      </>
    );

    try {
      const res = await fetch(`https://${dashboard_settings.DASHBOARD_DOMAIN}/api/tdx/loan/checkout`, {
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
          default: // There is an error that wasn't caught
          // "Error Not recognized"
        }
        setSubmitButtonValue("Retry");
      }
    } catch (error) {
      increaseErrorCount(); //need to figure out how to increase the error count when the response is not ok
      console.log(errorCount);
      setSubmitButtonValue("Server Offline");
    }
  };

  return (
    <>
      <Helmet>
        <title>Laptop Checkout</title>
      </Helmet>
      <div className="am-action-main">
        {errorCount > 2 && <HighErrorAlert resetErrorCount={resetErrorCount} />}
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
                />
                <AssetNumberFormField
                  setAssetId={setAssetId}
                  assetId={assetId}
                  setAssetType={setAssetType}
                  assetType={assetType}
                  assetError={assetError}
                  setAssetError={setAssetError}
                  assetErrorMessage={assetErrorMessage}
                />
                <CommentFormField setComment={setComment} comment={comment} />
              </div>
              <CheckoutSubmitOrCancelForm
                assetType={assetType}
                assetId={assetId}
                uniqname={uniqname}
                submitButtonValue={submitButtonValue}
                tdxCheckoutLoan={tdxCheckoutLoan}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetManagementCheckOut;
