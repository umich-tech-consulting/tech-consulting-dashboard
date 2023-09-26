import { useState } from "react";
import LeftNav from './navigation/LeftNav';
import HideNav from './components/Navigation/HideNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [navHidden, setNavHidden] = useState(false);

    return (
        <>
            <div className='block'>
                <div className={`${navHidden ? "ml-0" : "ml-[230px]"} box-border min-h-screen bg-base-light dark:bg-neutral-10`}>
                    <nav className={`inset-0 fixed box-border w-fit z-50 ${navHidden ? "hidden" : ""}`}>
                        <LeftNav />
                    </nav>
                    <HideNav navHidden={navHidden} setNavHidden={setNavHidden} />
                    <main className='justify-center sm:justify-normal flex flex-wrap gap-10'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout;