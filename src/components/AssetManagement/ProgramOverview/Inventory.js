import {
  WindowsLogo,
  AppleLogo,
} from "../../../icons/asset-management/ProgramOverviewSvgs";
const Inventory = () => {
  return (
    <>
      <div className="mt-8 mb-2 title-medium text-neutral-9 dark:text-neutral-2">Inventory</div>
      <div className="w-full flex gap-8 flex-wrap">
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">Total Devices</div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">1000</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end border-l border-neutral-3 dark:border-neutral-7 pl-6 text-neutral-9 dark:text-neutral-2">
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
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">Available</div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">400</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end border-l border-neutral-3 dark:border-neutral-7 pl-6 text-neutral-9 dark:text-neutral-2">
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
        <div className="lg:flex-1 w-full bg-white dark:bg-neutral-9 p-4 rounded-lg flex items-center border border-neutral-2 dark:border-neutral-8">
          <div className="flex flex-col gap-1 grow">
            <div className="title-medium text-neutral-8 dark:text-neutral-3">On Loan</div>
            <div className="display-small text-neutral-9 dark:text-neutral-2">600</div>
          </div>
          <div className="title-large flex flex-col gap-4 items-end border-l border-neutral-3 dark:border-neutral-7 pl-6 text-neutral-9 dark:text-neutral-2">
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
