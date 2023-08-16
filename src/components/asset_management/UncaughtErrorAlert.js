import exclamation_triangle from "../../icons/asset-management/exclamation_triangle.svg";

const UncaughtErrorAlert = () => {
  return (
    <>
      <div className="am-action-uncaught-error-alert">
        <img src={exclamation_triangle} alt="Exclamation Triangle" />
        <div>
          <div>An error occurred that the dashboard couldn't handle.</div>
          <a
            href="https://teamdynamix.umich.edu/"
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
