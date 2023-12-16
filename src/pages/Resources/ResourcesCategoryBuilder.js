import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useParams } from "react-router-dom";
import resourcesData from '../../ResourcesData.json';
import ResourceLinks from "../../components/Resources/ResourceLinks";

const ResourceCategoryBuilder = () => {
  const { category } = useParams();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
  
    const lowercaseValue = value.toLowerCase();
  
    if (lowercaseValue === "") {
      setSearchResults([]);
      return;
    }
  
    // Filter groups and links based on the search query
    const results = sortedCategoryData
      .filter((groupData) =>
        groupData.links.some(
          (link) =>
            link.name.toLowerCase().includes(lowercaseValue) ||
            link.description.toLowerCase().includes(lowercaseValue)
        )
      )
      .map((groupData) => ({
        ...groupData,
        links: groupData.links.filter(
          (link) =>
            link.name.toLowerCase().includes(lowercaseValue) ||
            link.description.toLowerCase().includes(lowercaseValue)
        ),
      }));
  
    setSearchResults(results);
  };

  const dataToRender = query ? searchResults : sortedCategoryData;

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="r-page fade-in">
        <div className="r-groupbuilder-container">
          <div className="r-categorybuilder-nav">
            <Link to="/resources" className="hover:text-blue-10 dark:hover:text-yellow-6">Resources</Link>
            <div>/</div>
            <Link to={`/resources/${category}`} className="hover:text-blue-10 dark:hover:text-yellow-6">{categoryName.category}</Link>
          </div>
          <div className="headline-large mb-6 text-center mt-8 text-neutral-9 dark:text-neutral-1">
            {categoryName.category}
          </div>
          <div className="r-groupbuilder-searchbox">
            <label className='hidden' htmlFor="searchbox">Resources Search</label>
            <input
              type="text"
              name="query"
              id="searchbox"
              placeholder={`Search ${categoryName.category} Links`}
              value={query}
              onChange={handleSearch}
            />
            <svg className='absolute top-0 left-0 flex items-center justify-center h-full p-3 stroke-blue-10 dark:stroke-yellow-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" role="img" aria-labelledby="search_icon">
              <title id="search_icon">Search Icon</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".875" d="M12.25 12.2505 9.21845 9.21887m0 0c.82045-.8205 1.28145-1.93334 1.28145-3.09371 0-1.16036-.461-2.2732-1.28145-3.0937C8.39794 2.21095 7.2851 1.75 6.12474 1.75c-1.16037 0-2.27321.46095-3.09371 1.28146-.8205.8205-1.28146 1.93334-1.28146 3.0937 0 1.16037.46096 2.27321 1.28146 3.09371.8205.82053 1.93334 1.28143 3.09371 1.28143 1.16036 0 2.2732-.4609 3.09371-1.28143Z"/>
            </svg>
            {query && (
              <button
                className="r-groupbuilder-searchbox-clear"
                onClick={() => setQuery("")}
              >
                <svg className='h-6 w-6 stroke-neutral-5 dark:stroke-neutral-3 hover:stroke-blue-10 dark:hover:stroke-yellow-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" role="img" aria-labelledby="default_x">
                  <title id="default_x">Default X</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.125 8.125 3.75 3.75m0-3.75-3.75 3.75M17.5 10c0 .9849-.194 1.9602-.5709 2.8701-.3769.91-.9294 1.7368-1.6258 2.4332-.6964.6964-1.5232 1.2489-2.4332 1.6258-.9099.3769-1.8852.5709-2.8701.5709-.98491 0-1.96018-.194-2.87013-.5709-.90994-.3769-1.73673-.9294-2.43317-1.6258-.69644-.6964-1.24889-1.5232-1.6258-2.4332C2.69399 11.9602 2.5 10.9849 2.5 10c0-1.98912.79018-3.89678 2.1967-5.3033S8.01088 2.5 10 2.5c1.9891 0 3.8968.79018 5.3033 2.1967C16.7098 6.10322 17.5 8.01088 17.5 10Z"/>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="r-categorybuilder-container">
          {dataToRender.map((groupData, index) => (
            <div key={index} className="max-w-3xl w-full mb-16">
              <div className="mb-6 flex gap-2 items-center">
                <div className="headline-small text-neutral-9 dark:text-neutral-1">{groupData.group}</div>
                <Link
                  to={`${groupData.group
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .replace(/[^a-zA-Z0-9-]/g, "-")}`}
                >
                  <svg className="h-6 w-6 stroke-blue-10 dark:stroke-yellow-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-labelledby="right_arrow">
                    <title id="right_arrow">Right Arrow</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12c0 1.1819-.2328 2.3522-.6851 3.4442-.4523 1.0919-1.1152 2.084-1.9509 2.9198-.8358.8357-1.8279 1.4986-2.9198 1.9509C14.3522 20.7672 13.1819 21 12 21c-1.1819 0-2.35222-.2328-3.44415-.6851-1.09193-.4523-2.08408-1.1152-2.91981-1.9509-.83573-.8358-1.49866-1.8279-1.95096-2.9198C3.23279 14.3522 3 13.1819 3 12c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 3 12 3c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 7.32387 21 9.61305 21 12Z"/>
                  </svg>
                </Link>
              </div>
              <ResourceLinks linkData={groupData.links} />
            </div>
          ))}
          {query && searchResults.length === 0  &&
            <div className="flex flex-col gap-1 p-2 bg-neutral-2 dark:bg-black rounded-md">
                <div className="title-medium text-neutral-8 dark:text-neutral-2">Your search did not return any results</div>
                <div className="body-medium text-neutral-7 dark:text-neutral-3">Search will only look for words that exactly match the Title and/or Description of a link.</div>
            </div>
           }
        </div>
      </div>
    </>
  );
};

export default ResourceCategoryBuilder;
