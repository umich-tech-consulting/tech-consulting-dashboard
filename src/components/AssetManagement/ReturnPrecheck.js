const ReturnPrecheck = () => {
    return (
      <>
       <div className="am-action-precheck">
            <div className="am-action-precheck-header">Verify</div>
            <div className="am-action-precheck-main">
            <div className="am-action-precheck-item">Mac: "Find My" and iCloud</div>
            <ol><li>Make sure customer is signed out of "Find My" and iCloud and verify in <span><a href="http://gsx2.apple.com/" target="blank" rel="noopener noreferrer" class="underline hover:bg-blue-0 dark:hover:bg-neutral-8" title="Apple Global Service Exchange login">GSX
            </a></span></li></ol>
            <div className="am-action-precheck-item">Laptop, Charger and Sleeve</div>
            <ol><li>Have the customer purchase anything that is missing from the Tech Shop</li></ol>
            <div className="am-action-precheck-item">Device is not damaged</div>
            <ol><li>If damaged: Document who, when, where, & how > Return device > Check-in for repair</li></ol>
            <div className="am-action-precheck-item">Customer data is backed up</div>
            <ol><li>Ensure customer has saved important files</li></ol>
            </div>
        </div>
      </>
    );
  };

  export default ReturnPrecheck;