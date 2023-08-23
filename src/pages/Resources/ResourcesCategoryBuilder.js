import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import resourcesData from '../../ResourcesData.json'
import rightarrow from "../../icons/resources/rightarrow.svg";

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
      <div className="w-full flex flex-col p-6 items-center">
          <div className="text-neutral-7 w-full max-w-3xl flex gap-1">
            <Link to="/resources" className="hover:text-blue-9">Resources</Link>
            <div>/</div>
            <Link to={`/resources/${category}`} className="hover:text-blue-9">{categoryName.category}</Link>
          </div>
        <div className="max-w-3xl w-full mt-8">
          <h1 className="headline-large mb-6 text-center">{categoryName.category}</h1>{" "}
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

            <ul className="flex flex-col gap-4">
              {groupData.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noreferrer noopener">
                    <div className="shadow-light bg-white p-4 rounded-md hover:bg-blue-0">
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
        ))}
      </div>
    </>
  );
};

export default ResourceCategoryBuilder;
