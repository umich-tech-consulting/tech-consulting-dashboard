import { useState } from "react"; // Import useState

const CustomerReturn = ({setIsReturnClicked}) => {
  const [assetId, setAssetId] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [dropdownValue, setDropdownValue] = useState("SAH"); // Default dropdown value is "SAH"

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value); // Update the dropdown value
  };

  const isSubmitDisabled = assetId.length < 5;

  const handleReturnClick = () => {
    setIsReturnClicked(false);
  };

  return (
    <>
      <div className="w-full flex flex-col h-screen p-6 justify-center items-center">
        <div className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-light flex flex-col gap-y-16">
        <button className="absolute" onClick={handleReturnClick}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 22L22 6M6 6L22 22" stroke="#0D57AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </button>
            <div className="mb-6 headline-large text-center font-medium">Laptop Return</div>
          <div className="flex flex-col gap-y-12">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <label className="title-medium font-semibold" for="asset">Laptop Asset Number<span className="text-blue-9">*</span></label>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 11.25L11.291 11.23C11.4192 11.1659 11.5631 11.14 11.7057 11.1552C11.8482 11.1703 11.9834 11.2261 12.0952 11.3157C12.2071 11.4054 12.2909 11.5252 12.3368 11.661C12.3826 11.7968 12.3886 11.9429 12.354 12.082L11.646 14.918C11.6111 15.0572 11.6169 15.2034 11.6627 15.3394C11.7084 15.4754 11.7922 15.5954 11.9041 15.6852C12.016 15.775 12.1513 15.8308 12.294 15.846C12.4367 15.8612 12.5807 15.8352 12.709 15.771L12.75 15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM12 8.25H12.008V8.258H12V8.25Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className="flex gap-x-2 w-64">
                <select
                    className="p-2 rounded-lg border-2 border-neutral-5 focus:outline-none focus:border-blue-9 text-neutral-9 font-medium"
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                >
                    <option value="SAH">SAH</option>
                    <option value="TRL">TRL</option>
                </select>
                <input className="p-2 border-2 rounded-lg border-neutral-5 focus:outline-none focus:border-blue-9 focus:border-2 w-full font-medium" type="text" id="asset" name="asset" placeholder="00000" pattern="\d*"
                    value={assetId}
                    onChange={handleAssetIDChange}/>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-2">
              <label className="title-medium font-semibold" for="uniqname">Comments</label>
              <textarea className="p-2 border-2 h-32 resize-none rounded-lg border-neutral-5 focus:outline-none focus:border-blue-9 focus:border-2 w-full body-medium text-neutral-9" type="text" id="comments" name="comments" placeholder="Optional" value={noteContent}
              onChange={handleNoteChange} />
            </div>
          </div>
          <button className={`label-large w-full border-none rounded-md h-14 ${
              isSubmitDisabled ? 'bg-neutral-5 cursor-not-allowed' : 'bg-blue-9 text-white'
            }`}
            disabled={isSubmitDisabled}>Check and Submit</button>
        </div>
      </div>
    </>
  );
};

export default CustomerReturn;
