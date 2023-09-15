import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Logo from "../icons/home/transparentdashboardlogo.svg"
import Itslogo from "../icons/home/itsblocklogo.png"

const Home = () => {


  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="homepage fade-in">
        <div className="aboslute p-12">
          <img className="w-auto h-[60px]" src={Logo} alt='Dashboard Logo' />
        </div>
        <div className="fixed right-0 bottom-0 p-12">
          <img className="w-auto h-[70px]" src={Itslogo} alt='ITS Logo' />
        </div>
        {/* <div className="menu-button">
          <Link className=" hover:text-yellow-6 w-fit hover:pl-4" to="/announcements">ANNOUNCEMENTS</Link>
          <Link className=" hover:text-yellow-6 w-fit hover:pl-4" to="/asset-management">ASSET MANAGEMENT</Link>
          <Link className=" hover:text-yellow-6 w-fit hover:pl-4" to="/resources">RESOURCES</Link>
        </div> */}
        <div className="text-2xl flex flex-col text-white p-12 w-[370px] gap-2 fixed bottom-0">
          <Link className="link-bg py-4 px-4 w-full hover:ml-6 rounded-xl text-lg" to="/announcements">ANNOUNCEMENTS</Link>
          <Link className="link-bg py-4 px-4 w-full hover:ml-6 rounded-xl text-lg" to="/asset-management">ASSET MANAGEMENT</Link>
          <Link className="link-bg py-4 px-4 w-full hover:ml-6 rounded-xl text-lg" to="/resources">RESOURCES</Link>
        </div>
        <div className="fixed top-0 right-0 p-8">
          <div className="notification-pane flex flex-col gap-6 border border-neutral-8">
            <div className="headline-medium text-neutral-2">New look!</div>
            <div className="body-medium text-neutral-3">Welcome to the new and improved homepage! If you have any thoughts about how to improve this site, feel free to send us some feedback on the form!</div>
            <a href="https://forms.gle/kb1CQuKLGzneFGRj8" target="blank" rel="noopener noreferrer" className="body-medium hover:bg-neutral-8 text-neutral-3 w-fit py-1 px-2 rounded-md" title="Feedback Form"><div>Feedback Form</div></a>


          </div>
        </div>
      </div>
    </>
  );
};

export default Home;