import { Link } from "react-router-dom"
import { AssetManagementLogo, ChevronRight } from "../../icons/home/HomeSvgs"
import { LaptopCheckOut, LaptopReturn } from "../../icons/asset-management/AssetManagementLandingSvgs"
const HomeFastActions = () => {

     return (
       <>
          <div className="w-full bg-white dark:bg-neutral-9 rounded-xl flex flex-col gap-[18px] relative border border-neutral-2 dark:border-neutral-8">
                <div className="absolute bg-neutral-3 h-full w-full bg-opacity-60 rounded-md">
                    <div className="title-medium flex w-full h-full items-center justify-center">
                        <div className="rotate-12 bg-black text-yellow-7">WIP</div>
                    </div>
                </div>
                <div className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-[6px] ">
                        <div className="title-large text-neutral-9 dark:text-neutral-2">Fast Actions</div>
                        <div className="title-small text-neutral-8 dark:text-neutral-3">Sites at Home (SAH) Loaner laptop management actions</div>
                    </div>
                    <div className="flex gap-6 title-medium">
                        <Link className="am-landing-container-button" to="/asset-management/checkout">
                            <LaptopCheckOut />
                            <div>Checkout</div>
                        </Link>
                        <Link className="am-landing-container-button" to="/asset-management/checkout">
                            <LaptopReturn />
                            <div>Return</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <hr className="border-[1px] border-base-light dark:border-neutral-10"></hr>
                    <Link to="/asset-management" className="flex w-full justify-between p-6 hover:bg-blue-0 dark:hover:bg-neutral-8 rounded-b-xl transition ease-in duration-[450ms]">
                        <div className="flex items-center gap-4">
                            <AssetManagementLogo />
                            <div className="title-medium text-neutral-8 dark:text-neutral-3">Asset Management</div>
                        </div>
                        <ChevronRight />
                    </Link>
                </div>
            </div>
       </>
     )
 }
 export default HomeFastActions