import { Link, useLocation } from "react-router-dom";

const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="box-border p-5 h-screen border-r bg-white border-neutral-4 dark:bg-black dark:border-neutral-8 hidden sm:w-[96px] sm:block md:w-[96px] md:block lg:w-[96px] lg:block xl:w-[276px] xl:block">
      <svg
        width="40"
        height="39"
        viewBox="0 0 40 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-[#00274C] dark:fill-[#FFCB05]"
          d="M30.609 18.4752V18.4668C30.7798 18.288 30.9578 18.1325 31.1531 18.0271C32.3175 17.5808 34.3831 20.0735 38.857 18.5054C39.2135 18.38 39.5285 17.9708 39.5449 17.5922C39.6577 14.9704 38.8461 14.6853 38.2695 13.4472C37.1407 11.0186 35.5073 9.50272 34.3459 9.12764C31.7303 8.22295 32.2825 4.77575 31.1047 4.93873C30.4549 5.02799 29.8866 6.16938 29.4719 9.02096C27.9937 9.81992 27.3033 10.692 26.7341 11.7674C26.3444 12.4927 25.3936 13.2267 24.5978 13.422C20.093 14.5245 16.6806 17.652 14.117 22.3487C13.3442 24.1618 11.1753 30.006 13.3051 34.1663C13.3749 34.3038 13.3216 34.4714 13.1845 34.5414C13.1442 34.5628 13.1005 34.5725 13.0577 34.5725C12.957 34.5725 12.86 34.5171 12.81 34.421C10.2444 29.4079 13.4577 22.402 13.8374 21.609C14.7464 17.0036 19.4955 14.913 19.4955 9.3638C19.4955 3.70818 14.9302 0 9.92659 0C4.91429 0 1.15292 3.53645 1.15292 3.53645C1.15292 3.53645 3.73661 4.02566 3.73661 7.62775C3.73692 13.0722 0 14.083 0 22.9573C0 31.8322 7.051 38.3505 17.0108 38.3505H31.8686C31.8686 36.4761 31.0482 35.9629 28.8304 35.9225C31.5499 31.7342 31.234 28.6077 28.9061 26.198C27.9013 25.5365 23.4244 22.9499 19.2332 26.2553C19.112 26.3501 18.9378 26.3293 18.8435 26.208C18.7483 26.087 18.7697 25.9119 18.8903 25.817C23.5814 22.1195 28.7219 25.3997 29.3687 25.8404C34.6933 26.1517 38.0257 20.7445 39.2797 23.2628C39.4025 23.5088 39.7636 23.4736 39.8343 23.208C41.3341 17.5443 32.2005 24.1516 30.6098 18.4748L30.609 18.4752ZM35.2586 12.3453C35.7165 12.3453 36.0879 12.7179 36.0879 13.1779C36.0879 13.6375 35.7165 14.0107 35.2586 14.0107C34.8001 14.0107 34.4284 13.6382 34.4284 13.1779C34.4284 12.7179 34.8001 12.3453 35.2586 12.3453Z"
        />
      </svg>
      <div className="mt-24">
        <Link
          to="/"
          className={`p-4 rounded-xl flex content-center gap-x-4 ${
            location.pathname === "/"
              ? "bg-neutral-3 dark:bg-neutral-9"
              : "bg-white dark:bg-black"
          }`}
        >
          {location.pathname === "/" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-9 dark:fill-neutral-3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20V18.5H3.525V17.45C3.125 17.45 2.775 17.3 2.475 17C2.175 16.7 2.025 16.35 2.025 15.95V4.5C2.025 4.1 2.175 3.75 2.475 3.45C2.775 3.15 3.125 3 3.525 3H20.475C20.875 3 21.225 3.15 21.525 3.45C21.825 3.75 21.975 4.1 21.975 4.5V15.95C21.975 16.35 21.825 16.7 21.525 17C21.225 17.3 20.875 17.45 20.475 17.45V18.5H24V20H0Z"/>
            </svg>
          ) : (
            <svg className="fill-neutral-9 dark:fill-neutral-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20V18.5H3.525V17.45C3.125 17.45 2.775 17.3 2.475 17C2.175 16.7 2.025 16.35 2.025 15.95V4.5C2.025 4.1 2.175 3.75 2.475 3.45C2.775 3.15 3.125 3 3.525 3H20.475C20.875 3 21.225 3.15 21.525 3.45C21.825 3.75 21.975 4.1 21.975 4.5V15.95C21.975 16.35 21.825 16.7 21.525 17C21.225 17.3 20.875 17.45 20.475 17.45V18.5H24V20H0ZM3.525 15.95H20.475V4.5H3.525V15.95Z"/>
            </svg>
          )}
          <div className="title-medium text-neutral-9 dark:text-neutral-3 hidden xl:block">
            Asset Management
          </div>
        </Link>
        <Link
          to="/announcements"
          className={`p-4 rounded-xl flex gap-x-4 ${
            location.pathname === "/announcements"
              ? "bg-neutral-3 dark:bg-neutral-9"
              : "bg-white dark:bg-black"
          }`}
        >
          <svg
            className="fill-neutral-9 dark:fill-neutral-4"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
          >
            <path d="M730 606v-60h150v60H730Zm50 290-121-90 36-48 121 90-36 48Zm-82-503-36-48 118-89 36 48-118 89ZM210 856V696h-70q-24.75 0-42.375-17.625T80 636V516q0-24.75 17.625-42.375T140 456h180l200-120v480L320 696h-50v160h-60Zm90-280Zm260 134V442q27 24 43.5 58.5T620 576q0 41-16.5 75.5T560 710ZM140 516v120h196l124 74V442l-124 74H140Z" />
          </svg>
          <div className="title-medium text-neutral-9 dark:text-neutral-4 hidden xl:block">
            Announcements
          </div>
        </Link>
        <Link
          to="/resources"
          className={`p-4 rounded-xl flex gap-x-4 ${
            location.pathname === "/resources"
              ? "bg-neutral-3 dark:bg-neutral-9"
              : "bg-white dark:bg-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-neutral-9 dark:fill-neutral-4"
            height="24"
            viewBox="0 96 960 960"
            width="24"
          >
            <path d="M480 996q-78-69-170.5-106T120 853V424q94 0 186.5 43T480 587q81-77 173.5-120T840 424v429q-97 0-189.5 37T480 996Zm0-77q71-51 146.5-81.5T780 799V489q-68 11-143.5 54.5T480 664q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480 919Zm3-475q-65 0-109.5-44.5T329 290q0-65 44.5-109.5T483 136q65 0 109.5 44.5T637 290q0 65-44.5 109.5T483 444Zm.159-60Q522 384 549.5 356.341q27.5-27.66 27.5-66.5Q577 251 549.341 223.5q-27.66-27.5-66.5-27.5Q444 196 416.5 223.659q-27.5 27.66-27.5 66.5Q389 329 416.659 356.5q27.66 27.5 66.5 27.5ZM482 288Zm-2 416Z" />
          </svg>
          <div className="title-medium text-neutral-9 dark:text-neutral-4 hidden xl:block">
            Resources
          </div>
        </Link>
      </div>
    </div>
  );
};
export default LeftNav;