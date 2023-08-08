import error_alert from "../../icons/asset-management/error_alert.svg";
const UniqnameFormField = ({ setUniqname, uniqname, uniqnameError, setUniqnameError, uniqnameErrorMessage }) => {
  const handleUniqnameChange = (e) => {
    const input = e.target.value;
    const lowercaseInput = input.toLowerCase();
    const alphanumericInput = lowercaseInput.replace(/[^a-z]/g, "");
    const truncatedInput = alphanumericInput.slice(0, 8);
    setUniqname(truncatedInput);
  };

  return (
    <>
      <div className="am-action-component-item">
        <label htmlFor="uniqname">Uniqname</label>
        <input
          className={`am-uniqname-item ${
            !uniqnameError ? "am-action-form-default" : "am-action-form-error"
          }`}
          type="text"
          id="uniqname"
          name="uniqname"
          pattern="\d*"
          spellCheck="false"
          value={uniqname}
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
