import React from 'react';
import tools from "../../icons/resources/tools.svg";
import clock from "../../icons/resources/clock.svg";
import tdx from "../../icons/resources/tdx.svg";

const iconMapping = {
  tools: tools,
  clock: clock,
  tdx: tdx

};

const ResourcesLandingTabsContent = ({ resourcesData, activeTab }) => {
  const categories = [...new Set(resourcesData.map((tab) => tab.category))];
  const currentCategory = categories[activeTab];
  const filteredData = resourcesData.filter((tab) => tab.category === currentCategory);

  const uniqueGroups = [...new Set(filteredData.map((tab) => tab.group))];

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {uniqueGroups.map((group, index) => {
        const groupData = filteredData.find((tab) => tab.group === group);
        const icon = groupData ? groupData.icon : '';
        const IconComponent = iconMapping[icon] || null;

        return (
          <div className="p-3 w-60 flex items-center gap-3 border-2 border-white bg-white hover:border-blue-9 hover:border-2 rounded-lg body-medium text-neutral-9" key={index}>
            {IconComponent && <img src={IconComponent} alt={icon} className='h-10 w-10 rounded-md' />}
            {group && <div>{group}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default ResourcesLandingTabsContent;
