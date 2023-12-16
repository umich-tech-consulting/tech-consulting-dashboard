const ReturnPrecheck = () => {
    return (
      <>
       <div className="am-action-precheck">
            <div className="am-action-precheck-header">Verify</div>
            <div className="am-action-precheck-main">
            <div className='am-action-precheck-card'>
              <div>Mac: "Find My" and iCloud</div>
                <div className='am-action-precheck-card-info'>Make sure customer is signed out of "Find My" and iCloud and verify in <span><a href="http://gsx2.apple.com/" target="blank" rel="noopener noreferrer" class="underline hover:bg-blue-1 dark:hover:bg-neutral-8" title="Apple Global Service Exchange login">GSX</a></span>
                </div>
            </div>
            <div className='am-action-precheck-card'>
              <div>Laptop, Charger and Sleeve</div>
                <div className='am-action-precheck-card-info'>Have the customer purchase anything that is missing from the Tech Shop
                </div>
            </div>
            <div className='am-action-precheck-card'>
              <div>Device is not damaged</div>
                <div className='am-action-precheck-card-info'>If damaged: Document who, when, where, & how > Return device > Check-in for repair
                </div>
            </div>
            <div className='am-action-precheck-card'>
              <div>Customer data is backed up</div>
                <div className='am-action-precheck-card-info'>Ensure customer has saved important files
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ReturnPrecheck;