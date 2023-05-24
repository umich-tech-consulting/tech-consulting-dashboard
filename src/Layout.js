import TopNav from './components/layout-components/TopNav';
import LeftNav from './components/layout-components/LeftNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className='block'>
                <div className='pt-10 sm:p-10 sm:ml-[96px] xl:ml-[276px] box-border min-h-screen bg-white dark:bg-black'>
                    <div className='inset-0 fixed box-border w-fit'>
                        <LeftNav />
                        <TopNav />
                    </div>
                    <div className='justify-center sm:justify-normal flex flex-wrap gap-10 mt-[74px]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;