const AssetBreakdown = () => {
    return (
      <>
        <div className="mt-8 mb-2 title-medium text-neutral-9">Asset Breakdown</div>
        <div className="w-full flex gap-8">
          <div className="flex-1 bg-white p-4 rounded-lg flex flex-col h-fit border border-neutral-2">
            <div className="flex flex-col gap-3">
              <div className="title-medium text-neutral-8">
                Windows Assets
              </div>
              <div className="display-small">800</div>
            </div>
            <div className="w-full flex title-small mt-6 px-2 text-neutral-8">
                <div className="flex-1">Year</div>
                <div className="flex-1">Model</div>
                <div className="flex-1 text-right">On Loan / Total</div>
            </div>
            <div className="w-full flex justify-between title-medium mt-2 bg-base-light p-2 rounded-full">
                <div className="flex-1">2021</div>
                <div className="flex-1">Dell XPS</div>
                <div className="flex-1 text-right">100/200</div>
            </div>
            <div className="w-full flex justify-between title-medium mt-2 bg-base-light p-2 rounded-full">
                <div className="flex-1">2020</div>
                <div className="flex-1">Dell XPS</div>
                <div className="flex-1 text-right">200/200</div>
            </div>
            <div className="w-full flex justify-between title-medium mt-2 bg-base-light p-2 rounded-full">
                <div className="flex-1">2019</div>
                <div className="flex-1">Dell XPS</div>
                <div className="flex-1 text-right">0/200</div>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg flex flex-col h-fit border border-neutral-2">
            <div className="flex flex-col gap-3">
              <div className="title-medium text-neutral-8">
                Mac Assets
              </div>
              <div className="display-small">200</div>
            </div>
            <div className="w-full flex title-small mt-6 px-2 text-neutral-8">
                <div className="flex-1">Year</div>
                <div className="flex-1">Model</div>
                <div className="flex-1 text-right">On Loan / Total</div>
            </div>
            <div className="w-full flex justify-between title-medium mt-2 bg-base-light p-2 rounded-full">
                <div className="flex-1">2023</div>
                <div className="flex-1">Macbook Air</div>
                <div className="flex-1 text-right">100/200</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default AssetBreakdown;
  