import { Helmet } from "react-helmet";
import HomeTopbar from "../components/Home/HomeTopbar";
import HomeAnnouncement from "../components/Home/HomeAnnouncement";
import HomeQuickLinks from "../components/Home/HomeQuickLinks";
import HomeFastActions from "../components/Home/HomeFastActions";
import HomePages from "../components/Home/HomePages";

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
            <HomeAnnouncement />
            <div className="block xl:hidden">
                <HomeQuickLinks />
            </div>
            <HomeFastActions />
            <div className="block xl:hidden">
                <HomePages />
            </div>
          </div>
          {/* container for the right side */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="hidden xl:block">
                <HomeQuickLinks />
            </div>
            <div className="hidden xl:block">
                <HomePages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
