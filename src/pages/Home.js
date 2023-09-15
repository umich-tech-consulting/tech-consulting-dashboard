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
          {/* <Link className="link-bg py-4 px-4 w-full hover:ml-6 rounded-xl text-lg" to="/asset-management">ASSET MANAGEMENT</Link> */}
          <Link className="link-bg py-4 px-4 w-full hover:ml-6 rounded-xl text-lg" to="/resources">RESOURCES</Link>
        </div>
        <div className="fixed top-0 right-0 p-8">
          <div className="notification-pane flex flex-col gap-6 border border-neutral-8">
            <div className="headline-medium text-neutral-2">Password Resets</div>
            <div className="body-medium text-neutral-3">Fill out the <span><a href="https://docs.google.com/presentation/d/1EtJ8yeuP5Aauassfl5urtBQLZLXla27xtrqyKBqfXrM/edit?usp=sharing" target="blank" rel="noopener noreferrer">"<u>Password Project Tracking</u>"</a></span> form when you help someone reset a password or work with someone on an issue following a self-service password reset.</div>
            <div className="body-medium text-neutral-3">Refer to the <span><a href="https://docs.google.com/presentation/d/1EtJ8yeuP5Aauassfl5urtBQLZLXla27xtrqyKBqfXrM/edit?usp=sharing" target="blank" rel="noopener noreferrer">"<u>In Person Password Reset Form</u>"</a></span> for training information about assisting customers with password resets.</div>
            <div className="text-neutral-3 body-medium">
              <div className="title-small text-neutral-2">If WiFi issues occur after a password reset:</div>
              <div>- Forget the network and reconnect</div>
              <div>- Or use <span><a href="https://msetup.its.umich.edu/" target="blank" rel="noopener noreferrer"><u>Msetup</u></a></span>.</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;