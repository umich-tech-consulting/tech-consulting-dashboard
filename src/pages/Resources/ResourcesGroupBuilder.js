import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import resourcesData from './ResourcesData.json';

const ResourceGroupBuilder = () => {
  const { category, group } = useParams();

  // Clean up the group value by replacing spaces, slashes, and non-alphanumeric characters with dashes
  const formattedCategory = category
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-");
  const formattedGroup = group
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-");

  // Find the data for the selected category and group
  const categoryData = resourcesData.find(
    (data) =>
      data.category
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9-]/g, "-") === formattedCategory &&
      data.group
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9-]/g, "-") === formattedGroup
  );

  if (!categoryData) {
    // Handle case when category or group data is not found
    return <div>Group not found</div>;
  }

  // Sort the links alphabetically based on the 'name' property
  const sortedLinks = categoryData.links.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 items-center">
        <div className="max-w-3xl w-full">
          <div className="text-neutral-7 w-full max-w-3xl flex gap-1">
            <Link to="/resources" className="hover:text-blue-9">
              Resources
            </Link>
            <div>/</div>
            <Link to={`/resources/${category}`} className="hover:text-blue-9">
              {categoryData.category}
            </Link>
            <div>/</div>
            <Link
              to={`/resources/${category}/${group}`}
              className="hover:text-blue-9"
            >
              {categoryData.group}
            </Link>
          </div>
          <div className="headline-large mb-6 text-center mt-8">
            {categoryData.group}
          </div>
          <ul className="flex flex-col gap-4">
            {sortedLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noreferrer noopener">
                  <div className="bg-white rounded-md p-4 hover:bg-blue-0">
                    <div className="title-medium text-blue-9 mb-2">
                      {link.name}
                    </div>
                    <div className="body-medium text-neutral-9">
                      {link.description}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
    
  );
};

export default ResourceGroupBuilder;
