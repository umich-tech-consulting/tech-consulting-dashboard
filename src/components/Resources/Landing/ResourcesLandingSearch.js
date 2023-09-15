import React, { useState } from 'react';
import resourcesData from '../../../ResourcesData.json'
import ResourceLinks from '../ResourceLinks';

const ResourcesLandingSearch = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
        <svg className='absolute top-0 left-0 flex items-center justify-center h-full p-3 stroke-blue-9 dark:stroke-yellow-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" role="img" aria-labelledby="search_icon">
          <title id="search_icon">Search Icon</title>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width=".875" d="M12.25 12.2505 9.21845 9.21887m0 0c.82045-.8205 1.28145-1.93334 1.28145-3.09371 0-1.16036-.461-2.2732-1.28145-3.0937C8.39794 2.21095 7.2851 1.75 6.12474 1.75c-1.16037 0-2.27321.46095-3.09371 1.28146-.8205.8205-1.28146 1.93334-1.28146 3.0937 0 1.16037.46096 2.27321 1.28146 3.09371.8205.82053 1.93334 1.28143 3.09371 1.28143 1.16036 0 2.2732-.4609 3.09371-1.28143Z"/>
        </svg>
        {query && (
          <button
            className="r-landing-search-clear"
            onClick={handleClear}
          >
            <svg className='h-6 w-6 stroke-neutral-5 dark:stroke-neutral-3 hover:stroke-blue-9 dark:hover:stroke-yellow-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" role="img" aria-labelledby="default_x">
              <title id="default_x">Default X</title>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.125 8.125 3.75 3.75m0-3.75-3.75 3.75M17.5 10c0 .9849-.194 1.9602-.5709 2.8701-.3769.91-.9294 1.7368-1.6258 2.4332-.6964.6964-1.5232 1.2489-2.4332 1.6258-.9099.3769-1.8852.5709-2.8701.5709-.98491 0-1.96018-.194-2.87013-.5709-.90994-.3769-1.73673-.9294-2.43317-1.6258-.69644-.6964-1.24889-1.5232-1.6258-2.4332C2.69399 11.9602 2.5 10.9849 2.5 10c0-1.98912.79018-3.89678 2.1967-5.3033S8.01088 2.5 10 2.5c1.9891 0 3.8968.79018 5.3033 2.1967C16.7098 6.10322 17.5 8.01088 17.5 10Z"/>
            </svg>
          </button>
        )}
      </div>

      {searchResults.map((categoryData, index) => (
        <div key={index} className="r-landing-container">
          <div className="title-medium mb-3"><span className='text-neutral-7 dark:text-neutral-4'>{categoryData.category} /</span> {categoryData.group}</div>
          <ResourceLinks linkData={categoryData.links} />
        </div>
      ))}
    </>
  );
};

export default ResourcesLandingSearch;
