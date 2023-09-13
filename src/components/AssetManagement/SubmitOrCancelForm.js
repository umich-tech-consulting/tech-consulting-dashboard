import { Link } from "react-router-dom";
const SubmitOrCancelForm = ({ submitButtonValue, isSubmitDisabled, handleSubmit, isLoading }) => {

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
          className={`am-submit-close-button ${isLoading && "cursor-not-allowed"}  ${
            isSubmitDisabled
              ? "bg-neutral-2 text-neutral-4 cursor-not-allowed"
              : "bg-blue-9 text-white hover:bg-blue-8"
          }`}
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          {submitButtonValue}
        </button>
      </div>
    </>
  );
};

export default SubmitOrCancelForm;
