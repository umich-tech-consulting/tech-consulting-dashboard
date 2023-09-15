const UniqnameFormField = ({
  setUniqname,
  uniqname,
  uniqnameError,
  setUniqnameError,
  uniqnameErrorMessage,
  isSubmitDisabled,
  handleSubmit,
  inputRef,
  isLoading
}) => {
  const handleUniqnameChange = (e) => {
    const input = e.target.value;
    const lowercaseInput = input.toLowerCase();
    const alphanumericInput = lowercaseInput.replace(/[^a-z]/g, "");
    const truncatedInput = alphanumericInput.slice(0, 8);
    setUniqname(truncatedInput);
  };

  const enterToSubmit = (e) => {
    if (e.key === "Enter" && !isSubmitDisabled && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="am-action-component-item">
        <div className="am-action-component-item-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14" role="img" aria-labelledby="uniqname_icon">
            <title id="uniqname_icon">Uniqname Icon</title>
            <path className="stroke-neutral-9 dark:stroke-neutral-2" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875" d="M9.18765 3.5c0 .58016-.23047 1.13656-.64071 1.5468-.41023.41023-.96663.6407-1.54679.6407-.58016 0-1.13656-.23047-1.5468-.6407-.41023-.41024-.6407-.96664-.6407-1.5468 0-.58016.23047-1.13656.6407-1.5468.41024-.41023.96664-.6407 1.5468-.6407.58016 0 1.13656.23047 1.54679.6407.41024.41024.64071.96664.64071 1.5468Zm-6.56192 8.2355c.01875-1.1478.48787-2.24224 1.30619-3.04731.81832-.80506 1.92028-1.25625 3.06823-1.25625 1.14795 0 2.24991.45119 3.06825 1.25625.8183.80507 1.2874 1.89951 1.3062 3.04731-1.3724.6293-2.8647.954-4.37445.952-1.561 0-3.04267-.3407-4.37442-.952Z"/>
          </svg>
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
              <svg className="stroke-red-10 dark:stroke-red-5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="error_alert_icon">
                <title id="error_alert_icon">Error Alert Icon</title>
                <path d="M9 6.74951V9.56201M15.75 8.99951C15.75 9.88594 15.5754 10.7637 15.2363 11.5826C14.897 12.4016 14.3998 13.1457 13.773 13.7725C13.1462 14.3993 12.4021 14.8965 11.5831 15.2358C10.7642 15.5749 9.88643 15.7495 9 15.7495C8.11357 15.7495 7.23583 15.5749 6.41688 15.2358C5.59794 14.8965 4.85382 14.3993 4.22703 13.7725C3.60024 13.1457 3.10304 12.4016 2.76381 11.5826C2.4246 10.7637 2.25 9.88594 2.25 8.99951C2.25 7.20931 2.96117 5.49241 4.22703 4.22654C5.4929 2.96068 7.20979 2.24951 9 2.24951C10.7902 2.24951 12.5071 2.96068 13.773 4.22654C15.0389 5.49241 15.75 7.20931 15.75 8.99951ZM9 11.812H9.006V11.818H9V11.812Z" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div>{uniqnameErrorMessage}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UniqnameFormField;
