import React, { useState } from 'react';



const CheckIn = () => {
  const [assetId, setAssetId] = useState('');
  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  return (
    <div className="rounded-md flex flex-col gap-y-6 p-6 max-w-sm w-full h-fit box-border shadow-light dark:shadow-dark bg-white dark:bg-black">
      <div className="title-medium text-neutral-9 dark:text-neutral-4">Laptop Check In</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1">
          <label
            for='check-in-asset-id'
            className="label-medium text-neutral-9 dark:text-neutral-4">
              Asset ID Number
          </label>
          <input
            className="label-large rounded-md box-border outline-none h-10 border-none indent-3 max-w-md bg-neutral-2 text-neutral-9 focus:bg-neutral-3 dark:bg-neutral-10 dark:text-neutral-4 dark:focus:bg-neutral-9"
            placeholder="Asset ID Number"
            name="check-in-asset-id"
            type='text'
            pattern="\d*"
            value={assetId}
            onChange={handleAssetIDChange}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label
            for='check-in-comments'
            className="label-medium text-neutral-9 dark:text-neutral-4">
              Comments (optional)
          </label>
          <textarea
            className="label-large rounded-md box-border outline-none h-20 border-none max-w-md bg-neutral-2 text-neutral-9 focus:bg-neutral-3 dark:bg-neutral-10 dark:text-neutral-4 dark:focus:bg-neutral-9 p-3 resize-none"
            placeholder="Comments"
            name="check-in-comments"
          />
        </div>
      </div>
      <button className="label-large border-none bg-blue-9 text-white rounded-md h-10 max-w-md">Submit</button>
    </div>
  );
  }
  export default CheckIn;