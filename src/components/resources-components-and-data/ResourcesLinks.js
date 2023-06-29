import React from 'react';

const ResourceLinks = ({ links }) => {
  const groupBySubgroup = links.reduce((groups, link) => {
    const subgroup = link.subgroup || 'default';
    if (!groups[subgroup]) {
      groups[subgroup] = [];
    }
    groups[subgroup].push(link);
    return groups;
  }, {});

  return (
    <>
      <hr className='w-full mt-2 h-1 border-neutral-3' />
      <div className="mt-6">
        {Object.entries(groupBySubgroup).map(([subgroup, subgroupLinks]) => (
          <div key={subgroup}>
            {subgroup !== 'default' && (
              <div className="title-small mt-9 mb-2">{subgroup}</div>
            )}
            <div className="flex flex-wrap gap-6">
              {subgroupLinks.map((link, index) => (
                <a
                  className="title-medium bg-neutral-2 hover:bg-neutral-3 px-3 py-2 rounded-lg"
                  title={link.description}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResourceLinks;
