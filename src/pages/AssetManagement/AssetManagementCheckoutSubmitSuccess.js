import { Link } from "react-router-dom";
import dashboard_settings from "../../config.json"
import { AssetIcon, CalendarIcon, CommentIcon, TicketIcon, UserIcon } from "../../icons/asset-management/success-icons/AssetManagementSuccessSvgs";

import lottie_checkmark from "../../lottie_checkmark.json"
import LottieAnimation from "../../LottieAnimation";


const CheckoutSubmitSuccess = () => {
  const tdxResponseFromStorage = JSON.parse(localStorage.getItem('tdxResponse'));
  const tdxBaseUrl = `https://${dashboard_settings.TDX.TDX_DOMAIN}/${dashboard_settings.TDX.USE_SANDBOX ? 'SB' : ''}TDNext/apps` // if sandbox is used, then SB will be added before TDNext

  return (
    <>
      <div className="am-action-success-container fade-in">
        <div className="flex w-full h-full">
          <div className="am-action-success-next-steps">
            <div className="am-action-success-header">
              <LottieAnimation animationData={lottie_checkmark} />
              <div className="am-action-success-header">Checkout Success!</div>
            </div>
            <div className="am-action-success-next-steps-card-container">
              <div className="am-action-success-next-steps-card">
                <div className="title-large">Have the Customer</div>
                <div>
                  <div className="label-large">Windows</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>Ensure loaner laptop is connected to power and ethernet</li>
                    <li>Start setting up the computer</li>
                    <li>Sign into the computer with UMICH credentials once on the login screen</li>
                  </ol>
                </div>
                <div>
                  <div className="label-large">Mac</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>Set up the Mac as a personal device, as if it were new. UMICH email and password is not required to use the device</li>
                  </ol>
                </div>
              </div>
              <div className="am-action-success-next-steps-card">
                <div className="title-large">Tell the Customer</div>
                <ol className="am-action-success-card-bullet-container">
                  <li>Loan lasts until: <span className="font-medium">{tdxResponseFromStorage.loan.date}</span> (info pulled from TDX)</li>
                  <li>It is a bundle: comes with laptop, charger and case</li>
                  <li>Make sure to return everything when you come back, or you will be charged for what is missing</li>
                  <li>Use it like your own personal device, you have admin settings</li>
                  <li>If you have any issues with the computer, you can bring it in and we can troubleshoot</li>
                  <li>The laptop is insured, if it gets damaged, bring it in and we can replace it</li>
                  <li>If you put sensitive files on the laptop, make sure you back them up before returning the device because everything is going to be wiped once the laptop is returned</li>
                  <li>They will receive an email towards the end of the loan period. If the customer would like to extend the loan, they can do so at that time</li>
                </ol>
                <div>
                  <div className="label-large">Windows</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>The username and password for the laptop will be the UMICH uniqname and password</li>
                  </ol>
                </div>
                <div>
                  <div className="label-large">Mac</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>Make sure that "Find My" and iCloud are signed out before bringing the laptop back</li>
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
              <div className="am-action-success-summary-info">
                <div className="am-action-success-summary-info-name">Loan Date</div>
                <div className="am-action-success-summary-info-data">
                  <CalendarIcon />
                  <div>{tdxResponseFromStorage.loan.date}</div>
                </div>
              </div>
              <a href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponseFromStorage.loan.owner_uid}`}
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
                  <div>{tdxResponseFromStorage.loan.uniqname}</div>
                </div>
              </a>
              <a href={`${tdxBaseUrl}/31/Tickets/TicketDet?TicketID=${tdxResponseFromStorage.ticket.id}`} target="_blank" rel="noopener noreferrer" className="am-action-success-summary-link">
                <div className="flex items-center gap-1">
                    <div className="am-action-success-summary-info-name">Request Ticket</div>
                    <svg className="stroke-neutral-8 dark:stroke-neutral-2 w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
                <div className="am-action-success-summary-info-data">
                  <TicketIcon />
                  <div>TDX {tdxResponseFromStorage.ticket.id}</div>
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

export default CheckoutSubmitSuccess;
