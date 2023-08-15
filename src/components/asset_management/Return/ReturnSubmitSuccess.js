import checkmark from "../../../icons/asset-management/checkmark.svg";
import broken_link from "../../../icons/asset-management/broken_link.svg";

import { Link } from "react-router-dom";

const ReturnSubmitSuccess = ({tdxResponse, tdxBaseUrl}) => {


  return (
    <>
      <div className="am-action-success-container">
        <img src={checkmark} alt="Checkmark Icon" />
        <div className="am-action-success-container-main">
          <div className="am-action-success-header">Success</div>
          <div className="am-action-success-details">
            Returned
            <span>
              {" "}
              <a
                href={`${tdxBaseUrl}/32/Assets/AssetDet?AssetID=${tdxResponse.asset.id}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {tdxResponse.asset.tag}
              </a>{" "}
            </span>
            which was previously loaned to
            <span>
              {" "}
              <a
                href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponse.previous_owner.uid}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {tdxResponse.previous_owner.uniqname}
              </a>{" "}
            </span>
            .
          </div>
        </div>
        <Link to="/asset-management" className="am-action-success-close-button">
          Close
        </Link>
      </div>
    </>
  );
};

export default ReturnSubmitSuccess;
