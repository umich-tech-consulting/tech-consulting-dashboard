import { ExclamationTriangle } from "./UncaughtErrorAlertSvgs";

const UncaughtErrorAlert = () => {
  return (
    <>
      <div className="am-action-uncaught-error-alert">
        <ExclamationTriangle />
        <div>
          <div>An error occurred that can't be fixed from the dashboard.</div>
          <a
            href="https://teamdynamix.umich.edu/TDNext/Login.aspx"
            target="blank"
            rel="noreferrer noopener"
          >
            Please complete your request in TDX
          </a>
        </div>
      </div>
    </>
  );
};

export default UncaughtErrorAlert;
