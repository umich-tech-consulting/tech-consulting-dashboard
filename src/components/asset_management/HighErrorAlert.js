import squirrel from "../../icons/asset-management/squirrel.svg";

const HighErrorAlert = ({resetErrorCount}) => {

  return (
    <>
      <div className="am-error-alert-container">
        <div className="am-error-alert-main">
            <div className="am-error-alert-message">
                Hey there!
            </div>
            <div className="am-error-alert-message">
                I may have misplaced one of my acorns
            </div>
            <div className="am-error-alert-message">
                There could be a problem with the dashboard
            </div>
            <div className="am-error-alert-button-container">
                <button
                className="am-error-alert-close-button"
                onClick={resetErrorCount}
                >
                Leave me alone squirrel!
                </button>
                <a
                className="am-error-alert-tdx-button"
                href="https://teamdynamix.umich.edu/"
                target="blank"
                rel="noreferrer noopener"
                >
                Complete request in TDX
                </a>
            </div>
        </div>
        <div className="am-error-alert-squirrel-container">
            <img src={squirrel} alt="Helper Squirrel" />
        </div>
      </div>
    </>
  );
};

export default HighErrorAlert;
