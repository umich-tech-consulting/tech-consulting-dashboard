import { Helmet } from "react-helmet";
import HomeTopbar from "../components/Home/HomeTopbar";
import HomeAnnouncement from "../components/Home/HomeAnnouncement";
import HomeQuickLinks from "../components/Home/HomeQuickLinks";
import HomeFastActions from "../components/Home/HomeFastActions";
import HomePages from "../components/Home/HomePages";

const HomePrime = () => {
  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col h-screen p-6 fade-in">
        <div className="headline-small dark:text-neutral-1">Home</div>
        <HomeTopbar />
        {/* container for everything */}
        <div className="flex flex-col xl:flex-row gap-6 mt-6 pb-6">
          {/* container for the left side */}
          {/* To make the cards appear in the correct order have everything in the left card but hide the stuff on the right and then show it when you are in a small screen and then hide everything on the right side */}
          <div className="flex-1 flex flex-col gap-6">
            <HomeAnnouncement />
            <HomeFastActions />
          </div>
          {/* container for the right side */}
          <div className="flex-1 flex flex-col gap-6">
            <HomeQuickLinks />
            <HomePages />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePrime;
