import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import laptop_swap from "../../icons/asset-management/laptop_swap.svg"

const AssetManagementSwap = () => {
  const [dropdownValue, setDropdownValue] = useState("SAH"); // Default dropdown value is "SAH"
  const [oldAssetId, setOldAssetId] = useState("");
  const [newAssetId, setNewAssetId] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleOldAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setOldAssetId(truncatedInput);
  };

  const handleNewAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setNewAssetId(truncatedInput);
  };

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value); // Update the dropdown value
  };

  const isSubmitDisabled = newAssetId.length < 5 || oldAssetId.length < 5;


  return (
    <>
      <Helmet>
        <title>Laptop Swap</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="am-action-container">
          <div className="am-action-component">
            <div className="flex justify-between items-center">
              <div className="am-action-component-title">Laptop Swap</div>
              <img className="h-5 w-fit" src={laptop_swap} alt='Laptop Return Icon' />
            </div>
            <div className="am-action-component-main">
              <div className="flex flex-wrap justify-between gap-y-4">
                <div className="am-action-component-item">
                  <label for="oldasset">
                    Old Asset #<span className="text-blue-9">*</span>
                  </label>
                  <div className="am-laptop-item">
                    <select
                      value={dropdownValue}
                      onChange={handleDropdownChange}
                    >
                      <option value="SAH">SAH</option>
                      <option value="TRL">TRL</option>
                    </select>
                    <input
                      type="text"
                      id="oldasset"
                      name="oldasset"
                      placeholder="00000"
                      pattern="\d*"
                      value={oldAssetId}
                      onChange={handleOldAssetIdChange}
                    />
                  </div>
                </div>
                <div className="am-action-component-item">
                  <label for="newasset">
                    New Asset #<span className="text-blue-9">*</span>
                  </label>
                  <div className="am-laptop-item">
                    <select
                      value={dropdownValue}
                      onChange={handleDropdownChange}
                    >
                      <option value="SAH">SAH</option>
                      <option value="TRL">TRL</option>
                    </select>
                    <input
                      type="text"
                      id="newasset"
                      name="newasset"
                      placeholder="00000"
                      pattern="\d*"
                      value={newAssetId}
                      onChange={handleNewAssetIdChange}
                    />
                  </div>
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
                  placeholder="Optional"
                  value={noteContent}
                  onChange={handleNoteChange}
                />
              </div>
            </div>
            <div className="am-submit-cancel-container">
              <Link to="/asset-management" className="text-blue-9 flex items-center">Cancel</Link>
              <button
                className={`am-submit-button ${
                  isSubmitDisabled
                    ? "bg-neutral-3 text-neutral-5 cursor-not-allowed"
                    : "bg-blue-9 text-white"
                }`}
                disabled={isSubmitDisabled}
              >
                Check and Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetManagementSwap;
