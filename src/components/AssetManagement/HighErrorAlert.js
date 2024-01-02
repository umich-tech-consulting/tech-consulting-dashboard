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
          <svg className="h-9 w-fit" xmlns="http://www.w3.org/2000/svg" width="55" height="52" fill="none" viewBox="0 0 55 52" role="img" aria-labelledby="helper_squirrel">
            <title id="helper_squirrel">Helper Squirrel</title>
            <path className="fill-[#00274C] dark:fill-yellow-5" d="M12.9126 25.0508v-.0114c-.2349-.2425-.4796-.4533-.7481-.5963-1.6011-.6051-4.44132 2.7748-10.59282.6486-.49022-.1699-.923298-.7249-.945898-1.2381-.155165-3.555.960818-3.9417 1.753648-5.6203 1.55208-3.2931 3.7981-5.3484 5.39493-5.857 3.59644-1.2267 2.83724-5.90079 4.45664-5.67981.8935.12103 1.6749 1.66865 2.2452 5.53511 2.0324 1.0834 2.9817 2.2658 3.7644 3.724.5358.9834 1.8432 1.9786 2.9374 2.2434 6.1942 1.495 10.8861 5.7355 14.4111 12.1039 1.0627 2.4584 4.0448 10.3826 1.1163 16.0236-.0959.1864-.0226.4137.1659.5086.0554.0291.1155.0422.1743.0422.1385 0 .272-.0751.3406-.2054 3.5278-6.7973-.8905-16.2968-1.4126-17.372-1.2498-6.2445-7.7799-9.0792-7.7799-16.6034C28.1937 5.02797 34.4709 0 41.3509 0c6.892 0 12.0638 4.79512 12.0638 4.79512s-3.5525.66332-3.5525 5.54748C49.8617 17.7248 55 19.0953 55 31.1281 55 43.1618 45.3049 52 31.6101 52H11.1807c0-2.5416 1.128-3.2373 4.1775-3.2922-3.7393-5.6789-3.3049-9.9183-.104-13.1855 1.3815-.897 7.5372-4.4042 13.3001.0776.1667.1286.4063.1003.5359-.0641.1308-.1641.1014-.4015-.0644-.5301-6.4503-5.0135-13.5184-.5659-14.4078.0316-7.32122.4221-11.90339-6.9095-13.62757-3.495-.168806.3336-.665418.2859-.762605-.0742C-1.83442 23.7885 10.7244 32.7476 12.9115 25.0503l.0011.0005Zm-6.39323-8.3116c-.6296 0-1.14026.5052-1.14026 1.1289 0 .6232.51068 1.1293 1.14026 1.1293.63045 0 1.14156-.5052 1.14156-1.1293 0-.6237-.5111-1.1289-1.14156-1.1289Z"/>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HighErrorAlert;
