import React from 'react';
import { useParams } from 'react-router-dom';
import resourcesData from '../../components/resources-components-and-data/resourcesAndDocumentationData.json';

const GroupPage = () => {
  const { slug } = useParams();

  // Find the data for the selected group
  const groupData = resourcesData.find((data) => data.slug === slug);

  if (!groupData) {
    // Handle case when group data is not found
    return <div>Group not found</div>;
  }

  return (
    <div className='w-full flex flex-col p-6 items-center'>
        <div className="max-w-3xl w-full mt-8">
            <div className='headline-large mb-6 text-center'>{groupData.group}</div>
            <ul className='flex flex-col gap-4'>
                {groupData.links.map((link, index) => (
                <li className='bg-white p-4 rounded-md border-2 border-white hover:border-blue-9' key={index}>
                    <a href={link.url} target='_blank' rel='noreferrer noopener'>
                        <div className='title-medium text-blue-9 mb-2'>{link.label}</div>
                        <div className='body-medium text-neutral-9'>{link.description}</div>
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
  );
};

export default GroupPage;
