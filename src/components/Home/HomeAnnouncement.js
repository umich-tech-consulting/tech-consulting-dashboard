import { BoxLogo } from "../../icons/home/HomeSvgs"
const HomeAnnouncement = () => {

     return (
       <>
          <div className="w-full bg-white dark:bg-neutral-9 p-6 rounded-xl flex flex-col gap-7 border border-neutral-2 dark:border-neutral-8">
              <BoxLogo />
              <div className="flex flex-col gap-[18px]">
                <div className="title-large text-neutral-9 dark:text-neutral-2">Tech Consulting Dashboard (TCD)</div>
                <div className="text-neutral-8 dark:text-neutral-3 body-medium flex flex-col gap-3">
                    <div>The TCD is a service and information aggregator for the ITS Tech Consulting Department.</div>
                    <div>If you have questions about or interest in working on the TCD please reach out to Chris McDonald (cfmcdona) or Ryan Gillis (rgillis).</div>
                    <div>We would love to hear your feedback about the dashboard. If you have any questions or comments, please feel free to send it to us and we will do our best to incorporate it!</div>
                </div>
              </div>
              <a href="https://forms.gle/kb1CQuKLGzneFGRj8" target="blank" rel="noopener noreferrer" className="h-[32px] px-6 w-fit label-large text-center border-none rounded-full flex justify-center items-center bg-neutral-2 dark:bg-neutral-8 text-neutral-9 dark:text-neutral-1 hover:bg-neutral-3 dark:hover:bg-neutral-7 transition ease-in duration-[450ms]" title="Feedback Form">Leave Feedback</a>
            </div>
       </>
     )
 }
 export default HomeAnnouncement