
const HideNav = ({navHidden, setNavHidden}) => {

   const toggleNavHidden = () => {
    const newNavHidden = !navHidden;
    setNavHidden(newNavHidden);
   }
    return (
      <>
        <div className={`fixed ${navHidden ? "left-0 rotate-180" : "left-[194px]"} bottom-0 mb-2 z-50 hidden md:block`} title="Show/Hide Nav">
            <button className={`${navHidden ? "rounded-l-full opacity-80 border-r-0 hover:pr-3": "rounded-full"} p-1 bg-white dark:bg-neutral-9 border hover:opacity-100 hover:bg-neutral-2  dark:hover:bg-neutral-8 dark:hover:opacity-100 border-neutral-3 hover:border-neutral-4 dark:border-neutral-8 dark:hover:border-neutral-7`} onClick={toggleNavHidden}>
                <svg className="w-5 h-5 stroke-neutral-7 dark:stroke-neutral-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-labelledby="show_hide_nav">
                    <title id="show_hide_nav">Show / Hide Nav Icon</title>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
      </>
    )
}
export default HideNav