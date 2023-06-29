import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import ResourcesAccordian from "../components/resources-components-and-data/ResourcesAccordian"

import resourcesData from "../components/resources-components-and-data/resourcesData.json";
const Resources = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectedItem = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
    };

    return (
        <>
            <Helmet>
                <title>Resources</title>
            </Helmet>
            <div className="w-full flex flex-col p-6">
                <div className="mb-6 headline-large">Resources</div>
                <ResourcesAccordian items={resourcesData} selectedItem={selectedItem} handleSelectedItem={handleSelectedItem} />
            </div>
        </>
    );
  };

  export default Resources;