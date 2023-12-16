import { Link } from "react-router-dom";
const SubmitOrCancelForm = ({ submitButtonValue, isSubmitDisabled, handleSubmit, isLoading }) => {

  return (
    <>
      <div className="am-submit-cancel-container">
        <Link
          to="/asset-management"
          className="am-submit-close-button bg-neutral-2 dark:bg-neutral-8 text-neutral-9 dark:text-neutral-1 hover:bg-neutral-3 dark:hover:bg-neutral-7"
        >
          Cancel
        </Link>
        <button
          className={`am-submit-close-button ${isLoading && "cursor-not-allowed"}  ${
            isSubmitDisabled
              ? "bg-neutral-2 text-neutral-4 dark:bg-neutral-8 dark:text-neutral-6 cursor-not-allowed"
              : "bg-blue-10 dark:bg-yellow-6 text-white dark:text-neutral-10 hover:bg-blue-9 dark:hover:bg-yellow-5"
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
