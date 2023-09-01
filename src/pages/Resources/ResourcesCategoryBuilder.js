import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import resourcesData from '../../ResourcesData.json'
import rightarrow from "../../icons/resources/rightarrow.svg";
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
            <Link to="/resources" className="hover:text-blue-9">Resources</Link>
            <div>/</div>
            <Link to={`/resources/${category}`} className="hover:text-blue-9">{categoryName.category}</Link>
          </div>
        <div className="r-landing-container">
          <h1 className="r-categorybuilder-title">{categoryName.category}</h1>{" "}
          {/* Display the appropriate header */}
        </div>
        {sortedCategoryData.map((groupData, index) => (
          <div key={index} className="max-w-3xl w-full mb-16">
            <div className="mb-6 flex gap-2 items-center">
              <h2 className="headline-small">{groupData.group}</h2>
              <Link
                to={`${groupData.group
                  .toLowerCase()
                  .replace(/\s+/g, "")
                  .replace(/[^a-zA-Z0-9-]/g, "-")}`}
              >
                <img src={rightarrow} alt="Right Arrow" />
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
