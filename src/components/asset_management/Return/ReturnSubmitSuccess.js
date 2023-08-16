import broken_link from "../../../icons/asset-management/broken_link.svg";
import { Link } from "react-router-dom";
import checkmark from "../../../icons/asset-management/checkmark.svg";
import asset_icon from "../../../icons/asset-management/asset_icon.svg";
import uniqname_icon from "../../../icons/asset-management/uniqname_icon.svg";
import comments_icon from "../../../icons/asset-management/comments_icon.svg";

const ReturnSubmitSuccess = ({tdxResponse, tdxBaseUrl}) => {


  return (
    <>
      <div className="am-action-success-container">
        <div className="am-action-success-header">
          <img src={checkmark} alt="Checkmark Icon" />
          <div className="am-action-success-header">Return Success</div>
        </div>
        <div className="am-action-success-container-main">
          <div className="am-action-success-asset-uniqname">
            <a target="_blank" rel="noopener noreferrer" href={`${tdxBaseUrl}/32/Assets/AssetDet?AssetID=${tdxResponse.asset.id}`} className="am-action-success-asset-uniqname-button">
              <img src={asset_icon} alt="Asset Icon" />
              <div>{tdxResponse.asset.tag}</div>
            </a>
            <img className="h-8 w-8" src={broken_link} alt="Link Icon" />
            <a target="_blank" rel="noopener noreferrer" href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponse.previous_owner.uid}`} className="am-action-success-asset-uniqname-button">
              <img src={uniqname_icon} alt="Asset Icon" />
              <div>{tdxResponse.previous_owner.uniqname}</div>
            </a>
          </div>
          {tdxResponse.asset.comment &&
          <div className="am-action-success-date-comments-info mt-3">
            <img src={comments_icon} alt="Checkmark Icon" />
            <div>{tdxResponse.asset.comment}</div>
          </div>
          }
        </div>
        <Link to="/asset-management" className="am-action-success-close-button">
          Close
        </Link>
      </div>
    </>
  );
};

export default ReturnSubmitSuccess;
