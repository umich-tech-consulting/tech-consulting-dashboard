import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import resourcesData from '../../ResourcesData.json'
import ResourceLinks from "../../components/Resources/ResourceLinks";

const ResourceCategoryBuilder = () => {
  const { category } = useParams();

  // Convert the category value to lowercase and replace spaces with dashes
  const formattedCategory = category
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-");

  // Filter the data for the selected category
  const categoryData = resourcesData.filter(
    (data) =>
      data.category
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9-]/g, "-") === formattedCategory
  );

  const categoryName = resourcesData.find(
    (data) =>
      data.category
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9-]/g, "-") === formattedCategory
  );

  if (categoryData.length === 0) {
    // Handle case when category data is not found
    return <div>Category not found</div>;
  }

  // Sort the categoryData array alphabetically based on the 'group' property
  const sortedCategoryData = categoryData.sort((a, b) =>
    a.group.localeCompare(b.group)
  );

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="r-page fade-in">
          <div className="r-categorybuilder-nav">
            <Link to="/resources" className="hover:text-blue-9 dark:hover:text-yellow-6">Resources</Link>
            <div>/</div>
            <Link to={`/resources/${category}`} className="hover:text-blue-9 dark:hover:text-yellow-6">{categoryName.category}</Link>
          </div>
        <div className="r-landing-container">
          <h1 className="r-categorybuilder-title">{categoryName.category}</h1>{" "}
          {/* Display the appropriate header */}
        </div>
        {sortedCategoryData.map((groupData, index) => (
          <div key={index} className="max-w-3xl w-full mb-16">
            <div className="mb-6 flex gap-2 items-center">
              <div className="headline-small text-neutral-9 dark:text-neutral-1">{groupData.group}</div>
              <Link
                to={`${groupData.group
                  .toLowerCase()
                  .replace(/\s+/g, "")
                  .replace(/[^a-zA-Z0-9-]/g, "-")}`}
              >
                <svg className="h-6 w-6 stroke-blue-9 dark:stroke-yellow-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-labelledby="right_arrow">
                  <title id="right_arrow">Right Arrow</title>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12c0 1.1819-.2328 2.3522-.6851 3.4442-.4523 1.0919-1.1152 2.084-1.9509 2.9198-.8358.8357-1.8279 1.4986-2.9198 1.9509C14.3522 20.7672 13.1819 21 12 21c-1.1819 0-2.35222-.2328-3.44415-.6851-1.09193-.4523-2.08408-1.1152-2.91981-1.9509-.83573-.8358-1.49866-1.8279-1.95096-2.9198C3.23279 14.3522 3 13.1819 3 12c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 3 12 3c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 7.32387 21 9.61305 21 12Z"/>
                </svg>
              </Link>
            </div>
            <ResourceLinks linkData={groupData.links} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ResourceCategoryBuilder;
