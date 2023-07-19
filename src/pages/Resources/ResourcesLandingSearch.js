import React, { useState } from 'react';
import resourcesData from '../../components/resources-components-and-data/resourcesAndDocumentationData.json';
import grayx from '../../icons/resources/grayx.svg';
import bluex from '../../icons/resources/bluex.svg';

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
          link.label.toLowerCase().includes(lowercaseValue) || // Use lowercase value for comparison
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
      <div className="relative mt-14 w-full border border-neutral-4 rounded-lg">
        <input
          className="w-full rounded-lg p-3 bg-white body-medium pr-12"
          type="text"
          name="query"
          placeholder="Search Resources and Documentation"
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <button
            className="absolute top-0 right-0 flex items-center justify-center h-full p-2"
            onClick={handleClear}
            onMouseEnter={handleClearMouseEnter}
            onMouseLeave={handleClearMouseLeave}
            aria-label="Clear Search"
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
        <div key={index} className="max-w-3xl w-full mt-8">
          <div className="title-medium mb-3">{categoryData.group}</div>
          <ul className="flex flex-col gap-4">
            {categoryData.links.map((link, index) => (
              <li
                className="bg-white p-4 rounded-md border-2 border-white hover:border-blue-9"
                key={index}
              >
                <a href={link.url} target="_blank" rel="noreferrer noopener">
                  <div className="title-medium text-blue-9 mb-2">{link.label}</div>
                  <div className="body-medium text-neutral-9">{link.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ResourcesLandingSearch;
