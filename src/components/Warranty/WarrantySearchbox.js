import { useState, useRef } from "react";
import { LaptopDevice, SerialNumber } from "../../icons/warranty/WarrantySvgs";
const WarrantySearchbox = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const deviceTypeRef = useRef(null);
  const serialNumberRef = useRef(null);

  const handleSerialChange = (e) => {
    setSerialNumber(e.target.value);
  };
  const handleDeviceChange = (e) => {
    setDeviceType(e.target.value);
  };
  const focusInput = (inputRef) => {
    if (document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleMouseDown = (e, inputRef) => {
    e.preventDefault(); // Prevents loss of focus

    // Manually focus the input field
    focusInput(inputRef);
  };

  return (
    <>
      <div className="max-w-3xl w-full rounded-[10px] border border-neutral-2 bg-white p-9 flex gap-6">
        <div className="relative w-full rounded-md flex gap-3 items-center px-3 py-2.5 border border-neutral-5 hover:border-neutral-6" onMouseDown={(e) => handleMouseDown(e, deviceTypeRef)}>
          <LaptopDevice />
          <input
            type="text"
            id="device_type"
            className="block title-medium text-neutral-9 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-9 peer"
            placeholder=""
            value={deviceType}
            ref={deviceTypeRef}
            onChange={handleDeviceChange}
          />
          <label
            htmlFor="device_type"
            className={`absolute left-11 cursor-text title-medium text-neutral-7 duration-300 transform ${
              deviceType
                ? "-translate-y-4 scale-75 top-1 -translate-x-6 text-neutral-9"
                : "top-[50%] scale-100"
            } z-10 origin-[0] bg-white peer-focus:mx-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:-translate-x-8 peer- peer-focus:text-neutral-9 peer-focus:font-medium start-1`}
          >
            Device Type
          </label>
        </div>
        {/* <div className="relative w-full rounded-md">
          <input
            type="text"
            id="serial_number"
            className="block title-medium text-neutral-9 px-3 py-2.5 w-full text-sm bg-transparent rounded-md border border-neutral-5 hover:border-neutral-6 appearance-none focus:outline-none focus:ring-0 focus:border-blue-9 peer"
            placeholder=""
            value={serialNumber}
            onChange={handleSerialChange}
          />
          <label
            htmlFor="serial_number"
            className={`absolute cursor-text body-large text-neutral-7 duration-300 transform ${
              serialNumber
                ? "-translate-y-4 scale-75 top-1"
                : "top-[50%] scale-100"
            } z-10 origin-[0] bg-white mx-2 peer-focus:mx-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4  start-1`}
          >
            Serial Number
          </label>
        </div> */}
        <div className="relative w-full rounded-md flex gap-3 items-center px-3 py-2.5 border border-neutral-5 hover:border-neutral-6" onMouseDown={(e) => handleMouseDown(e, serialNumberRef)}>
          <SerialNumber />
          <input
            type="text"
            id="serial_number"
            className="block title-medium text-neutral-9 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-9 peer"
            placeholder=""
            value={serialNumber}
            ref={serialNumberRef}
            onChange={handleSerialChange}
          />
          <label
            htmlFor="serial_number"
            className={`absolute left-11 cursor-text title-medium text-neutral-7 duration-300 transform ${
              serialNumber
                ? "-translate-y-4 scale-75 top-1 -translate-x-6 text-neutral-9"
                : "top-[50%] scale-100"
            } z-10 origin-[0] bg-white peer-focus:mx-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:-translate-x-8 peer- peer-focus:text-neutral-9 peer-focus:font-medium start-1`}
          >
            Serial Number
          </label>
        </div>
        <div className="bg-blue-9 text-neutral-1 label-large flex items-center justify-center rounded-full w-full max-w-[120px] ">
          Search
        </div>
      </div>
    </>
  );
};

export default WarrantySearchbox;
