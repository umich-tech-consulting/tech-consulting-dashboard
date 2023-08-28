import React, { useState } from 'react';
import resourcesData from '../../../ResourcesData.json'
import grayx from '../../../icons/resources/grayx.svg';
import bluex from '../../../icons/resources/bluex.svg';
import search from '../../../icons/resources/search.svg';
import ResourceLinks from '../ResourceLinks';

const ResourcesLandingSearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isClearHovered, setIsClearHovered] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    const lowercaseValue = value.toLowerCase(); // Convert to lowercase

    if (lowercaseValue === '') {
      setSearchResults([]);
      return;
    }

    const results = resourcesData.reduce((accumulator, categoryData) => {
      const matchingLinks = categoryData.links.filter(
        (link) =>
          link.name.toLowerCase().includes(lowercaseValue) || // Use lowercase value for comparison
          link.description.toLowerCase().includes(lowercaseValue) // Use lowercase value for comparison
      );

      if (matchingLinks.length > 0) {
        accumulator.push({
          ...categoryData,
          links: matchingLinks
        });
      }

      return accumulator;
    }, []);

    setSearchResults(results);
  };

  const handleClear = () => {
    setQuery('');
    setSearchResults([]);
  };

  const handleClearMouseEnter = () => {
    setIsClearHovered(true);
  };

  const handleClearMouseLeave = () => {
    setIsClearHovered(false);
  };

  return (
    <>
      <div className="r-landing-search">
        <label className='hidden' htmlFor="searchbox">Resources Search</label>
        <input
          type="text"
          name="query"
          id="searchbox"
          placeholder="Search Resources and Documentation"
          value={query}
          onChange={handleSearch}
        />
        <img src={search} alt="Search" className="r-landing-search-icon" />
        {query && (
          <button
            className="r-landing-search-clear"
            onClick={handleClear}
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

      {searchResults.map((categoryData, index) => (
        <div key={index} className="r-landing-container">
          <div className="title-medium mb-3"><span className='text-neutral-7'>{categoryData.category} /</span> {categoryData.group}</div>
          <ResourceLinks linkData={categoryData.links} />
        </div>
      ))}
    </>
  );
};

export default ResourcesLandingSearch;
