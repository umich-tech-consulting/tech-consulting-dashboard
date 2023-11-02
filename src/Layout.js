import { useState, useEffect } from "react";
import LeftNav from "./navigation/LeftNav";
import MobileNav from "./navigation/MobileNav";
import HideNav from "./components/Navigation/HideNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [navHidden, setNavHidden] = useState(
    JSON.parse(localStorage.getItem("navHidden")) || false
  );
  useEffect(() => {
    localStorage.setItem("navHidden", JSON.stringify(navHidden));
  }, [navHidden]);

  return (
    <>
      <div className="block">
        <MobileNav className="md:hidden" />
        <div
          className={`${
            navHidden ? "ml-0" : "md:ml-[230px] ml-0"
          } box-border min-h-screen bg-base-light dark:bg-neutral-10 pt-16 md:pt-0`}
        >
          <nav className="inset-0 fixed box-border w-fit z-50 md:block hidden">
            {!navHidden && <LeftNav />}
          </nav>
          <HideNav navHidden={navHidden} setNavHidden={setNavHidden} />
          <main className="justify-center sm:justify-normal flex flex-wrap gap-10">
            <Outlet navHidden={navHidden} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
