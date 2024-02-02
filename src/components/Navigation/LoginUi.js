import { useState } from "react";
import { ChevronDown, Signout } from "../../icons/nav/NavigationSvgs";

const LoginUi = () => {
  const [isLogoutVisible, setLogoutVisibility] = useState(false);

  const handleButtonClick = () => {
    setLogoutVisibility(!isLogoutVisible);
  };

  return (
    <>
      <button
        className="group flex gap-1.5 px-2 py-1.5 rounded-md text-center items-center text-neutral-8 dark:text-neutral-2 w-fit bg-base-light hover:bg-white dark:bg-neutral-10 dark:hover:bg-neutral-9 mb-2"
        onClick={handleButtonClick}
      >
        <div className="body-small h-6 w-6 bg-white dark:bg-neutral-9 rounded-full flex items-center justify-center group-hover:border group-hover:border-neutral-3 dark:group-hover:border-neutral-7">
          BG
        </div>
        <div className="label-large">Ben</div>
        <div className="hidden group-hover:block">
          <ChevronDown />
        </div>
      </button>
      {isLogoutVisible && (
        <div className="absolute label-large rounded-md bg-white dark:bg-neutral-9 px-3 py-2 w-[213px]  border-2 border-neutral-3">
            {/* <div className="flex gap-2">
                <Signout />
                <div>Sign out</div>
            </div> */}
            <div className="flex gap-2">
                <Signout />
                <div>Sign out</div>
            </div>
        </div>
      )}
    </>
  );
};

export default LoginUi;
