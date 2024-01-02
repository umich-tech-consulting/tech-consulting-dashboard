import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Logo from "../icons/home/transparentdashboardlogo.svg"
import Itslogo from "../icons/home/itsblocklogo.png"

const OldHome = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="homepage fade-in">
        <div className="w-full h-screen">
          <div className="top-gradient"></div>
          <div className="bottom-gradient"></div>
          <div className="absolute p-8">
            <img className="w-auto h-[60px]" src={Logo} alt='Dashboard Logo' />
          </div>
          <div className="fixed right-0 bottom-0 p-8">
            <img className="w-auto h-[60px]" src={Itslogo} alt='ITS Logo' />
          </div>
          {/* <div className="notification-pane">
            <div className="headline-small">Password Resets</div>
            <div>Fill out the <span><a href="https://docs.google.com/presentation/d/1EtJ8yeuP5Aauassfl5urtBQLZLXla27xtrqyKBqfXrM/edit?usp=sharing" target="blank" rel="noopener noreferrer">"<u>Password Project Tracking</u>"</a></span> form when you help someone reset a password or work with someone on an issue following a self-service password reset.</div>
            <div>Refer to the <span><a href="https://docs.google.com/presentation/d/1EtJ8yeuP5Aauassfl5urtBQLZLXla27xtrqyKBqfXrM/edit?usp=sharing" target="blank" rel="noopener noreferrer">"<u>In Person Password Reset Form</u>"</a></span> for training information about assisting customers with password resets.</div>
            <div>
              <div className="title-small">If WiFi issues occur after a password reset:</div>
              <div>- Forget the network and reconnect</div>
              <div>- Or use <span><a href="https://msetup.its.umich.edu/" target="blank" rel="noopener noreferrer"><u>Msetup</u></a></span>.</div>
            </div>
          </div> */}
          <div className={`text-yellow-5 dark:text-[#00274C] title-medium flex justify-center items-end pb-[20vh] relative h-full w-full bottom-0`}>
            <div className="home-link-container-main justify-center">
              <Link className="home-link" to="/announcements">Announcements</Link>
              <Link className="home-link" to="/asset-management">Asset Management</Link>
              <Link className="home-link" to="/resources">Resources</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OldHome;