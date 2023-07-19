import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import resourcesData from '../../components/resources-components-and-data/resourcesAndDocumentationData.json';
import ResourcesLandingTabs from './ResourcesLandingTabs';
import ResourcesLandingTabsContent from './ResourcesLandingTabsContent';
import slasheye from '../../icons/resources/slasheye.svg'
import group from '../../icons/resources/group.svg'
import document from "../../icons/resources/document.svg";


const ResourcesLanding = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };



  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 items-center">
        <div className="max-w-3xl w-full mt-8">
          <div className="mb-6 headline-large text-center">Resources and Documentation</div>
          <form className="mt-14 w-full border border-neutral-4 rounded-lg">
            <input
              className="w-full rounded-lg p-3 bg-white "
              type="text"
              name="query"
              placeholder="Search resources and documentation"
              value="Search Doesn't Work Yet. Missing Search Button"
            />
          </form>
          <div className='mt-14'>
          {/* <div className='mt-14 min-h-[250px]'> */}
            <ResourcesLandingTabs resourcesData={resourcesData} activeTab={activeTab} handleTabChange={handleTabChange}/>
            <ResourcesLandingTabsContent resourcesData={resourcesData} activeTab={activeTab}/>
          </div>
          <div className="mb-6 headline-small text-left mt-20">All Resources</div>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-4 lg:flex-row'>
                <Link to="customer" className='flex-1 flex bg-white p-3 rounded-md gap-4 border-2 border-white hover:border-blue-9'>
                    <img className='rounded-md h-10 w-10' src={group} alt='globe'></img>
                    <div>
                        <div className='title-large pb-7'>Customer</div>
                        <div className='body-medium'>The links you can use to help customers with their requests</div>
                    </div>
                </Link>
                <Link to="internal" className='flex-1 flex bg-white p-3 rounded-md gap-4 border-2 border-white hover:border-blue-9'>
                    <img className='rounded-md h-10 w-10' src={slasheye} alt='globe'></img>
                    <div>
                        <div className='title-large pb-7'>Internal</div>
                        <div className='body-medium'>Internal ITS resources you can use to do your everyday work</div>
                    </div>
                </Link>
            </div>
            <Link to='training' className='flex items-center justify-center bg-white p-3 rounded-md gap-4 border-2 border-white hover:border-blue-9'>
                <img className='rounded-md h-10 w-10' src={document} alt='globe'></img>
                <div className='title-large'>Training</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesLanding;
