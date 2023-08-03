import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg";
import checkmark from "../../icons/asset-management/checkmark.svg";

const AssetManagementCheckOut = () => {
  // Make a helper function to combine sah with number and renamde dropdown value using f2
  const [assetId, setAssetId] = useState("");
  const [uniqname, setUniqname] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [dropdownValue, setDropdownValue] = useState("TRL");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable
  const [submitButtonValue, setSubmitButtonValue] = useState("Submit");
  const [tdxResponse, setTdxResponse] = useState(null); // This is where the TXD response json should be assigned
  const [submitError, setSubmitError] = useState(null);
  const tdxBaseUrl = "https://teamdynamix.umich.edu/SBTDNext/Apps";
  const apiUrl = "http://192.168.1.15:8080"

  const tdxCheckoutLoan = async () => {
    setSubmitButtonValue(
      <>
        <div className="w-full flex justify-center">
          <div className="pr-2">Loading</div>
          <svg aria-hidden="true" class="w-5 h-5 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" className="fill-blue-8"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" className="fill-white"/>
          </svg>
        </div>
      </>
    );

    try {
      const res = await fetch(`${apiUrl}/tdx/loan/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uniqname: uniqname,
          asset: `${dropdownValue}${assetId}`,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setIsSubmitted(true);
        setTdxResponse(data);
        setSubmitError(null);
      }

      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.message);
        setSubmitButtonValue("Retry")
      }

      // If you want to set the submit button value to something specific after a successful fetch, you can do it here
      // For example:
      // setSubmitButtonValue("Success");
    } catch (error) {
      // If there's an error, set submitButtonValue to "failed"
      setSubmitButtonValue("Timeout");
    }
  };

  const closeErrorNotification = () => {
    setSubmitError(null)
  }


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
        <div className="flex justify-center">
          {submitError ? (
            <div className=" bg-white p-4 fixed right-0 bottom-0 m-5 rounded-md min-w-[350px]">
              <div className="border-l-2 border-base-red pl-3">
                <div className="flex gap-4">
                  <div>
                    <div className="label-large text-neutral-9">Request failed</div>
                    <div className="body-medium pt-1 text-neutral-7">{submitError}</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="label-medium text-blue-9" onClick={closeErrorNotification}>Dismiss</button>
                  <a href="https://teamdynamix.umich.edu/" target="blank" rel="noreferrer noopener" className="label-medium text-neutral-7 hover:text-blue-9">Resolve in TDX</a>
                </div>
              </div>
            </div>
          ) : (null)}
        </div>
        <div className="am-action-container">
          {isSubmitted ? ( // Check if form is submitted
            <div className="submitted-successfully w-full flex flex-col gap-10 max-w-sm bg-white p-6 rounded-lg items-center">
              <img className="h-[86px] w-fit" src={checkmark} alt='Checkmark Icon' />
              <div className="flex flex-col gap-3">
                <div className="title-large text-blue-9 text-center">Success</div>
                <div className="body-large text-neutral-7 text-center">
                  Loaned
                  <span> <a className="underline" href={`${tdxBaseUrl}/32/Assets/AssetDet?AssetID=${tdxResponse.asset.id}`} target="_blank" rel="noreferrer noopener">{tdxResponse.asset.tag}</a> </span>
                  to
                  <span> <a className="underline" href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponse.loan.owner_uid}`} target="_blank" rel="noreferrer noopener">{tdxResponse.loan.name}</a> </span>
                  in
                  <span> <a className="underline" href={`${tdxBaseUrl}/31/Tickets/TicketDet?TicketID=${tdxResponse.ticket.id}`} target="_blank" rel="noreferrer noopener">TDX{tdxResponse.ticket.id}</a> </span>
                  until {tdxResponse.loan.date}.
                </div>
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
                  onClick={tdxCheckoutLoan} // Call handleSubmit function on button click
                >
                  {submitButtonValue}
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
