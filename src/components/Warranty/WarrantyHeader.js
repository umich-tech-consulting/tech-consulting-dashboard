import {
  WarrantyCheckDefault,
  // WarrantyShieldFullCoverage,
  // WarrantyShieldNoCoverage,
  // WarrantyShieldPartialCoverage
} from "../../icons/warranty/WarrantySvgs";
const WarrantyHeader = () => {
  return (
    <>
      <div className="mt-8 flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <WarrantyCheckDefault />
          {/* <WarrantyShieldFullCoverage /> */}
          {/* <WarrantyShieldNoCoverage /> */}
          {/* <WarrantyShieldPartialCoverage /> */}
          <div className="headline-large text-neutral-9 dark:text-neutral-1 text-center">
            Warranty Check
          </div>
        </div>
        <div className="body-medium text-neutral-7 dark:text-neutral-3 text-center max-w-3xl">
          Note: This page only checks the warranty of University and Non
          University laptops. Other devices are not supported.
        </div>
      </div>
    </>
  );
};
export default WarrantyHeader;
