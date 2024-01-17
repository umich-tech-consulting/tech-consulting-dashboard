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
          <svg className="h-[14px] w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" role="img" aria-labelledby="asset_icon">
            <title id="asset_icon">Asset Icon</title>
            <path className="stroke-neutral-9 dark:stroke-neutral-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".88" d="M2.3335 3.49968c0-.64434.52233-1.16667 1.16666-1.16667h7.00004c.6443 0 1.1666.52233 1.1666 1.16666v4.66667H2.3335V3.49968ZM11.6668 8.16699H2.3335l-.9058 1.81159c-.38785.77572.17622 1.68842 1.0435 1.68842h9.0579c.8673 0 1.4314-.9127 1.0435-1.68843l-.9058-1.81158Z"/>
          </svg>
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
              <svg className="stroke-red-11 dark:stroke-red-6*" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="error_alert_icon">
                <title id="error_alert_icon">Error Alert Icon</title>
                <path d="M9 6.74951V9.56201M15.75 8.99951C15.75 9.88594 15.5754 10.7637 15.2363 11.5826C14.897 12.4016 14.3998 13.1457 13.773 13.7725C13.1462 14.3993 12.4021 14.8965 11.5831 15.2358C10.7642 15.5749 9.88643 15.7495 9 15.7495C8.11357 15.7495 7.23583 15.5749 6.41688 15.2358C5.59794 14.8965 4.85382 14.3993 4.22703 13.7725C3.60024 13.1457 3.10304 12.4016 2.76381 11.5826C2.4246 10.7637 2.25 9.88594 2.25 8.99951C2.25 7.20931 2.96117 5.49241 4.22703 4.22654C5.4929 2.96068 7.20979 2.24951 9 2.24951C10.7902 2.24951 12.5071 2.96068 13.773 4.22654C15.0389 5.49241 15.75 7.20931 15.75 8.99951ZM9 11.812H9.006V11.818H9V11.812Z" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>{assetErrorMessage}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetNumberFormField;
