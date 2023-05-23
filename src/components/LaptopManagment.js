import React, { useState } from 'react';

const LaptopManagement = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [assetId, setAssetId] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="rounded-md shadow-light max-w-sm w-full max-h-96 h-full dark:shadow-dark bg-white dark:bg-black">
      <div className="flex mb-4">
        <button
          className={`mr-2 py-2 flex-1 border${
            activeTab === 1 ? 'bg-neutral-5 text-black' : 'bg-neutral-3'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Check In
        </button>
        <button
          className={`mr-2py-2 flex-1 ${
            activeTab === 2 ? 'bg-neutral-5 text-black' : 'bg-neutral-3'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Check Out
        </button>
        <button
          className={`py-2 flex-1 ${
            activeTab === 3 ? 'bg-neutral-5 text-black' : 'bg-neutral-3'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Swap
        </button>
      </div>
      <div>
        {activeTab === 1 && (
          <div className="p-3">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="check-in-asset-id"
                className="title-small text-neutral-9 dark:text-neutral-4"
              >
                Asset ID Number
              </label>
              <input
                className={`headline-large rounded-md box-border outline-none text-center h-40 border-none indent-3 max-w-md bg-white text-neutral-9 ${
                  isInputFocused ? 'focus:bg-white' : 'dark:bg-neutral-10 dark:text-neutral-4 dark:focus:bg-neutral-9 focus:placeholder-transparent'
                }`}
                placeholder={isInputFocused ? '' : '00000'}
                name="check-in-asset-id"
                type="text"
                pattern="\d*"
                value={assetId}
                onChange={handleAssetIDChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <button className='mb-2 text-blue-9 label-large'>Add Note +</button>
            <button className="label-large w-full border-none bg-blue-9 text-white rounded-md h-10 max-w-md">
              Submit
            </button>
          </div>
        )}
        {activeTab === 2 && <div>Tab 2 here</div>}
        {activeTab === 3 && <div>Tab 3 here</div>}
      </div>
    </div>
  );
};

export default LaptopManagement;
