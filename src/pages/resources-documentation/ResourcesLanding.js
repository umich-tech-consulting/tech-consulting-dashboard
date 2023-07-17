import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import resourcesData from '../../components/resources-components-and-data/resourcesAndDocumentationData.json';
import ResourcesLandingTabs from './ResourcesLandingTabs';
import ResourcesLandingTabsContent from './ResourcesLandingTabsContent';

const Resources = () => {
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
          <form className="mt-10 w-full border-2 border-neutral-4 rounded-lg">
            <input
              className="w-full rounded-lg p-3 bg-white "
              type="text"
              name="query"
              placeholder="Search resources and documentation"
              value="Search Doesn't Work Yet"
            />
          </form>
          <div className='mt-14'>
            <ResourcesLandingTabs resourcesData={resourcesData} activeTab={activeTab} handleTabChange={handleTabChange}/>
            <ResourcesLandingTabsContent resourcesData={resourcesData} activeTab={activeTab}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
