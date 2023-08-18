import link from "../../../icons/asset-management/link.svg";
import { Link } from "react-router-dom";
import checkmark from "../../../icons/asset-management/checkmark.svg";
import asset_icon from "../../../icons/asset-management/asset_icon.svg";
import uniqname_icon from "../../../icons/asset-management/uniqname_icon.svg";
import ticket from "../../../icons/asset-management/ticket.svg";
import calendar from "../../../icons/asset-management/calendar.svg";
import comments_icon from "../../../icons/asset-management/comments_icon.svg";

const CheckoutSubmitSuccess = ({tdxResponse, tdxBaseUrl}) => {


  return (
    <>
      <div className="am-action-success-container">
        <div className="am-action-success-header">
          <img src={checkmark} alt="Checkmark Icon" />
          <div className="am-action-success-header">Checkout Success</div>
        </div>
        <div className="am-action-success-container-main">
          <div className="am-action-success-asset-uniqname">
            <a target="_blank" rel="noopener noreferrer" href={`${tdxBaseUrl}/32/Assets/AssetDet?AssetID=${tdxResponse.asset.id}`} className="am-action-success-asset-uniqname-button">
              <img src={asset_icon} alt="Asset Icon" />
              <div>{tdxResponse.asset.tag}</div>
            </a>
            <img className="h-8 w-8" src={link} alt="Link Icon" />
            <a target="_blank" rel="noopener noreferrer" href={`${tdxBaseUrl}/People/PersonDet.aspx?U=${tdxResponse.loan.owner_uid}`} className="am-action-success-asset-uniqname-button">
              <img src={uniqname_icon} alt="Asset Icon" />
              <div>{tdxResponse.loan.uniqname}</div>
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={`${tdxBaseUrl}/31/Tickets/TicketDet?TicketID=${tdxResponse.ticket.id}`} className="am-action-success-tdx-button">
            <img src={ticket} alt="Ticket Icon" />
            <div>TDX {tdxResponse.ticket.id}</div>
          </a>
          <div className="am-action-success-date-comments">
            <div className="am-action-success-date-comments-info">
              <img src={calendar} alt="Calendar Icon" />
              <div>{tdxResponse.loan.date}</div>
            </div>
            {tdxResponse.asset.comment &&
            <div className="am-action-success-date-comments-info">
              <img src={comments_icon} alt="Comments Icon" />
              <div>{tdxResponse.asset.comment}</div>
            </div>
            }
          </div>
        </div>
        <Link to="/asset-management" className="am-action-success-close-button">
          Close
        </Link>
      </div>
    </>
  );
};

export default CheckoutSubmitSuccess;
