import React, { useState } from "react";

const CheckInTab = () => {
  const [assetId, setAssetId] = useState("");
  const [isInputAssetIdFocused, setIsInputAssetIdFocused] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  const handleAssetIDChange = (e) => {
    const input = e.target.value;
    const numberInput = input.replace(/\D/g, "");
    const truncatedInput = numberInput.slice(0, 5);
    setAssetId(truncatedInput);
  };

  const handleInputAssetIdFocus = () => {
    setIsInputAssetIdFocused(true);
  };

  const handleInputAssetIdBlur = () => {
    setIsInputAssetIdFocused(false);
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
    setNoteContent(""); // Clear the note content
    setIsAddingNote(false); // Return to the default screen
  };

  const isSubmitButtonDisabled = assetId.length < 5;

  return (
    <div className="p-4">
      <div className="relative">
        {isAddingNote && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-black rounded-md flex flex-col gap-y-1">
            <div className="title-small text-neutral-9 dark:text-neutral-1">
              Note
            </div>
            <textarea
              className="w-full h-44 rounded-md resize-none mb-6 bg-white dark:bg-black text-neutral-9 dark:text-neutral-1 pt-3 outline-none"
              placeholder="Enter your note..."
              value={noteContent}
              onChange={handleNoteChange}
            ></textarea>
            <div className="flex justify-end gap-x-2">
              <button
                className="label-large w-full border-none bg-neutral-3 text-black dark:bg-neutral-9 dark:text-neutral-1 rounded-md h-10 max-w-md"
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
          <label
            htmlFor="check-in-asset-id"
            className="title-small text-neutral-9 dark:text-neutral-2 text-center"
          >
            Asset ID #
          </label>
          <input
            className={`no-spinner headline-large rounded-md box-border outline-none text-center h-40 border-none indent-3 max-w-md bg-white text-neutral-9 dark:bg-black dark:text-neutral-1 ${
              isInputAssetIdFocused
                ? "focus:bg-white dark:focus:bg-black"
                : " focus:placeholder-transparent"
            }`}
            placeholder={isInputAssetIdFocused ? "" : "00000"}
            name="check-in-asset-id"
            type="text"
            pattern="\d*"
            value={assetId}
            onChange={handleAssetIDChange}
            onFocus={handleInputAssetIdFocus}
            onBlur={handleInputAssetIdBlur}
          />
          <button
            className={`mb-2 h-7 dark:text-blue-7 ${
              noteContent
                ? "text-neutral-9 dark:text-neutral-1 dark:bg-neutral-9 bg-neutral-2 label-large rounded-md text-left pl-3 font-normal"
                : " text-blue-9 label-large"
            }`}
            onClick={handleAddNoteClick}
          >
            {noteContent
              ? `${noteContent.slice(0, 40)}${
                  noteContent.length > 40 ? "..." : ""
                }`
              : "Add Note +"}
          </button>
          <button
            className={`label-large w-full border-none rounded-md h-10 max-w-md ${
              isSubmitButtonDisabled
                ? "bg-neutral-5 dark:bg-neutral-8 cursor-not-allowed"
                : "bg-blue-9 text-white"
            }`}
            disabled={isSubmitButtonDisabled}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckInTab;
