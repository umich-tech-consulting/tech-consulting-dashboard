import { useState } from 'react';

const CheckOutTab = () => {
  const [assetId, setAssetId] = useState('');
  const [uniqname, setUniqname] = useState('');
  const [isInputAssetIdFocused, setIsInputAssetIdFocused] = useState(false);
  const [isInputUniqnameFocused, setIsInputUniqnameFocused] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [buttonText, setButtonText] = useState("SAH");

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleUniqnameChange = (e) => {
    const input = e.target.value;
    const lowercaseInput = input.toLowerCase();
    const alphanumericInput = lowercaseInput.replace(/[^a-z]/g, '');
    const truncatedInput = alphanumericInput.slice(0, 8);
    setUniqname(truncatedInput);
  };

  const handleInputAssetIdFocus = () => {
    setIsInputAssetIdFocused(true);
  };

  const handleInputAssetIdBlur = () => {
    setIsInputAssetIdFocused(false);
  };

  const handleInputUniqnameFocus = () => {
    setIsInputUniqnameFocused(true);
  };

  const handleInputUniqnameBlur = () => {
    setIsInputUniqnameFocused(false);
  };
  
  const handleAddNoteClick = () => {
    setIsAddingNote(true);
  };

  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleNoteSave = () => {
    // const firstLine = noteContent.split('\n')[0]; // Extract the first line of the note
    // setAssetId(firstLine.slice(0, 25)); // Update the assetId with the first 25 characters of the note
    setNoteContent(noteContent); // Clear the note content
    setIsAddingNote(false); // Return to the default screen
  };
  
  const handleNoteCancel = () => {
    setNoteContent('');
    setIsAddingNote(false);
  };
  
  const isSubmitDisabled = assetId.length < 5 || uniqname.length < 3;

  const handleToggleButtonText = () => {
    setButtonText((prevText) => (prevText === "SAH" ? "TRL" : "SAH"));
  };

  return (
    <div className="p-4">
      <div className="relative">
        {isAddingNote && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-md flex flex-col gap-y-1">
            <div className="title-small text-neutral-9">Note</div>
            <textarea
              className="w-full h-44 rounded-md resize-none mb-6 bg-white text-neutral-9 pt-3 outline-none"
              placeholder="Enter your note..."
              value={noteContent}
              onChange={handleNoteChange}
            ></textarea>
            <div className="flex justify-end gap-x-2 mt-2">
              <button
                className="label-large w-full border-none bg-neutral-3 text-black rounded-md h-10 max-w-md"
                onClick={handleNoteCancel}
              >
                Discard
              </button>
              <button
                className="label-large w-full border-none bg-blue-9 text-white rounded-md h-10 max-w-md"
                onClick={handleNoteSave}
              >
                Save
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <div className="flex flex-col gap-y-1 w-6/12">
              <label
                htmlFor="check-out-asset-id"
                className="title-small text-neutral-9 text-center"
              >
                Asset ID #
              </label>
              <div className="flex max-w-md h-40 mr-4">
                <div className="flex-1 text-right flex justify-center items-center">
                  <button className="rounded-md p-2 headline-large w-20 h-fit text-neutral-8 hover:shadow-light" onClick={handleToggleButtonText}>{buttonText}</button>
                </div>
                <input
                  className={`flex-1 sm:flex-2 w-full headline-large rounded-md box-border outline-none text-left h-40 border-none max-w-md bg-white text-neutral-9 ${
                    isInputAssetIdFocused
                      ? 'focus:bg-white'
                      : ' focus:placeholder-transparent'
                  }`}
                  placeholder={isInputAssetIdFocused ? '' : '00000'}
                  name="check-out-asset-id"
                  type="text"
                  pattern="\d*"
                  value={assetId}
                  onChange={handleAssetIDChange}
                  onFocus={handleInputAssetIdFocus}
                  onBlur={handleInputAssetIdBlur}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 w-6/12">
              <label
                htmlFor="check-out-uniqname"
                className="title-small text-neutral-9 text-center"
              >
                Uniqname
              </label>
              <input
                className={`headline-large text-center box-border outline-none h-40 border-l border-neutral-3 indent-3 max-w-md bg-white text-neutral-9 ${
                  isInputUniqnameFocused
                    ? 'focus:bg-white'
                    : ' focus:placeholder-transparent'
                }`}
                placeholder={isInputUniqnameFocused ? '' : 'uniqname'}
                name="check-out-uniqname"
                type="text"
                pattern="\d*"
                value={uniqname}
                onChange={handleUniqnameChange}
                onFocus={handleInputUniqnameFocus}
                onBlur={handleInputUniqnameBlur}
              />
            </div>
          </div>
          <button
            className={`mb-2 mt-2 h-7 ${
              noteContent
                ? 'text-neutral-9 bg-neutral-2 label-large rounded-md text-left pl-3 font-normal'
                : ' text-blue-9 label-large'
            }`}
            onClick={handleAddNoteClick}
          >
            {noteContent ? `${noteContent.slice(0, 40)}${noteContent.length > 40 ? '...' : ''}` : 'Add Note +'}
          </button>
          <button
            className={`label-large w-full border-none rounded-md h-10 ${
              isSubmitDisabled ? 'bg-neutral-5 cursor-not-allowed' : 'bg-blue-9 text-white'
            }`}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutTab;
