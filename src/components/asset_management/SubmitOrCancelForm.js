import { Link } from "react-router-dom";
const SubmitOrCancelForm = ({ isSubmitDisabled, submitButtonValue, tdxCheckoutLoan }) => {


  return (
    <>
      <div className="am-submit-cancel-container">
        <Link
          to="/asset-management"
          className="text-base-red flex items-center"
        >
          Cancel
        </Link>
        <button
          className={`am-submit-button ${
            isSubmitDisabled
              ? "bg-neutral-2 text-neutral-4 cursor-not-allowed"
              : "bg-blue-9 text-white"
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

export default SubmitOrCancelForm;
