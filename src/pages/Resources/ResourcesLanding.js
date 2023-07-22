import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import resourcesData from './ResourcesData.json';
import ResourcesLandingSearch from './ResourcesLandingSearch';
import ResourcesLandingTabs from './ResourcesLandingTabs';
import ResourcesLandingTabsContent from './ResourcesLandingTabsGroups';
import ResourcesLandingCategories from './ResourcesLandingCategories';


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
          <ResourcesLandingSearch />
          <div className='mt-14'>
            <ResourcesLandingTabs resourcesData={resourcesData} activeTab={activeTab} handleTabChange={handleTabChange}/>
            <ResourcesLandingTabsContent resourcesData={resourcesData} activeTab={activeTab}/>
            <ResourcesLandingCategories />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesLanding;
