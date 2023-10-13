import { Link } from "react-router-dom"
import { AssetManagementLogo, ChevronRight } from "../../icons/home/HomeSvgs"
import { LaptopCheckOut, LaptopReturn } from "../../icons/asset-management/AssetManagementLandingSvgs"
const HomeFastActions = () => {

     return (
       <>
          <div className="w-full bg-white rounded-xl shadow-light dark:shadow-dark flex flex-col gap-[18px]">
                <div className="p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-[6px] ">
                        <div className="title-large text-neutral-9">Fast Actions</div>
                        <div className="title-small text-neutral-8">Sites at Home (SAH) Loaner laptop management actions</div>
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
                    <hr className="border-[1.4px] border-base-light"></hr>
                    <Link to="/asset-management" className="flex w-full justify-between p-6 hover:bg-blue-0 rounded-b-xl">
                        <div className="flex items-center gap-4">
                            <AssetManagementLogo />
                            <div className="title-medium text-neutral-8">Asset Management</div>
                        </div>
                        <ChevronRight />
                    </Link>
                </div>
            </div>
       </>
     )
 }
 export default HomeFastActions