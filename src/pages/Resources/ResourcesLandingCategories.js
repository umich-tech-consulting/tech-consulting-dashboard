import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import slasheye from '../../icons/resources/slasheye_reducedheight.svg'
import group from "../../icons/resources/group_reducedheight.svg";
import document from "../../icons/resources/group-category-icons/document.svg";

const ResourcesLandingCategories = () => {

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="mb-6 headline-small text-left mt-20">All Resources</div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-4 lg:flex-row'>
            <Link to="customersupport" className='flex-1 flex shadow-light bg-white p-3 rounded-md gap-4 hover:bg-blue-0 focus:bg-blue-1'>
                <img className='rounded-md h-6 w-10' src={group} alt='globe'></img>
                <div>
                    <div className='title-large pb-7'>Customer Support</div>
                    <div className='body-medium'>Resources for assisting customers.</div>
                    <div className='body-medium text-neutral-7'>E.g. Repairs and Printing</div>
                </div>
            </Link>
            <Link to="employeeresources" className='flex-1 flex shadow-light bg-white p-3 rounded-md gap-4 hover:bg-blue-0 focus:bg-blue-1'>
                <img className='rounded-md h-6 w-10' src={slasheye} alt='globe'></img>
                <div>
                    <div className='title-large pb-7'>Employee Resources</div>
                    <div className='body-medium'>Employment related resources.</div>
                    <div className='body-medium text-neutral-7'>E.g. Timeclock and Employee Handbook</div>
                </div>
            </Link>
        </div>
        <Link to='training' className='flex items-center justify-center shadow-light bg-white p-3 rounded-md gap-2 hover:bg-blue-0 focus:bg-blue-1'>
            <img className='rounded-md h-10 w-10' src={document} alt='globe'></img>
            <div className='title-large'>Training</div>
        </Link>
      </div>
    </>
  );
};

export default ResourcesLandingCategories;
