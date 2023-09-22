import { Link } from 'react-router-dom';
import { Apple, Clock, Document, Fishbowl, Globe, Group, Infobook, Printer, Shield, Slasheye, Tdx, Tools, Umich, Wrench } from '../../../icons/resources/GroupIconSvgs';
import React from 'react';

const iconMapping = {
    apple: <Apple />,
    clock: <Clock />,
    document: <Document />,
    fishbowl: <Fishbowl />,
    globe: <Globe />,
    group: <Group />,
    infobook: <Infobook />,
    printer: <Printer />,
    shield: <Shield />,
    slasheye: <Slasheye />,
    tdx: <Tdx />,
    umich: <Umich />,
    tools: <Tools />,
    wrench: <Wrench />,
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
            className="r-landing-tabgroups"
            >
            {IconComponent}
            {group && <div>{group}</div>}
          </Link>
        );
      })}
    </div>
  );
};

export default ResourcesLandingTabsContent;
