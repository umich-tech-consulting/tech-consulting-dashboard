import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import resourcesData from "../../ResourcesData.json";
import ResourceLinks from "../../components/Resources/ResourceLinks";
import search from "../../icons/resources/search.svg";
import bluex from "../../icons/resources/bluex.svg";
import grayx from "../../icons/resources/grayx.svg";

const ResourceGroupBuilder = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isClearHovered, setIsClearHovered] = useState(false);

  const { category, group } = useParams();

  const formattedCategory = category
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-");
  const formattedGroup = group
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9-]/g, "-");

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
    return <div>Group not found</div>;
  }

  const sortedLinks = categoryData.links.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    const lowercaseValue = value.toLowerCase();

    if (lowercaseValue === "") {
      setSearchResults([]);
      return;
    }

    const results = sortedLinks.filter(
      (link) =>
        link.name.toLowerCase().includes(lowercaseValue) ||
        link.description.toLowerCase().includes(lowercaseValue)
    );

    setSearchResults(results);
  };

  const handleClearMouseEnter = () => {
    setIsClearHovered(true);
  };

  const handleClearMouseLeave = () => {
    setIsClearHovered(false);
  };

  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <div className="r-page">
        <div className="r-groupbuilder-container">
          <div className="r-groupbuilder-nav">
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
          <div className="relative mt-8 mb-8 w-full border shadow-light border-neutral-3 rounded-lg">
            <input
              className="w-full pl-10 rounded-lg p-3 bg-white body-medium pr-12 focus:outline-blue-9"
              type="text"
              name="query"
              placeholder={`Search ${categoryData.group} Links`}
              value={query}
              onChange={handleSearch}
            />
            <img
              src={search} // Replace with your actual search icon
              alt="Search"
              className="absolute top-0 left-0 h-full p-3"
            />
            {query && (
              <button
                className="absolute top-0 right-0 h-full p-2"
                onClick={() => setQuery("")}
                onMouseEnter={handleClearMouseEnter}
                onMouseLeave={handleClearMouseLeave}
              >
                <img
                  src={isClearHovered ? bluex : grayx} // Replace with your actual clear icon
                  alt="Clear"
                  className="h-6 w-6"
                />
              </button>
            )}
          </div>
          {query ? (
            <div className="max-w-3xl w-full mt-8">
              <ResourceLinks linkData={searchResults} />
            </div>
          ) : (
            <ResourceLinks linkData={sortedLinks} />
          )}
        </div>
      </div>
    </>
  );
};

export default ResourceGroupBuilder;
