import React from 'react';
import { useParams } from 'react-router-dom';
import resourcesData from '../../components/resources-components-and-data/resourcesAndDocumentationData.json';

const ResourceGroupBuilder = () => {
  const { category, group } = useParams();

  // Clean up the group value by replacing spaces, slashes, and non-alphanumeric characters with dashes
  const formattedCategory = category.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-');
  const formattedGroup = group.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-');

  // Find the data for the selected category and group
  const categoryData = resourcesData.find(
    (data) =>
      data.category.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-') === formattedCategory &&
      data.group.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z0-9-]/g, '-') === formattedGroup
  );

  if (!categoryData) {
    // Handle case when category or group data is not found
    return <div>Group not found</div>;
  }

  return (
    <div className="w-full flex flex-col p-6 items-center">
      <div className="max-w-3xl w-full mt-8">
        <div className="headline-large mb-6 text-center">{categoryData.group}</div>
        <ul className="flex flex-col gap-4">
          {categoryData.links.map((link, index) => (
            <li className="bg-white p-4 rounded-md border-2 border-white hover:border-blue-9" key={index}>
              <a href={link.url} target="_blank" rel="noreferrer noopener">
                <div className="title-medium text-blue-9 mb-2">{link.label}</div>
                <div className="body-medium text-neutral-9">{link.description}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceGroupBuilder;
