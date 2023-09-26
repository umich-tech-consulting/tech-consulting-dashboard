
const HideNav = ({navHidden, setNavHidden}) => {

   const toggleNavHidden = () => {
    const newNavHidden = !navHidden;
    setNavHidden(newNavHidden);
    console.log(navHidden)
   }
    return (
      <>
        <div className={`absolute ${navHidden ? "left-0 rotate-180" : "left-[194px]"} bottom-0 mb-2 z-50`}>
            <button className={`${navHidden ? "rounded-l-full" : "rounded-full"} p-1  bg-white border hover:bg-neutral-2 border-neutral-3`} onClick={toggleNavHidden}>
                <svg className="w-5 h-5 stroke-neutral-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
      </>
    )
}
export default HideNav