import React from 'react';
import { Helmet } from 'react-helmet';
import WarrantyHeader from '../../components/Warranty/WarrantyHeader';


const WarrantyLanding = () => {



  return (
    <>
      <Helmet>
        <title>Warranty Check</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 fade-in text-neutral-9 items-center">
        <WarrantyHeader />
        <div className='max-w-3xl w-full rounded-[10px] border border-neutral-2 bg-white p-9'>
          <div>Device Type</div>
        </div>
      </div>
    </>
  );
};

export default WarrantyLanding;
