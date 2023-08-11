import { Link } from "react-router-dom";
const CheckoutSubmitOrCancelForm = ({ assetType, assetId, uniqname, submitButtonValue, tdxCheckoutLoan }) => {

  const isSubmitDisabled =
  uniqname.length < 3 ||
  (assetType !== "SAHM" && assetId.length < 5) ||
  (assetType === "SAHM" && assetId.length < 4);


  return (
    <>
      <div className="am-submit-cancel-container">
        <Link
          to="/asset-management"
          className="am-submit-close-button bg-neutral-2 text-neutral-9 hover:bg-neutral-3"
        >
          Cancel
        </Link>
        <button
          className={`am-submit-close-button ${
            isSubmitDisabled
              ? "bg-neutral-2 text-neutral-4 cursor-not-allowed"
              : "bg-blue-9 text-white hover:bg-blue-8"
          }`}
          disabled={isSubmitDisabled}
          onClick={tdxCheckoutLoan}
        >
          {submitButtonValue}
        </button>
      </div>
    </>
  );
};

export default CheckoutSubmitOrCancelForm;
