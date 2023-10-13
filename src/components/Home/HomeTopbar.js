import { UserIcon } from "../../icons/home/HomeSvgs"
const HomeTopbar = () => {

     return (
       <>
         <div className="w-full flex justify-between mt-5 text-neutral-9 dark:text-neutral-2">
            <div className="flex flex-col gap-[6px]">
                <div className="title-medium">Tech Consulting Dashboard</div>
                <div className="title-small text-neutral-7 dark:text-neutral-4">Version: Beta 2</div>
            </div>
            <div className="flex items-center gap-[14px]">
                <UserIcon />
                <div className="flex flex-col">
                    <div className="title-medium">Logged In</div>
                    <div className="body-medium text-neutral-7 dark:text-neutral-4">Coming Soon</div>
                </div>
            </div>
        </div>
       </>
     )
 }
 export default HomeTopbar