import React from 'react';


const ResourcesLandingTabs = ({ resourcesData, activeTab, handleTabChange }) => {
    const categories = [...new Set(resourcesData.map((tab) => tab.category))];

  return (
    <>
        <div>
            <div className="border-b border-neutral-4">
                {categories.map((category, index) => (
                <button
                    key={index}
                    className={`py-2 px-4 title-medium focus:outline-none ${
                    activeTab === index ? 'border-b-2 border-blue-9 text-blue-9' : ''
                    }`}
                    onClick={() => handleTabChange(index)}
                >
                    {category}
                </button>
                ))}
            </div>
        </div>
    </>

  );
};

export default ResourcesLandingTabs;
