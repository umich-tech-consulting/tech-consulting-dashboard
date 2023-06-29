import { Link, useLocation } from "react-router-dom";

const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="box-border pt-5 pl-2 pr-2 h-screen border-r bg-base-light border-neutral-3 w-[230px]">
      <Link to='/'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.00063 12.4991L19.9229 2.81215L35.0032 12.5014L35.0032 27.5014L19.9229 35.8347L5.00242 27.5022L5.00063 12.4991Z" fill="#EEEEEE"/>
          <line x1="19.9999" y1="34.0259" x2="19.9999" y2="24.3076" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line x1="32.0955" y1="14.0481" x2="23.7622" y2="19.0481" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line y1="-0.833333" x2="9.71825" y2="-0.833333" transform="matrix(0.857493 0.514496 0.514496 -0.857493 8.33325 13.3335)" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line y1="-0.833333" x2="9.71825" y2="-0.833333" transform="matrix(-0.857493 -0.514496 -0.514496 0.857493 31.6667 11.6665)" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line x1="22.9045" y1="34.6189" x2="31.2378" y2="29.6189" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line y1="-0.833333" x2="9.71825" y2="-0.833333" transform="matrix(-0.857493 -0.514496 -0.514496 0.857493 16.6667 35.333)" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line x1="7.90451" y1="10.9519" x2="16.2378" y2="5.95193" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line y1="-0.833333" x2="9.71825" y2="-0.833333" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 4.16675 24.7183)" stroke="#FFCB05" strokeWidth="1.66667"/>
          <line y1="-0.833333" x2="9.71825" y2="-0.833333" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 34.1667 24.7183)" stroke="#FFCB05" strokeWidth="1.66667"/>
          <path d="M35 12.5L31.25 10.3117M35 12.5V16.25M35 12.5L31.25 14.6883M5 12.5L8.75 10.3117M5 12.5L8.75 14.6883M5 12.5V16.25M20 21.25L23.75 19.0617M20 21.25L16.25 19.0617M20 21.25V25M20 36.25L23.75 34.0617M20 36.25V32.5M20 36.25L16.25 34.0617M16.25 5.93667L20 3.75L23.75 5.93833M35 23.75V27.5L31.25 29.6883M8.75 29.6883L5 27.5V23.75" stroke="#00274C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <div className="mt-6 w-50">
        <Link
          to="/"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/" ? (
            <svg width="20" height="20" viewBox="0 0 20 20" className="fill-neutral-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5584 3.20009C9.67559 3.08305 9.83444 3.01731 10.0001 3.01731C10.1657 3.01731 10.3245 3.08305 10.4417 3.20009L17.6834 10.4418C17.7406 10.5032 17.8096 10.5524 17.8863 10.5866C17.9629 10.6207 18.0457 10.6391 18.1296 10.6406C18.2136 10.6421 18.2969 10.6266 18.3747 10.5952C18.4526 10.5638 18.5232 10.517 18.5826 10.4576C18.6419 10.3983 18.6887 10.3276 18.7202 10.2498C18.7516 10.1719 18.767 10.0886 18.7656 10.0047C18.7641 9.92074 18.7457 9.83798 18.7116 9.76131C18.6774 9.68465 18.6281 9.61565 18.5667 9.55843L11.3259 2.31676C11.1518 2.14265 10.9451 2.00454 10.7176 1.91031C10.4901 1.81608 10.2463 1.76758 10.0001 1.76758C9.75384 1.76758 9.51002 1.81608 9.28253 1.91031C9.05504 2.00454 8.84834 2.14265 8.67423 2.31676L1.43257 9.55843C1.31877 9.67636 1.25585 9.83426 1.25735 9.99814C1.25885 10.162 1.32466 10.3187 1.44059 10.4346C1.55653 10.5504 1.71332 10.616 1.87719 10.6174C2.04106 10.6187 2.19891 10.5557 2.31673 10.4418L9.5584 3.20009Z"/>
              <path d="M10 4.52657L16.7992 11.3257C16.8242 11.3507 16.8492 11.3741 16.875 11.3974V16.5624C16.875 17.4249 16.175 18.1249 15.3125 18.1249H12.5C12.3342 18.1249 12.1753 18.0591 12.0581 17.9418C11.9408 17.8246 11.875 17.6657 11.875 17.4999V13.7499C11.875 13.5841 11.8092 13.4252 11.6919 13.308C11.5747 13.1908 11.4158 13.1249 11.25 13.1249H8.75C8.58424 13.1249 8.42527 13.1908 8.30806 13.308C8.19085 13.4252 8.125 13.5841 8.125 13.7499V17.4999C8.125 17.6657 8.05915 17.8246 7.94194 17.9418C7.82473 18.0591 7.66576 18.1249 7.5 18.1249H4.6875C4.2731 18.1249 3.87567 17.9603 3.58265 17.6673C3.28962 17.3742 3.125 16.9768 3.125 16.5624V11.3974C3.15093 11.3742 3.17621 11.3503 3.20083 11.3257L10 4.5249V4.52657Z"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 10.0001L9.33667 2.53756C9.70333 2.17173 10.2967 2.17173 10.6625 2.53756L18.125 10.0001M3.75 8.12506V16.5626C3.75 17.0801 4.17 17.5001 4.6875 17.5001H8.125V13.4376C8.125 12.9201 8.545 12.5001 9.0625 12.5001H10.9375C11.455 12.5001 11.875 12.9201 11.875 13.4376V17.5001H15.3125C15.83 17.5001 16.25 17.0801 16.25 16.5626V8.12506M6.875 17.5001H13.75" className="stroke-neutral-9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Home
          </div>
        </Link>
        <Link
          to="/announcements"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/announcements"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/announcements" ? (
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0675 3.62164C11.7802 4.53686 9.33857 5.00476 6.87498 4.99997H6.24998C5.15226 4.99838 4.09405 5.40951 3.28533 6.15178C2.47661 6.89405 1.97647 7.91321 1.88416 9.00704C1.79184 10.1009 2.1141 11.1894 2.78698 12.0567C3.45986 12.9241 4.43419 13.5067 5.51665 13.6891C5.7925 14.8181 6.17707 15.9177 6.66498 16.9725C7.05165 17.8091 8.05998 18.0725 8.81665 17.6358L9.36415 17.32C10.0975 16.8966 10.335 15.9933 10.0075 15.2633C9.81063 14.826 9.63597 14.379 9.48415 13.9241C11.0825 14.1391 12.6175 14.5491 14.0675 15.1291C14.6871 13.274 15.002 11.3308 15 9.37497C15 7.36414 14.6725 5.42914 14.0675 3.62164ZM15.2166 3.11664C15.903 5.13171 16.2521 7.24622 16.25 9.37497C16.2521 11.5037 15.903 13.6182 15.2166 15.6333C15.1708 15.7675 15.1241 15.9016 15.075 16.035C15.018 16.1907 15.0251 16.3627 15.0949 16.5131C15.1647 16.6635 15.2914 16.78 15.4471 16.8371C15.6028 16.8941 15.7747 16.8869 15.9252 16.8171C16.0756 16.7473 16.1921 16.6207 16.2491 16.465C16.881 14.7399 17.2776 12.9376 17.4283 11.1066C17.876 10.6414 18.1257 10.0206 18.125 9.37497C18.125 8.7033 17.8591 8.09164 17.4283 7.6433C17.2766 5.8125 16.88 4.01032 16.2491 2.28497C16.2209 2.20787 16.1778 2.13709 16.1222 2.07667C16.0666 2.01624 15.9996 1.96736 15.9252 1.93281C15.7747 1.86303 15.6028 1.85586 15.4471 1.91289C15.2914 1.96991 15.1647 2.08645 15.0949 2.23687C15.0251 2.38729 15.018 2.55927 15.075 2.71497C15.1241 2.8483 15.1716 2.98164 15.2166 3.11664Z" className="fill-neutral-1"/>
          </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.61667 13.2C8.04333 13.15 7.46167 13.125 6.875 13.125H6.25C5.25544 13.125 4.30161 12.7299 3.59835 12.0267C2.89509 11.3234 2.5 10.3696 2.5 9.375C2.5 8.38044 2.89509 7.42661 3.59835 6.72335C4.30161 6.02009 5.25544 5.625 6.25 5.625H6.875C7.46167 5.625 8.04333 5.6 8.61667 5.55M8.61667 13.2C8.8275 14.0017 9.10333 14.7767 9.4375 15.5192C9.64333 15.9775 9.4875 16.5275 9.05167 16.7783L8.50417 17.095C8.045 17.36 7.45417 17.1925 7.23167 16.7108C6.70358 15.5684 6.30121 14.3719 6.03167 13.1425M8.61667 13.2C8.28915 11.9514 8.1239 10.6658 8.125 9.375C8.125 8.05333 8.29583 6.77167 8.61667 5.55M8.61667 13.2C11.1846 13.4201 13.6852 14.1376 15.9792 15.3125M8.61667 5.55C11.1846 5.32993 13.6852 4.61244 15.9792 3.4375M15.9792 15.3125C15.8808 15.6292 15.775 15.9408 15.6625 16.25M15.9792 15.3125C16.4325 13.8513 16.716 12.3427 16.8242 10.8167M15.9792 3.4375C15.8814 3.12241 15.7759 2.80981 15.6625 2.5M15.9792 3.4375C16.4325 4.8987 16.716 6.40725 16.8242 7.93333M16.8242 7.93333C17.2367 8.2775 17.5 8.79583 17.5 9.375C17.5 9.95417 17.2367 10.4725 16.8242 10.8167M16.8242 7.93333C16.8925 8.89323 16.8925 9.85677 16.8242 10.8167" className="stroke-neutral-9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/announcements"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Announcements
          </div>
        </Link>
        <Link
          to="/management"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/management"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/management" ? (
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.875 4.375C1.875 3.71196 2.13839 3.07607 2.60723 2.60723C3.07607 2.13839 3.71196 1.875 4.375 1.875H15.625C16.288 1.875 16.9239 2.13839 17.3928 2.60723C17.8616 3.07607 18.125 3.71196 18.125 4.375V12.5C18.125 13.163 17.8616 13.7989 17.3928 14.2678C16.9239 14.7366 16.288 15 15.625 15H13.125V15.2142C13.125 15.7117 13.3225 16.1892 13.6742 16.54L14.1917 17.0583C14.279 17.1457 14.3384 17.2571 14.3625 17.3782C14.3865 17.4994 14.3742 17.625 14.3269 17.7391C14.2796 17.8532 14.1996 17.9508 14.0969 18.0195C13.9943 18.0882 13.8735 18.1249 13.75 18.125H6.25C6.12647 18.1249 6.00574 18.0882 5.90306 18.0195C5.80038 17.9508 5.72035 17.8532 5.67309 17.7391C5.62583 17.625 5.61346 17.4994 5.63753 17.3782C5.6616 17.2571 5.72104 17.1457 5.80833 17.0583L6.32583 16.54C6.67726 16.1886 6.87478 15.712 6.875 15.215V15H4.375C3.71196 15 3.07607 14.7366 2.60723 14.2678C2.13839 13.7989 1.875 13.163 1.875 12.5V4.375ZM3.125 4.375V10.625C3.125 10.9565 3.2567 11.2745 3.49112 11.5089C3.72554 11.7433 4.04348 11.875 4.375 11.875H15.625C15.9565 11.875 16.2745 11.7433 16.5089 11.5089C16.7433 11.2745 16.875 10.9565 16.875 10.625V4.375C16.875 4.04348 16.7433 3.72554 16.5089 3.49112C16.2745 3.2567 15.9565 3.125 15.625 3.125H4.375C4.04348 3.125 3.72554 3.2567 3.49112 3.49112C3.2567 3.72554 3.125 4.04348 3.125 4.375Z" className="fill-neutral-1"/>
          </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 14.375V15.2142C7.50004 15.5426 7.43537 15.8678 7.30968 16.1712C7.184 16.4746 6.99976 16.7503 6.7675 16.9825L6.25 17.5H13.75L13.2325 16.9825C13.0002 16.7503 12.816 16.4746 12.6903 16.1712C12.5646 15.8678 12.5 15.5426 12.5 15.2142V14.375M17.5 4.375V12.5C17.5 12.9973 17.3025 13.4742 16.9508 13.8258C16.5992 14.1775 16.1223 14.375 15.625 14.375H4.375C3.87772 14.375 3.40081 14.1775 3.04917 13.8258C2.69754 13.4742 2.5 12.9973 2.5 12.5V4.375M17.5 4.375C17.5 3.87772 17.3025 3.40081 16.9508 3.04917C16.5992 2.69754 16.1223 2.5 15.625 2.5H4.375C3.87772 2.5 3.40081 2.69754 3.04917 3.04917C2.69754 3.40081 2.5 3.87772 2.5 4.375M17.5 4.375V10C17.5 10.4973 17.3025 10.9742 16.9508 11.3258C16.5992 11.6775 16.1223 11.875 15.625 11.875H4.375C3.87772 11.875 3.40081 11.6775 3.04917 11.3258C2.69754 10.9742 2.5 10.4973 2.5 10V4.375" className="stroke-neutral-9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/management"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Asset Management
          </div>
        </Link>
        <Link
          to="/resources"
          className={`pl-2 h-8 rounded-full flex content-center items-center gap-x-4 ${
            location.pathname === "/resources"
              ? "bg-blue-9"
              : "bg-base-light"
          }`}
        >
          {location.pathname === "/resources" ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.375 3.77751C8.06925 2.94115 6.55063 2.49771 5 2.50001C4.07749 2.49907 3.16158 2.65548 2.29167 2.96251C2.16983 3.00559 2.06433 3.08537 1.98972 3.19088C1.9151 3.2964 1.87502 3.42244 1.875 3.55168V15.4267C1.87501 15.5267 1.89901 15.6252 1.94498 15.714C1.99096 15.8027 2.05755 15.8792 2.13919 15.9369C2.22083 15.9946 2.31512 16.0319 2.41416 16.0457C2.51319 16.0594 2.61407 16.0492 2.70833 16.0158C3.44444 15.7562 4.21945 15.624 5 15.625C6.6625 15.625 8.18583 16.2142 9.375 17.1967V3.77751ZM10.625 17.1967C11.8553 16.1785 13.403 15.6225 15 15.625C15.805 15.625 16.575 15.7633 17.2917 16.0167C17.386 16.05 17.487 16.0602 17.586 16.0465C17.6851 16.0327 17.7795 15.9953 17.8611 15.9375C17.9428 15.8797 18.0094 15.8031 18.0553 15.7142C18.1012 15.6253 18.1251 15.5267 18.125 15.4267V3.55168C18.125 3.42244 18.0849 3.2964 18.0103 3.19088C17.9357 3.08537 17.8302 3.00559 17.7083 2.96251C16.8384 2.65548 15.9225 2.49907 15 2.50001C13.4494 2.49771 11.9307 2.94115 10.625 3.77751V17.1967Z" className="fill-neutral-1"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.03501C8.62634 3.80281 6.84533 3.12246 5 3.12501C4.12333 3.12501 3.28167 3.27501 2.5 3.55167V15.4267C3.30302 15.1434 4.14847 14.9991 5 15C6.92083 15 8.67333 15.7225 10 16.91M10 5.03501C11.3736 3.80274 13.1547 3.12238 15 3.12501C15.8767 3.12501 16.7183 3.27501 17.5 3.55167V15.4267C16.697 15.1434 15.8515 14.9991 15 15C13.1547 14.9975 11.3737 15.6778 10 16.91M10 5.03501V16.91" className="stroke-neutral-9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
          <div className={`body-medium leading-none ${
            location.pathname === "/resources"
              ? "text-neutral-1"
              : "text-neutral-9"
          }`}>
            Resources
          </div>
        </Link>
      </div>
    </div>
  );
};
export default LeftNav;
