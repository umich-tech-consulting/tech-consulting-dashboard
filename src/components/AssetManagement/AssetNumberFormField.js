import error_alert from "../../icons/asset-management/error_alert.svg";
import { Asseticon } from "./AssetNumberFormFieldSvgs";
import { useEffect } from "react";

const AssetNumberFormField = ({
  setAssetId,
  assetId,
  setAssetType,
  assetType,
  assetError,
  setAssetError,
  assetErrorMessage,
  isSubmitDisabled,
  handleSubmit,
  inputRef,
  isLoading
}) => {
  const handleAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    let maxLength = 5;

    if (assetType === "SAHM") {
      maxLength = 4;
    }

    const truncatedInput = numberInput.slice(0, maxLength);
    setAssetId(truncatedInput);
  };

  const handleAssetTypeChange = (e) => {
    setAssetType(e.target.value);
  };

  const enterToSubmit = (e) => {
    if (e.key === "Enter" && !isSubmitDisabled && !isLoading) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (assetType === "SAHM" && assetId.length === 5) {
      setAssetId("");
    }
  }, [assetType, assetId, setAssetId]);

  return (
    <>
      <div className="am-action-component-item">
        <div className="am-action-component-item-header">
          <Asseticon />
          <label htmlFor="asset">Asset Number</label>
        </div>
        <div className="am-laptop-item">
          <select
            ref={inputRef}
            className={`am-uniqname-item ${
              !assetError ? "am-action-form-default" : "am-action-form-error"
            }`}
            value={assetType}
            aria-label="Asset Type"
            onChange={(e) => {
              handleAssetTypeChange(e);
              setAssetError(null);
            }}

          >
            <option value="SAH">SAH</option>
            <option value="SAHM">SAHM</option>
          </select>
          <input
            className={`am-uniqname-item ${
              !assetError ? "am-action-form-default" : "am-action-form-error"
            }`}
            type="text"
            id="asset"
            name="asset"
            pattern="\d*"
            value={assetId}
            onKeyDown={enterToSubmit}
            onChange={(e) => {
              handleAssetIdChange(e);
              setAssetError(null);
            }}
          />
        </div>
        <div className="am-action-form-error-message">
          {!assetErrorMessage ? null : (
            <>
              <img src={error_alert} alt="Error Alert" />
              <div>{assetErrorMessage}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetNumberFormField;
