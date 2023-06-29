import React, { useState } from 'react';
import ResourceLinks from './ResourcesLinks';


const ResourcesAccordion = ({ items }) => {
  const [activeId, setActiveId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveId(itemId === activeId ? null : itemId);
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.id} className="bg-white hover:bg-neutral-1 rounded-2xl px-6 py-5 shadow-light w-full">
          <button
            className="flex justify-between items-center w-full hover:bg-gray-200 focus:outline-none"
            onClick={() => handleItemClick(item.id)}
          >
            <div className="headline-small">{item.headerTitle}</div>
            <svg
              className={`w-5 h-5 transition-transform transform ${
                item.id === activeId ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {item.id === activeId && (
            <ResourceLinks links={item.links} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResourcesAccordion;
