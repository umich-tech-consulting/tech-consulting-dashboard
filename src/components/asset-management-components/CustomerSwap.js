import x_close from "../../icons/asset-management/x_close.svg";
import information from "../../icons/asset-management/information.svg";

import { useState } from "react"; // Import useState

const CustomerSwap = ({ setIsSwapClicked }) => {
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

  const handleSwapClick = () => {
    setIsSwapClicked(false);
  };

  return (
    <>
      <div className="am-action-container">
        <div className="am-action-component">
          <button className="absolute" onClick={handleSwapClick}>
            <img src={x_close} alt="Close Icon" />
          </button>
          <div className="am-action-componenet-title">Laptop Swap</div>
          <div className="am-action-component-main">
            <div className="am-action-component-item">
              <div>
                <label for="oldasset">
                  Old Laptop Asset Number<span className="text-blue-9">*</span>
                </label>
                <img src={information} alt="Information Icon" />
              </div>
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
                  placeholder="00000[old]"
                  pattern="\d*"
                  value={oldAssetId}
                  onChange={handleOldAssetIdChange}
                />
              </div>
            </div>
            <div className="am-action-component-item">
              <div>
                <label for="newasset">
                  New Laptop Asset Number<span className="text-blue-9">*</span>
                </label>
                <img src={information} alt="Information Icon" />
              </div>
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
                  placeholder="00000[new]"
                  pattern="\d*"
                  value={newAssetId}
                  onChange={handleNewAssetIdChange}
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
                placeholder="Optional"
                value={noteContent}
                onChange={handleNoteChange}
              />
            </div>
          </div>
          <button
            className={`am-submit-button ${
              isSubmitDisabled
                ? "bg-neutral-3 text-neutral-7"
                : "bg-blue-9 text-white"
            }`}
            disabled={isSubmitDisabled}
          >
            Check and Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerSwap;
