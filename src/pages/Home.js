import { Helmet } from "react-helmet";
import HomeTopbar from "../components/Home/HomeTopbar";
import HomeInfo from "../components/Home/HomeInfo";
import HomeQuickLinks from "../components/Home/HomeQuickLinks";
import HomeFastActions from "../components/Home/HomeFastActions";
import HomePages from "../components/Home/HomePages";

import HomeAnnouncements from "../components/Home/HomeAnnouncements";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 fade-in">
        <div className="headline-small dark:text-neutral-1">Home</div>
        <HomeTopbar />
        {/* container for everything */}
        <div className="flex flex-col xl:flex-row gap-6 mt-6 pb-6">
          {/* container for the left side */}
          <div className="flex-1 flex flex-col gap-6">
            <HomeInfo />
            <div className="block xl:hidden">
                <HomeAnnouncements />
            </div>
            <div className="block xl:hidden">
                <HomeQuickLinks />
            </div>
            <HomeFastActions />
            <HomePages />
          </div>
          {/* container for the right side */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="hidden xl:block">
                <HomeAnnouncements />
            </div>
            <div className="hidden xl:block">
                <HomeQuickLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
