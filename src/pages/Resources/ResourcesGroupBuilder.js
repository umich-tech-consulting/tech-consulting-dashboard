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
      <div className="r-page fade-in">
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
          <div className="r-groupbuilder-searchbox">
            <input
              type="text"
              name="query"
              placeholder={`Search ${categoryData.group} Links`}
              value={query}
              onChange={handleSearch}
            />
            <img
              src={search}
              alt="Search"
              className="absolute top-0 left-0 h-full p-3"
            />
            {query && (
              <button
                className="r-groupbuilder-searchbox-clear"
                onClick={() => setQuery("")}
                onMouseEnter={handleClearMouseEnter}
                onMouseLeave={handleClearMouseLeave}
              >
                <img
                  src={isClearHovered ? bluex : grayx}
                  alt="Clear"
                  className="h-6 w-6"
                />
              </button>
            )}
          </div>
          {query ? (
            <div className="r-landing-container">
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
