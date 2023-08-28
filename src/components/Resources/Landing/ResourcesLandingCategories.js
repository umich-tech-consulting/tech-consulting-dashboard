import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import slasheye from '../../../icons/resources/slasheye_reducedheight.svg'
import group from "../../../icons/resources/group_reducedheight.svg";
import document from "../../../icons/resources/group-category-icons/document.svg";

const ResourcesLandingCategories = () => {

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="r-landing-categories-title">All Resources</div>
      <div className='r-landing-categories-container'>
        <div className='r-landing-categories-cards'>
            <Link to="customersupport" className='r-landing-categories-card'>
                <img src={group} alt='globe'></img>
                <div className='r-landing-categories-card-content'>
                    <div className='title-large pb-7'>Customer Support</div>
                    <div>Resources for assisting customers.</div>
                    <div className='text-neutral-7'>E.g. Repairs and Printing</div>
                </div>
            </Link>
            <Link to="employeeresources" className='r-landing-categories-card'>
                <img src={slasheye} alt='globe'></img>
                <div className='r-landing-categories-card-content'>
                    <div className='title-large pb-7'>Employee Resources</div>
                    <div>Employment related resources.</div>
                    <div className='text-neutral-7'>E.g. Timeclock and Employee Handbook</div>
                </div>
            </Link>
        </div>
        <Link to='training' className='r-landing-categories-training-card'>
            <img src={document} alt='globe'></img>
            <div>Training</div>
        </Link>
      </div>
    </>
  );
};

export default ResourcesLandingCategories;
