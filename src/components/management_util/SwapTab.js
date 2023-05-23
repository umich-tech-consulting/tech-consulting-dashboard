import React, { useState } from 'react';

const SwapTab = () => {
  const [currentAssetId, setCurrentAssetId] = useState("");
  const [newAssetId, setNewAssetId] = useState("");
  const [isInputCurrentIdFocused, setIsInputCurrentIdFocused] = useState(false);
  const [isInputNewIdFocused, setIsInputNewIdFocused] = useState(false);

  const handleCurrentAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setCurrentAssetId(truncatedInput);
  };

  const handleNewAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setNewAssetId(truncatedInput);
  };

  const handleInputCurrentIdFocus = () => {
    setIsInputCurrentIdFocused(true);
  };

  const handleInputCurrentIdBlur = () => {
    setIsInputCurrentIdFocused(false);
  };
  const handleInputNewIdFocus = () => {
    setIsInputNewIdFocused(true);
  };

  const handleInputNewIdBlur = () => {
    setIsInputNewIdFocused(false);
  };

  return (
    <>
      <div className="p-4">
            <div className="flex">
                <div className="flex flex-col gap-y-1 w-6/12">
                    <label
                        htmlFor="current-asset-id"
                        className="title-small text-neutral-9 dark:text-neutral-2"
                    >
                        Current Asset ID #
                    </label>
                    <input
                        className={`headline-large rounded-md box-border outline-none h-40 border-none indent-3 max-w-md bg-white text-neutral-9 dark:bg-black dark:text-neutral-1 ${
                        isInputCurrentIdFocused
                            ? "focus:bg-white dark:focus:bg-black"
                            : " focus:placeholder-transparent"
                        }`}
                        placeholder={isInputCurrentIdFocused ? "" : "00000"}
                        name="current-asset-id"
                        type="text"
                        pattern="\d*"
                        value={currentAssetId}
                        onChange={handleCurrentAssetIdChange}
                        onFocus={handleInputCurrentIdFocus}
                        onBlur={handleInputCurrentIdBlur}
                    />
                </div>
                <div className="flex flex-col gap-y-1 w-6/12">
                    <label
                        htmlFor="new-asset-id"
                        className="title-small text-neutral-9 dark:text-neutral-2"
                    >
                        New Asset ID #
                    </label>
                    <input
                        className={`headline-large rounded-md box-border outline-none h-40 border-none indent-3 max-w-md bg-white text-neutral-9 dark:bg-black dark:text-neutral-1 ${
                        isInputNewIdFocused
                            ? "focus:bg-white dark:focus:bg-black"
                            : " focus:placeholder-transparent"
                        }`}
                        placeholder={isInputNewIdFocused ? "" : "00000"}
                        name="new-asset-id"
                        type="text"
                        pattern="\d*"
                        value={newAssetId}
                        onChange={handleNewAssetIdChange}
                        onFocus={handleInputNewIdFocus}
                        onBlur={handleInputNewIdBlur}
                    />
                </div>
            </div>
            <button className="mb-2 text-blue-9 label-large">Add Note +</button>
            <button className="label-large w-full border-none bg-blue-9 text-white rounded-md h-10 max-w-md">
            Submit
            </button>
        </div>
    </>
  );
}

export default SwapTab;
