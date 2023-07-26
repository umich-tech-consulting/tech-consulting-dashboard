import { Link } from 'react-router-dom';
import React from 'react';
import tools from "../../icons/resources/group-category-icons/tools.svg";
import apple from "../../icons/resources/group-category-icons/apple.svg";
import clock from "../../icons/resources/group-category-icons/clock.svg";
import document from "../../icons/resources/group-category-icons/document.svg";
import fishbowl from "../../icons/resources/group-category-icons/fishbowl.svg";
import globe from "../../icons/resources/group-category-icons/globe.svg";
import group from "../../icons/resources/group-category-icons/group.svg";
import tdx from "../../icons/resources/group-category-icons/tdx.svg";
import shield from "../../icons/resources/group-category-icons/shield.svg";
import slasheye from '../../icons/resources/group-category-icons/slasheye.svg'
import printer from "../../icons/resources/group-category-icons/printer.svg";
import wrench from "../../icons/resources/group-category-icons/wrench.svg";

const iconMapping = {
    apple: apple,
    clock: clock,
    document: document,
    fishbowl: fishbowl,
    globe: globe,
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
            className="p-3 w-60 flex items-center gap-3 bg-white hover:bg-blue-0 rounded-lg title-small text-neutral-9"
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
