import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg";
import checkmark from "../../icons/asset-management/checkmark.svg";

const AssetManagementCheckOut = () => {
  const [assetId, setAssetId] = useState("");
  const [uniqname, setUniqname] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [dropdownValue, setDropdownValue] = useState("TRL");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

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
    setDropdownValue(e.target.value);
  };

  useEffect(() => {
    if (dropdownValue === "SAHM" && assetId.length === 5) {
      setAssetId("");
    }
  }, [dropdownValue, assetId]);

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to the server

    // After successful submission, set the isSubmitted state to true
    setIsSubmitted(true);
  };

  const isSubmitDisabled =
    uniqname.length < 3 ||
    (dropdownValue !== "SAHM" && assetId.length < 5) ||
    (dropdownValue === "SAHM" && assetId.length < 4);

  return (
    <>
      <Helmet>
        <title>Laptop Check Out</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6">
        <div className="am-action-container">
          {isSubmitted ? ( // Check if form is submitted
            <div className="submitted-successfully w-full flex flex-col gap-10 max-w-sm bg-white p-6 rounded-lg items-center">
              <img className="h-[86px] w-fit" src={checkmark} alt='Checkmark Icon' />
              <div className="flex flex-col gap-3">
                <div className="title-large text-blue-9 text-center">SAH#12345</div>
                <div className="body-large text-neutral-7 text-center">Successfully checked out for bengrnb</div>
              </div>
              <Link to="/asset-management" className="block text-center w-full rounded-full bg-blue-9 body-medium p-[10px] text-white">Close</Link>
            </div>
          ) : (
            <div className="am-action-component">
              <div className="flex justify-between items-center mb-6">
                <div className="am-action-component-title">Laptop Check Out</div>
                <img className="h-5 w-fit" src={laptop_check_out} alt='Laptop Return Icon' />
              </div>
              <div className="am-action-component-main">
                <div className="flex flex-wrap justify-between gap-y-4">
                  <div className="am-action-component-item">
                    <label htmlFor="uniqname">
                      Uniqname <span className="text-blue-9">*</span>
                    </label>
                    <input
                      className="am-uniqname-item"
                      type="text"
                      id="uniqname"
                      name="uniqname"
                      pattern="\d*"
                      spellCheck="false"
                      value={uniqname}
                      onChange={handleUniqnameChange}
                    />
                  </div>
                  <div className="am-action-component-item">
                    <label htmlFor="asset">
                      Asset Number <span className="text-blue-9">*</span>
                    </label>
                    <div className="am-laptop-item">
                      <select value={dropdownValue} onChange={handleDropdownChange}>
                        <option value="TRL">TRL</option>
                        <option value="SAH">SAH</option>
                        <option value="SAHM">SAHM</option>
                      </select>
                      <input
                        type="text"
                        id="asset"
                        name="asset"
                        pattern="\d*"
                        value={assetId}
                        onChange={handleAssetIDChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="am-comments">
                  <label htmlFor="comments">
                    Comments
                  </label>
                  <textarea
                    type="text"
                    id="comments"
                    name="comments"
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
                  onClick={handleSubmit} // Call handleSubmit function on button click
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetManagementCheckOut;
