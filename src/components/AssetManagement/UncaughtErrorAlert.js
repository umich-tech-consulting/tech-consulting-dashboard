const UncaughtErrorAlert = () => {
  return (
    <>
      <div className="am-action-uncaught-error-alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" role="img" aria-labelledby="exclamation_triangle">
          <title id="exclamation_triangle">Exclamation Triangle</title>
          <path className="stroke-red-10 dark:stroke-red-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.99961 7.49945v3.12505m-7.7525 2.8133c-.72167 1.25.18083 2.8117 1.62333 2.8117H16.1288c1.4416 0 2.3441-1.5617 1.6233-2.8117L11.6238 2.81445c-.7217-1.25-2.52669-1.25-3.24836 0L2.24711 13.4378Zm7.7525-.3133h.00579v.0066h-.00579v-.0066Z"/>
        </svg>
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
