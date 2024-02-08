import { UserIcon } from "../../icons/home/HomeSvgs"
import { useAuth } from "react-oidc-context"
const HomeTopbar = () => {
    const auth = useAuth();
    if (auth.isAuthenticated) {

        return (
          <>
            <div className="w-full flex justify-between mt-5 text-neutral-9 dark:text-neutral-2">
               <div className="flex flex-col gap-[6px]">
                   <div className="title-medium">Tech Consulting Dashboard</div>
                   <div className="title-small text-neutral-7 dark:text-neutral-4">Version: Beta 3</div>
               </div>
               <div className="flex items-center gap-[14px]">
                   <UserIcon />
                   <div className="flex flex-col">
                       <div className="title-medium">Signed In</div>
    
                       <div className="body-medium text-neutral-7 dark:text-neutral-4">Is authenticated!</div>
                   </div>
               </div>
           </div>
          </>
        )
    }
    return <button className="bg-blue-10* w-fit text-white px-3 py-1 hover:bg-blue-9 body-medium mt-2 rounded-full" onClick={() => void auth.signinRedirect()}>Login</button>


 }
 export default HomeTopbar