import { useEffect } from "react";

const AssetNumberFormField = ({ setAssetId, assetId, setDropdownValue, dropdownValue, assetError }) => {

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    let maxLength = 5;

    if (dropdownValue === "SAHM") {
      maxLength = 4;
    }

    const truncatedInput = numberInput.slice(0, maxLength);
    setAssetId(truncatedInput);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  useEffect(() => {
    if (dropdownValue === "SAHM" && assetId.length === 5) {
      setAssetId("");
    }
  }, [dropdownValue, assetId, setAssetId]);

  return (
    <>
      <div className="am-action-component-item">
        <label htmlFor="asset">Asset Number</label>
        <div className="am-laptop-item">
          <select className="am-action-form-default" value={dropdownValue} onChange={handleDropdownChange}>
            <option value="TRL">TRL</option>
            <option value="SAH">SAH</option>
            <option value="SAHM">SAHM</option>
          </select>
          <input className="am-action-form-default"
            type="text"
            id="asset"
            name="asset"
            pattern="\d*"
            value={assetId}
            onChange={handleAssetIDChange}
          />
        </div>
        <div className="h-5 mt-1 body-small">{assetError ? null : "Error with asset"}</div>
      </div>
    </>
  );
};

export default AssetNumberFormField;
