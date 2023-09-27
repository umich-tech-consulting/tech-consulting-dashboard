import { Link } from "react-router-dom";
import { AssetIcon, CommentIcon, UserIcon } from "../../icons/asset-management/success-icons/AssetManagementSuccessSvgs";
import dashboard_settings from "../../config.json"

import lottie_checkmark from "../../lottie_checkmark.json"
import LottieAnimation from "../../LottieAnimation";

const ReturnSubmitSuccess = () => {
  const tdxResponseFromStorage = JSON.parse(localStorage.getItem('tdxResponse'));
  const tdxBaseUrl = `https://${dashboard_settings.TDX.TDX_DOMAIN}/${dashboard_settings.TDX.USE_SANDBOX ? 'SB' : ''}TDNext/apps` // if sandbox is used, then SB will be added before TDNext


  return (
    <>
      <div className="am-action-success-container fade-in">
        <div className="flex w-full h-full">
          <div className="am-action-success-next-steps">
            <div className="am-action-success-header">
              <LottieAnimation animationData={lottie_checkmark} />
              <div className="am-action-success-header">Return Success!</div>
            </div>
            <div className="am-action-success-next-steps-card-container">
              <div className="am-action-success-next-steps-card">
                <div className="title-large">You Should</div>
                <ol className="am-action-success-card-bullet-container">
                  <li>Check that the laptop, sleeve and charger have the same label. If the label is missing/incorrect have a student manager print a new one</li>
                </ol>
                <div>
                  <div className="label-large">Windows</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li><a href="https://docs.google.com/document/d/1i-JWRLZx5_y7q3cLZc7ZyutxVH39quZfLoKa1eYEivY/edit#heading=h.j74jw6jq026" target="blank" rel="noopener noreferrer" class="underline hover:bg-blue-0 dark:hover:bg-neutral-8" title="Wiping Sites at Home Windows">Wipe the laptop</a></li>
                    <li>Once the laptop is successfully wiped, put the device in the consulting closet, on the <b>rear middle shelf</b></li>
                  </ol>
                </div>
                <div>
                  <div className="label-large">Mac</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>Check that "Find My" is disabled in <span><a href="http://gsx2.apple.com/" target="blank" rel="noopener noreferrer" class="underline hover:bg-blue-0 dark:hover:bg-neutral-8" title="Apple Global Service Exchange login">GSX</a></span> and that the customer is signed out of iCloud</li>
                    <li><a href="https://support.apple.com/en-us/HT212749" target="blank" rel="noopener noreferrer" class="underline hover:bg-blue-0 dark:hover:bg-neutral-8" title="Erase your Mac and reset it to factory settings">Wipe the laptop</a></li>
                    <li>Once the laptop is successfully wiped, put the device in the consulting closet, on the <b>rear bottom shelf</b></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="am-action-success-summary">
            <div className="title-large mb-12">Summary</div>
            <div className="am-action-success-summary-info-container">
              <a href={`${tdxBaseUrl}/32/Assets/AssetDet?AssetID=${tdxResponseFromStorage.asset.id}`} target="_blank"
                rel="noreferrer noopener" className="am-action-success-summary-link">
                  <div className="flex items-center gap-1">
                    <div className="am-action-success-summary-info-name">Laptop</div>
                    <svg className="stroke-neutral-8 dark:stroke-neutral-2 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                <div className="am-action-success-summary-info-data">
                  <AssetIcon />
                  <div>{tdxResponseFromStorage.asset.tag}</div>
                </div>
              </a>
              <a href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponseFromStorage.previous_owner.uid}`}
                target="_blank"
                rel="noreferrer noopener" className="am-action-success-summary-link">
                  <div className="flex items-center gap-1">
                    <div className="am-action-success-summary-info-name">Customer</div>
                    <svg className="stroke-neutral-8 dark:stroke-neutral-2 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                <div className="am-action-success-summary-info-data">
                  <UserIcon />
                  <div>{tdxResponseFromStorage.previous_owner.uniqname}</div>
                </div>
              </a>
              {tdxResponseFromStorage.asset.comment &&
                <div className="am-action-success-summary-info">
                  <div className="am-action-success-summary-info-name">Comments</div>
                  <div className="am-action-success-summary-info-data-comment">
                    <div className="mt-[3px]">
                      <CommentIcon />
                    </div>
                    <div>{tdxResponseFromStorage.asset.comment}</div>
                  </div>
                </div>
              }
            </div>
            <div className="am-action-success-close-button-container">
              <Link to="/asset-management" className="am-action-success-close-button">Close</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnSubmitSuccess;
