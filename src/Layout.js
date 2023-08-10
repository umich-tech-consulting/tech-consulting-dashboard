import LeftNav from './navigation/LeftNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    return (
        <>
            <div className='block'>
                <div className={`ml-[230px] box-border min-h-screen bg-base-light`}>
                    <nav className='inset-0 fixed box-border w-fit z-50'>
                        <LeftNav />
                    </nav>
                    <main className='justify-center sm:justify-normal flex flex-wrap gap-10'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout;