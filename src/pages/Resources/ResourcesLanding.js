import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import resourcesData from '../../ResourcesData.json'
import ResourcesLandingSearch from '../../components/Resources/Landing/ResourcesLandingSearch';
import ResourcesLandingTabs from '../../components/Resources/Landing/ResourcesLandingTabs';
import ResourcesLandingTabsContent from '../../components/Resources/Landing/ResourcesLandingTabsGroups';
import ResourcesLandingCategories from '../../components/Resources/Landing/ResourcesLandingCategories';


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
