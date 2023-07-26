import React from 'react';
import { Link } from 'react-router-dom';
import slasheye from '../../icons/resources/slasheye_reducedheight.svg'
import group from "../../icons/resources/group_reducedheight.svg";
import document from "../../icons/resources/group-category-icons/document.svg";

const ResourcesLandingCategories = () => {

  return (
    <>
       <div className="mb-6 headline-small text-left mt-20">All Resources</div>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-4 lg:flex-row'>
                <Link to="customer" className='flex-1 flex bg-white p-3 rounded-md gap-4 hover:bg-blue-0'>
                    <img className='rounded-md h-6 w-10' src={group} alt='globe'></img>
                    <div>
                        <div className='title-large pb-7'>Customer</div>
                        <div className='body-medium'>The links you can use to help customers with their requests</div>
                    </div>
                </Link>
                <Link to="internal" className='flex-1 flex bg-white p-3 rounded-md gap-4 hover:bg-blue-0'>
                    <img className='rounded-md h-6 w-10' src={slasheye} alt='globe'></img>
                    <div>
                        <div className='title-large pb-7'>Internal</div>
                        <div className='body-medium'>Internal ITS resources you can use to do your everyday work</div>
                    </div>
                </Link>
            </div>
            <Link to='training' className='flex items-center justify-center bg-white p-3 rounded-md gap-2 hover:bg-blue-0'>
                <img className='rounded-md h-10 w-10' src={document} alt='globe'></img>
                <div className='title-large'>Training</div>
            </Link>
          </div>
    </>
  );
};

export default ResourcesLandingCategories;
