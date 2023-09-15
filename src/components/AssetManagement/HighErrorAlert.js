import { HelperSquirrel } from "./HighErrorAlertSvgs";

const HighErrorAlert = ({resetErrorCount}) => {

  return (
    <>
      <div className="am-error-alert-container">
        <div className="am-error-alert-main">
            <div className="am-error-alert-message">
              TDX may be able to help you complete your request!
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
            <HelperSquirrel />
        </div>
      </div>
    </>
  );
};

export default HighErrorAlert;
