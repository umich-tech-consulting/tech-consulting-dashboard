import React from 'react';


const ResourcesLandingTabs = ({ resourcesData, activeTab, handleTabChange }) => {
  const categories = [...new Set(resourcesData.map((tab) => tab.category))];

  const excludedCategories = ['Training', 'Test']; // These are the categories that will not show up in the rescource tabs

  return (
    <>
      <div>
        <div className="border-b border-neutral-4 dark:border-neutral-7 w-full flex overflow-auto">
          {categories.map((category, index) => {
            if (excludedCategories.includes(category)) {
              return null; // Exclude excluded categories from generating a tab
            }

            return (
              <button
                key={index}
                className={`r-landing-tabs ${
                  activeTab === index ? 'border-b-2 border-blue-10* dark:border-yellow-5* text-blue-10* dark:text-yellow-5*' : 'text-neutral-9 dark:text-neutral-1'
                }`}
                onClick={() => handleTabChange(index)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResourcesLandingTabs;
