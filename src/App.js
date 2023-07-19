// App.jsx

import React from 'react';
import './normalize.css';
import './App.css';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Home from './pages/Home';
import AssetManagementLanding from './pages/asset-management/AssetManagementLanding';
import AssetManagementCheckOut from './pages/asset-management/AssetManagementCheckOut';
import AssetManagementReturn from './pages/asset-management/AssetManagementReturn';
import AssetManagementSwap from './pages/asset-management/AssetManagementSwap';
import Announcements from './pages/Announcements';
import ResourcesLanding from './pages/resources-documentation/ResourcesLanding';
import ResourceGroupBuilder from './pages/resources-documentation/ResourceGroupBuilder';
import ResourceCategoryBuilder from './pages/resources-documentation/ResourceCategoryBuilder';

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
          <Route index element={<Home />} />
          <Route path="asset-management" element={<AssetManagementLanding />} />
          <Route path="asset-management/checkout" element={<AssetManagementCheckOut />} />
          <Route path="asset-management/return" element={<AssetManagementReturn />} />
          <Route path="asset-management/swap" element={<AssetManagementSwap />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="resources/" element={<ResourcesLanding />} />
          <Route path="resources/:category" element={<ResourceCategoryBuilder />} />
          <Route path="resources/:category/:group" element={<ResourceGroupBuilder />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
