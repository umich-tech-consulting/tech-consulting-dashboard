import { TooltipIcon } from "../../icons/warranty/WarrantySvgs";
const WarrantyEligibilityCriteria = () => {
  return (
    <>
      <div className="max-w-3xl w-full rounded-[8px] border border-neutral-2 bg-white p-3 flex gap-2.5 items-center">
        <TooltipIcon />
        <div className="body-medium text-neutral-8">Surface devices that are listed on this page and are US bought can be serviced</div>
      </div>
    </>
  );
};

export default WarrantyEligibilityCriteria;
