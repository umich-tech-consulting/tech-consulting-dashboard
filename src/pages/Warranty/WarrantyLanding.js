import React from "react";
import { Helmet } from "react-helmet";
import WarrantyHeader from "../../components/Warranty/WarrantyHeader";
import WarrantySearchbox from "../../components/Warranty/WarrantySearchbox";
import WarrantyPrimaryResults from "../../components/Warranty/WarrantyPrimaryResults";
import WarrantyEligibilityCriteria from "../../components/Warranty/WarrantyEligibilityCriteria";
import WarrantyRelevantLinks from "../../components/Warranty/WarrantyRelevantLinks";

const WarrantyLanding = () => {
  return (
    <>
      <Helmet>
        <title>Warranty Check</title>
      </Helmet>
      <div className="w-full flex flex-col p-6 fade-in text-neutral-9 items-center">
        <div className="max-w-3xl w-full flex flex-col gap-6">
          <div className="flex flex-col gap-12">
            <WarrantyHeader />
            <WarrantySearchbox />
          </div>
          <WarrantyPrimaryResults />
          <WarrantyEligibilityCriteria />
          <WarrantyRelevantLinks />
        </div>
      </div>
    </>
  );
};

export default WarrantyLanding;
