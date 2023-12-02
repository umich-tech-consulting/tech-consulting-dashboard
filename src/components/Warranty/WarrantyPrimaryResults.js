import { useState } from 'react';
import { DetailsDropdown } from '../../icons/warranty/WarrantySvgs';
const WarrantyPrimaryResults = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="max-w-3xl w-full rounded-[10px] border border-neutral-2 bg-white p-6 flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-full flex gap-3 items-center">
            <img src='https://support.lenovo.com/dist/images/pcg/laptops-and-netbooks.png' alt='Device' className="w-full h-[100px] max-w-[100px]"/>
            <div className="flex flex-col gap-3">
              <div className="title-large text-neutral-9">
                Surface Laptop Studio - i7/16/512
              </div>
              <div className="label-medium text-neutral-7">#1234567890</div>
            </div>
          </div>
          <div className='h-full w-[1px] bg-neutral-4 rounded-full mx-[24px]'></div>
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
        <button onClick={toggleDetails} className="flex justify-center gap-2">
          <div className="body-medium text-blue-9">Details</div>
          <div className={`transform transition-transform duration-300 ${!showDetails ? '-rotate-180' : ''}`}><DetailsDropdown /></div>
        </button>
        {showDetails && (
            <div className='flex flex-col gap-6'>
              <div className='bg-white p-3 border border-neutral-2 rounded-lg flex justify-between'>
                <div className='flex gap-2.5'>
                  <div className='h-full w-[4px] bg-green-1 rounded-full'></div>
                  <div className='flex flex-col gap-[2px]'>
                    <div className='title-medium text-neutral-9'>Manufacture Warranty</div>
                    <div className='body-medium text-neutral-7'>01/01/2021 - 01/01/2024</div>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='label-small px-1.5 py-1 bg-neutral-2 rounded-sm w-fit h-fit'>Parts/Labor</div>
                </div>
              </div>
              <div className='bg-white p-3 border border-neutral-2 rounded-lg flex justify-between'>
                <div className='flex gap-2.5'>
                  <div className='h-full w-[4px] bg-red-5 rounded-full'></div>
                  <div className='flex flex-col gap-[2px]'>
                    <div className='title-medium text-neutral-9'>Safeware</div>
                    <div className='body-medium text-neutral-7'>01/01/2021 - 01/01/2022</div>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='label-small px-1.5 py-1 bg-neutral-2 rounded-sm w-fit h-fit'>Parts/Labor</div>
                  <div className='label-small px-1.5 py-1 bg-neutral-2 rounded-sm w-fit h-fit'>Accidental</div>
                </div>
              </div>
            </div>
          )}

      </div>
    </>
  );
};

export default WarrantyPrimaryResults;
