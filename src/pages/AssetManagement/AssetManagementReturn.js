import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import laptop_return from "../../icons/asset-management/laptop_return.svg"

const AssetManagementReturn = () => {
  const [assetId, setAssetId] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [dropdownValue, setDropdownValue] = useState("TRL"); // Default dropdown value is "SAH"

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value); // Update the dropdown value
  };

  const isSubmitDisabled = assetId.length < 5;


  return (
    <>
      <Helmet>
        <title>Laptop Return</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="am-action-container">
          <div className="am-action-component">
            <div className="flex justify-between items-center mb-6">
              <div className="am-action-component-title">Laptop Return</div>
              <img className="h-5 w-fit" src={laptop_return} alt='Laptop Return Icon' />
            </div>
            <div className="am-action-component-main">
              <div className="am-action-component-item">
                <label for="asset">
                  Asset Number <span className="text-blue-9">*</span>
                </label>
                <div className="am-laptop-item">
                  <select
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                  >
                    <option value="TRL">TRL</option>
                    <option value="SAH">SAH</option>
                    <option value="SAHM">SAHM</option>
                  </select>
                  <input
                    type="text"
                    id="asset"
                    name="asset"
                    // placeholder="00000"
                    pattern="\d*"
                    value={assetId}
                    onChange={handleAssetIDChange}
                  />
                </div>
              </div>
              <div className="am-comments">
                <label for="comments">
                  Comments
                </label>
                <textarea
                  type="text"
                  id="comments"
                  name="comments"
                  // placeholder="Optional"
                  value={noteContent}
                  onChange={handleNoteChange}
                />
              </div>
            </div>
            <div className="am-submit-cancel-container">
              <Link to="/asset-management" className="text-base-red flex items-center">Cancel</Link>
              <button
                className={`am-submit-button ${
                  isSubmitDisabled
                    ? "bg-neutral-2 text-neutral-4 cursor-not-allowed"
                    : "bg-blue-9 text-white"
                }`}
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetManagementReturn;
