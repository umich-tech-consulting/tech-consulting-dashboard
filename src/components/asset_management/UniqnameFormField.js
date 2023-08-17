import error_alert from "../../icons/asset-management/error_alert.svg";
import uniqname_icon from "../../icons/asset-management/uniqname_icon.svg";

const UniqnameFormField = ({
  setUniqname,
  uniqname,
  uniqnameError,
  setUniqnameError,
  uniqnameErrorMessage,
  isSubmitDisabled,
  handleSubmit,
  inputRef
}) => {
  const handleUniqnameChange = (e) => {
    const input = e.target.value;
    const lowercaseInput = input.toLowerCase();
    const alphanumericInput = lowercaseInput.replace(/[^a-z]/g, "");
    const truncatedInput = alphanumericInput.slice(0, 8);
    setUniqname(truncatedInput);
  };

  const enterToSubmit = (e) => {
    if (e.key === "Enter" && !isSubmitDisabled) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="am-action-component-item">
        <div className="am-action-component-item-header">
          <img src={uniqname_icon} alt="Uniqname Icon" />
          <label htmlFor="uniqname">Customer Uniqname</label>
        </div>
        <input
          ref={inputRef}
          className={`am-uniqname-item ${
            !uniqnameError ? "am-action-form-default" : "am-action-form-error"
          }`}
          type="text"
          id="uniqname"
          name="uniqname"
          pattern="\d*"
          spellCheck="false"
          value={uniqname}
          onKeyDown={enterToSubmit}
          onChange={(e) => {
            handleUniqnameChange(e);
            setUniqnameError(null);
          }}
        />
        <div className="am-action-form-error-message">
          {!uniqnameErrorMessage ? null : (
            <>
              <img src={error_alert} alt="Error Alert" />
              <div>{uniqnameErrorMessage}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UniqnameFormField;
