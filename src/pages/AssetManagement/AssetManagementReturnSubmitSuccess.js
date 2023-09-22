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
                    <li>Wipe the laptop. Documentation [Link here]</li>
                    <li>Once the laptop is successfully wiped, put the device in the consulting closet, on the <b>rear middle shelf</b></li>
                  </ol>
                </div>
                <div>
                  <div className="label-large">Mac</div>
                  <ol className="am-action-success-card-bullet-container">
                    <li>Check that "Find My" is disabled in GSX [LINK HERE] and that the customer is signed out of iCloud</li>
                    <li>Wipe the laptop. Documentation [link here]</li>
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
                <div className="am-action-success-summary-info-name">Laptop</div>
                <div className="am-action-success-summary-info-data">
                  <AssetIcon />
                  <div>{tdxResponseFromStorage.asset.tag}</div>
                </div>
              </a>
              <a href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponseFromStorage.previous_owner.uid}`}
                target="_blank"
                rel="noreferrer noopener" className="am-action-success-summary-link">
                <div className="am-action-success-summary-info-name">Customer</div>
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
