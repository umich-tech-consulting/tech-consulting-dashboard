import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
//import Home from './pages/Home';
// Asset Management Start
import AssetManagementLanding from './pages/AssetManagement/AssetManagementLanding';
import AssetManagementCheckOut from './pages/AssetManagement/AssetManagementCheckOut';
import CheckoutSubmitSuccess from './pages/AssetManagement/AssetManagementCheckoutSubmitSuccess';
import AssetManagementReturn from './pages/AssetManagement/AssetManagementReturn';
import ReturnSubmitSuccess from './pages/AssetManagement/AssetManagementReturnSubmitSuccess';
import AssetManagementSwap from './pages/AssetManagement/AssetManagementSwap';
// Asset Management End
import Announcements from './pages/Announcements';
import ResourcesLanding from './pages/Resources/ResourcesLanding';
import ResourceGroupBuilder from './pages/Resources/ResourcesGroupBuilder';
import ResourceCategoryBuilder from './pages/Resources/ResourcesCategoryBuilder';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <HashRouter>
      <div>
        <Helmet>
          <title>Asset Management</title>
        </Helmet>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Announcements />} />
          <Route path="asset-management" element={<AssetManagementLanding />} />
          <Route path="asset-management/checkout" element={<AssetManagementCheckOut />} />
          <Route path="asset-management/checkout/success" element={<CheckoutSubmitSuccess />} />
          <Route path="asset-management/return" element={<AssetManagementReturn />} />
          <Route path="asset-management/return/success" element={<ReturnSubmitSuccess />} />
          <Route path="asset-management/swap" element={<AssetManagementSwap />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="resources/" element={<ResourcesLanding />} />
          <Route path="resources/:category" element={<ResourceCategoryBuilder />} />
          <Route path="resources/:category/:group" element={<ResourceGroupBuilder />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
