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
      <div className="r-page fade-in">
        <div className="r-landing-container">
          <div className="r-landing-title">Resources and Documentation</div>
          <ResourcesLandingSearch />
          <div className='r-landing-main'>
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
