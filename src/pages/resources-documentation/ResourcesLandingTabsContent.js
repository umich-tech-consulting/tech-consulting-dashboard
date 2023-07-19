import { Link } from 'react-router-dom';
import React from 'react';
import tools from "../../icons/resources/tools.svg";
import apple from "../../icons/resources/apple.svg";
import clock from "../../icons/resources/clock.svg";
import document from "../../icons/resources/document.svg";
import fishbowl from "../../icons/resources/fishbowl.svg";
import globe from "../../icons/resources/globe.svg";
import group from "../../icons/resources/group.svg";
import rightarrow from "../../icons/resources/rightarrow.svg";
import tdx from "../../icons/resources/tdx.svg";
import shield from "../../icons/resources/shield.svg";
import slasheye from "../../icons/resources/slasheye.svg";
import printer from "../../icons/resources/printer.svg";
import wrench from "../../icons/resources/wrench.svg";

const iconMapping = {
    apple: apple,
    clock: clock,
    document: document,
    fishbowl: fishbowl,
    globe: globe,
    rightarrow: rightarrow,
    group: group,
    printer: printer,
    shield: shield,
    slasheye: slasheye,
    tdx: tdx,
    tools: tools,
    wrench: wrench,
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

        const formattedCategory = groupData.category.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-');
        const formattedGroup = groupData.group.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-');

        return (
          <Link
            key={index}
            to={`${formattedCategory}/${formattedGroup}`}
            className="p-3 w-60 flex items-center gap-3 bg-white border-2 border-white hover:border-blue-9 rounded-lg body-medium text-neutral-9"
            >
            {IconComponent && <img src={IconComponent} alt={icon} className='h-10 w-10 rounded-md' />}
            {group && <div>{group}</div>}
          </Link>
        );
      })}
    </div>
  );
};

export default ResourcesLandingTabsContent;
