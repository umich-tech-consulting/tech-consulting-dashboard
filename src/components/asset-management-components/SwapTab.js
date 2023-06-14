import { useState } from 'react';

const SwapTab = () => {
  const [currentAssetId, setCurrentAssetId] = useState('');
  const [newAssetId, setNewAssetId] = useState('');
  const [isInputCurrentIdFocused, setIsInputCurrentIdFocused] = useState(false);
  const [isInputNewIdFocused, setIsInputNewIdFocused] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [buttonText, setButtonText] = useState("SAH");

  const handleCurrentAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
    const truncatedInput = numberInput.slice(0, 5);
    setCurrentAssetId(truncatedInput);
  };

  const handleNewAssetIdChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, '');
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
  
  const isSubmitDisabled = currentAssetId.length < 5 || newAssetId.length < 5;

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
                htmlFor="current-asset-id"
                className="title-small text-center text-neutral-9"
              >
                Current Asset ID #
              </label>
              <div className="flex max-w-md h-40 flex-row mr-4">
                <div className="flex-1 text-right flex justify-center items-center">
                  <button className="rounded-md p-2 headline-large w-20 h-fit text-neutral-8 hover:shadow-light" onClick={handleToggleButtonText}>{buttonText}</button>
                </div>
                <input
                  className={`flex-1 sm:flex-2 w-full text-left headline-large rounded-md box-border outline-none h-40 border-none max-w-md bg-white text-neutral-9 ${
                    isInputCurrentIdFocused
                      ? 'focus:bg-white'
                      : ' focus:placeholder-transparent'
                  }`}
                  placeholder={isInputCurrentIdFocused ? '' : '00000'}
                  name="current-asset-id"
                  type="text"
                  pattern="\d*"
                  value={currentAssetId}
                  onChange={handleCurrentAssetIdChange}
                  onFocus={handleInputCurrentIdFocus}
                  onBlur={handleInputCurrentIdBlur}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 w-6/12">
              <label
                htmlFor="new-asset-id"
                className="title-small text-center text-neutral-9"
              >
                New Asset ID #
              </label>
              <input
                className={`text-center headline-large box-border outline-none h-40 border-l border-neutral-3 indent-3 max-w-md bg-white text-neutral-9 ${
                  isInputNewIdFocused
                    ? 'focus:bg-white'
                    : ' focus:placeholder-transparent'
                }`}
                placeholder={isInputNewIdFocused ? '' : '00000'}
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

export default SwapTab;
