import { useState, useEffect, useRef } from "react";
import { LaptopDevice, SerialNumber } from "../../icons/warranty/WarrantySvgs";
const WarrantySearchbox = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [deviceBrand, setDeviceBrand] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const serialNumberRef = useRef(null);
  const deviceBrandRef = useRef(null);

  const handleSerialChange = (e) => {
    setSerialNumber(e.target.value);
  };
  const handleDeviceChange = (e) => {
    setDeviceBrand(e.target.value);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleSelect = (value) => {
    setDeviceBrand(value);
    setDropdownVisible(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deviceBrandRef.current && !deviceBrandRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside); // Added event listener

    return () => {
      window.removeEventListener("mousedown", handleClickOutside); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="max-w-3xl w-full rounded-[10px] border border-neutral-2 bg-white p-9 flex gap-6">
        <div className="relative w-full rounded-md flex gap-3 items-center px-3 border border-neutral-5 hover:border-neutral-6">
          <div onClick={toggleDropdown}>
            <LaptopDevice />
          </div>
          <div className="relative">
            <input
              type="text"
              id="device_type"
              className="block title-medium text-neutral-9 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-9 py-2.5 cursor-pointer peer"
              value={deviceBrand}
              onChange={handleDeviceChange}
              onClick={toggleDropdown}
              readOnly
            />
          </div>
          <label
            htmlFor="device_type"
            className={`absolute left-11 cursor-pointer title-medium text-neutral-7 duration-300 transform ${
              deviceBrand
                ? "-translate-y-4 scale-75 top-1 -translate-x-6 text-neutral-9"
                : "top-[20%] scale-100"
            } z-10 origin-[0] bg-white peer-focus:mx-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:-translate-x-8 peer- peer-focus:text-neutral-9 peer-focus:font-medium start-1`}
          >
            Device Type
          </label>
          {dropdownVisible && (
            <div ref={deviceBrandRef} className="absolute z-10 top-[52px] left-0 w-full rounded-md bg-white shadow-light cursor-pointer">
              <ul className="py-1">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-neutral-2 body-medium text-neutral-8"
                  onClick={() => handleSelect("")}
                >
                  Select an option
                </li>
                <li
                  className="cursor-pointer hover:bg-neutral-2 title-medium text-neutral-9 p-3"
                  onClick={() => handleSelect("Apple")}
                >
                  <div className="flex flex-col gap-1">
                    <div>Apple</div>
                    <div className="body-small text-neutral-7">Pivotal, Dell EMC, SecureWorks, Alienware, Somethingelse</div>
                  </div>
                </li>
                <li
                  className="cursor-pointer hover:bg-neutral-2 title-medium text-neutral-9 p-3"
                  onClick={() => handleSelect("Dell")}
                >
                  <div className="flex flex-col gap-1">
                    <div>Dell</div>
                    <div className="body-small text-neutral-7">Pivotal, Dell EMC, SecureWorks, Alienware</div>
                  </div>
                </li>
                <li
                  className="cursor-pointer hover:bg-neutral-2 title-medium text-neutral-9 p-3"
                  onClick={() => handleSelect("Lenovo")}
                >
                  <div className="flex flex-col gap-1">
                    <div>Lenovo</div>
                    <div className="body-small text-neutral-7">Pivotal, Dell EMC, SecureWorks, Alienware</div>
                  </div>
                </li>
                <li
                  className="cursor-pointer hover:bg-neutral-2 title-medium text-neutral-9 p-3"
                  onClick={() => handleSelect("Surface")}
                >
                  <div className="flex flex-col gap-1">
                    <div>Surface</div>
                    <div className="body-small text-neutral-7">Pivotal, Dell EMC, SecureWorks, Alienware</div>
                  </div>
                </li>
              </ul>
            </div>
          )}
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
        <div
          className="relative w-full rounded-md flex gap-3 items-center px-3 border border-neutral-5 hover:border-neutral-6"
          onMouseDown={(e) => handleMouseDown(e, serialNumberRef)}
        >
          <SerialNumber />
          <input
            type="text"
            id="serial_number"
            className="block title-medium text-neutral-9 w-full text-sm bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-9 py-2.5 peer"
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
