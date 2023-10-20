import {
  WindowsLogo,
  AppleLogo,
} from "../../../icons/asset-management/ProgramOverviewSvgs";
const Inventory = () => {
  return (
    <>
      <div className="mt-8 mb-2 title-medium text-neutral-9">Inventory</div>
      <div className="w-full flex gap-8">
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center border border-neutral-2">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8">Total Devices</div>
            <div className="display-small">1000</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end">
            <div className="flex gap-3 items-center">
              <WindowsLogo />
              <div>800</div>
            </div>
            <div className="flex gap-3 items-center">
              <AppleLogo />
              <div>400</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center border border-neutral-2">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8">Available</div>
            <div className="display-small">400</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end">
            <div className="flex gap-3 items-center">
              <WindowsLogo />
              <div>300</div>
            </div>
            <div className="flex gap-3 items-center">
              <AppleLogo />
              <div>100</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg flex items-center border border-neutral-2">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8">On Loan</div>
            <div className="display-small">600</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end">
            <div className="flex gap-3 items-center">
              <WindowsLogo />
              <div>400</div>
            </div>
            <div className="flex gap-3 items-center">
              <AppleLogo />
              <div>200</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Inventory;
