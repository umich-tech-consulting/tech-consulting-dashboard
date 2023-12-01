const WarrantyPrimaryResults = () => {
  return (
    <>
      <div className="max-w-3xl w-full rounded-[10px] border border-neutral-2 bg-white p-6 gap-6">
        <div className="flex items-center gap-12">
          <div className="w-full flex gap-3 items-center">
            <div className="w-full h-[100px] max-w-[100px] bg-blue-9"></div>
            <div className="flex flex-col gap-3">
              <div className="title-large text-neutral-9">
                Surface Laptop Studio - i7/16/512
              </div>
              <div className="label-medium text-neutral-7">#1234567890</div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-9 py-3">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-[#34C759] w-[14px] h-[14px] rounded-full"></div>
                <div className="label-large text-neutral-8">Serviceable</div>
              </div>
              <div className="label-medium text-neutral-8 pl-[22px]">
                Tech repair is able to repair this device
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-[#34C759] w-[14px] h-[14px] rounded-full"></div>
                <div className="label-large text-neutral-8">Safeware</div>
              </div>
              <div className="flex flex-col gap-1 pl-[22px]">
                <div className="label-medium text-neutral-8">
                  Covered for parts, labor, and accidental
                </div>
                <div className="body-small text-neutral-7">
                  $200 Remaining balance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="body-medium text-blue-9">Details</div></div>
      </div>
    </>
  );
};

export default WarrantyPrimaryResults;
