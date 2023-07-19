import { Helmet } from "react-helmet";

const Announcements = () => {

    return (
        <>
            <Helmet>
                <title>Announcements</title>
            </Helmet>
            <div className="w-full flex flex-col h-screen p-6">
                <div className="flex justify-between w-full">
                    <div className="mb-6 headline-large">Announcements - WIP/Placeholder</div>
                    <a className="text-neutral-1 max-w-5xl p-3 rounded-lg h-fit bg-blue-9 hover:bg-blue-8" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/17ceEJafaJGeUuE6_80vNzljyxHxb85WeLege8BwM-AQ/edit#">Announcement History</a>
                </div>
                <div className="w-full h-full flex flex-col items-center bg-white rounded-2xl shadow-light overflow-y-auto">
                    <div className="max-w-5xl w-full p-8">
                        <div className="flex flex-col gap-10 body-large w-auto text-neutral-9">
                            <div className="flex flex-col gap-y-5">
                                <div className="headline-small text-blue-9 font-bold">End of Sumester Updates</div>
                                <div className="md:hidden title-small text-neutral-7 min-w-[160px] ">05.06.23</div>
                                <div className="text-neutral-9">Hello Tech Consultants! Happy Spring/Summer Semester. A few updates this week:</div>
                                <hr className="border-t-neutral-4" />
                            </div>
                            <div className="text-neutral-9">
                                <div><span className="font-bold">Please be sure to use the official templates when emailing customers out of our poster order system.</span> Templates can be found on the embedded Google Doc on <span className="break-all text-blue-9"><a href="https://sites.google.com/umich.edu/techconsultants/services/poster-printing">this page.</a></span></div>
                                <ul className="list-disc pl-10 mt-2">
                                    <li>
                                        If you have any suggestions for additional templates, please feel free to let us know!
                                    </li>
                                </ul>
                            </div>
                            <div className="text-neutral-9">
                                <div>Since we have plenty of new staff (welcome to the team!) - <span className="font-bold">he week of 6/4-6/10 is the template we will use for the Spring/Summer scheduling template at this point.</span> Please make sure that when you're at the desk, the front door is visible from your seat. </div>
                                <ul className="list-disc pl-10 mt-2">
                                    <li>
                                    Any shifts people pick up for that week will become recurring shifts through the rest of the Spring/Summer semester.
                                    </li>
                                    <li>
                                    If you have scheduling changes for the Summer half of Spring/Summer, go ahead and pick up any shifts you want now and we can readjust later
                                    </li>
                                    <li>
                                    Any shifts you add prior to 6/4 that aren't already a regular part of your schedule will just be for that week only, but please pick up any remaining open shifts we have that work well for you!
                                    </li>
                                    <li>
                                    Shifts are expected to be picked up quickly, so grab them while you can!
                                    </li>
                                </ul>
                            </div>
                            <div className="text-neutral-9">
                                <div><span className="font-bold">Both Tech Shop locations have been dealing with theft issues as of late. Please make sure that when you're at the desk, the frot door is visible from your seat.</span> Please make sure that when you're at the desk, the front door is visible from your seat. </div>
                                <ul className="list-disc pl-10 mt-2">
                                    <li>
                                    If Tech Shop sales staff aren't available to greet customers, please take the initiative to greet customers and redirect them as needed.
                                    </li>
                                    <li>
                                    Please use the desk closer to the door when at the Union location
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  };

  export default Announcements;