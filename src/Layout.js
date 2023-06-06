import { useState, useEffect } from 'react';
import TopNav from './components/layout-components/TopNav';
import LeftNav from './components/layout-components/LeftNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isToggleOn, setIsToggleOn] = useState(() => {
        return localStorage.getItem('isToggleOn') === 'true';
    });

    const handleToggleClick = () => {
        setIsToggleOn(prevState => !prevState);
    };

    useEffect(() => {
        setIsToggleOn((prevState) => !prevState);
      }, []);

    useEffect(() => {
        localStorage.setItem('isToggleOn', JSON.stringify(isToggleOn));
    }, [isToggleOn]);

    return (
        <>
            <div className='block'>
                <div className={`pt-6 sm:p-10 sm:ml-[72px] ${isToggleOn ? "xl:ml-[72px]" : "xl:ml-[230px]"} box-border min-h-screen bg-white dark:bg-black`}>
                    <div className='inset-0 fixed box-border w-fit z-50'>
                        <TopNav isToggleOn={isToggleOn} handleToggleClick={handleToggleClick} />
                        <LeftNav isToggleOn={isToggleOn} handleToggleClick={handleToggleClick} />
                    </div>
                    <div className='justify-center sm:justify-normal flex flex-wrap gap-10 mt-[40px]'>
                        <Outlet isToggleOn={isToggleOn} handleToggleClick={handleToggleClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;