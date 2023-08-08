import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";
import laptop_check_out from "../../icons/asset-management/laptop_check_out.svg";
import checkmark from "../../icons/asset-management/checkmark.svg";
import UniqnameFormField from "../../components/asset_management/UniqnameFormField";
import AssetNumberFormField from "../../components/asset_management/AssetNumberFormField";
import CommentFormField from "../../components/asset_management/CommentFormField";
import SubmitOrCancelForm from "../../components/asset_management/SubmitOrCancelForm";
import spinner from "../../icons/asset-management/spinner.svg"

const AssetManagementCheckOut = () => {
  // Make a helper function to combine sah with number and rename dropdown value using f2
  const [uniqname, setUniqname] = useState("");
  const [dropdownValue, setDropdownValue] = useState("TRL");
  const [assetId, setAssetId] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitButtonValue, setSubmitButtonValue] = useState("Submit");
  const [tdxResponse, setTdxResponse] = useState(null);
  const [uniqnameError, setUniqnameError] = useState(null);
  const [assetError, setAssetError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const tdxBaseUrl = "https://teamdynamix.umich.edu/SBTDNext/Apps";
  const apiUrl = "http://192.168.1.15:8080"

  const tdxCheckoutLoan = async () => {
    setSubmitButtonValue(
      <>
        <div className="am-action-submit-button-spinner">
          <div>Loading</div>
          <img src={spinner} alt='Loading Spinner' />
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
        setUniqnameError(true) // this could be uniqname error
        setAssetError(true) // this could be asset error
        setSubmitError(data.message);
        setSubmitButtonValue("Retry")
      }
    } catch (error) {
      setSubmitButtonValue("Timeout");
    }
  };

  const closeErrorNotification = () => {
    setSubmitError(null)
  }

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
        {/* <div className="flex justify-center">
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
        </div> */}
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
            <div className="am-action-form">
              <div className="am-action-form-header">
                <div>Laptop Check Out</div>
                <img src={laptop_check_out} alt='Laptop Return Icon' />
              </div>
              <div className="am-action-component-main">
                <UniqnameFormField setUniqname={setUniqname} uniqname={uniqname} uniqnameError={uniqnameError} />
                <AssetNumberFormField setAssetId={setAssetId} assetId={assetId} setDropdownValue={setDropdownValue} dropdownValue={dropdownValue} assetError={assetError} />
                <CommentFormField setComment={setComment} comment={comment} />
              </div>
              <SubmitOrCancelForm isSubmitDisabled={isSubmitDisabled} submitButtonValue={submitButtonValue} tdxCheckoutLoan={tdxCheckoutLoan} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssetManagementCheckOut;
