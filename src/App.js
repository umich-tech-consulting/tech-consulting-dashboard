import logo from './logo.svg';
import './App.css';
import './index.css';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import CheckIn from './components/CheckIn';
import CheckOut from './components/CheckOut';
import LaptopManagement from './components/LaptopManagment';

function App() {
  return (
    <>
      <div className='block'>
        <div className='p-10 sm:ml-[96px] md:ml-[96px] lg:ml-[96px] xl:ml-[276px] box-border h-screen bg-white dark:bg-black'>
          <div className='inset-0 fixed box-border w-fit'>
            <LeftNav />
            <TopNav />
          </div>
          <div className='flex flex-wrap gap-10 mt-[74px]'>
            <CheckIn />
            <CheckOut />
            <LaptopManagement />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
