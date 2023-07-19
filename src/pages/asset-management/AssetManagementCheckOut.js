import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg"

const AssetManagementCheckOut = () => {
  const [assetId, setAssetId] = useState("");
  const [uniqname, setUniqname] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [dropdownValue, setDropdownValue] = useState("SAH"); // Default dropdown value is "SAH"

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleUniqnameChange = (e) => {
    const input = e.target.value;
    const lowercaseInput = input.toLowerCase();
    const alphanumericInput = lowercaseInput.replace(/[^a-z]/g, "");
    const truncatedInput = alphanumericInput.slice(0, 8);
    setUniqname(truncatedInput);
  };

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value); // Update the dropdown value
  };

  const isSubmitDisabled = assetId.length < 5 || uniqname.length < 3;

  return (
    <>
      <Helmet>
        <title>Laptop Check Out</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="am-action-container">
          <div className="am-action-component">
            <div className="flex justify-between items-center">
              <div className="am-action-component-title">Laptop Check Out</div>
              <img className="h-5 w-fit" src={laptop_check_out} alt='Laptop Return Icon' />
            </div>
            <div className="am-action-component-main">
              <div className="flex flex-wrap justify-between gap-y-4">
                <div className="am-action-component-item">
                  <label for="uniqname">
                    Uniqname<span className="text-blue-9">*</span>
                  </label>
                  <input
                    className="am-uniqname-item"
                    type="text"
                    id="uniqname"
                    name="uniqname"
                    placeholder="uniqname"
                    pattern="\d*"
                    spellCheck="false"
                    value={uniqname}
                    onChange={handleUniqnameChange}
                  />
                </div>
                <div className="am-action-component-item">
                  <label for="asset">
                    Asset #<span className="text-blue-9">*</span>
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
                      id="asset"
                      name="asset"
                      placeholder="00000"
                      pattern="\d*"
                      value={assetId}
                      onChange={handleAssetIDChange}
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

export default AssetManagementCheckOut;