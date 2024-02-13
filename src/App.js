import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Home from './pages/Home';
// Asset Management Start
import AssetManagementLanding from './pages/AssetManagement/AssetManagementLanding';
import AssetManagementCheckOut from './pages/AssetManagement/AssetManagementCheckOut';
import CheckoutSubmitSuccess from './pages/AssetManagement/AssetManagementCheckoutSubmitSuccess';
import AssetManagementReturn from './pages/AssetManagement/AssetManagementReturn';
import ReturnSubmitSuccess from './pages/AssetManagement/AssetManagementReturnSubmitSuccess';
import AssetManagementSwap from './pages/AssetManagement/AssetManagementSwap';
import ProgramOverview from './pages/AssetManagement/ProgramOverview';
// Asset Management End
import Warranty from './pages/Warranty/WarrantyLanding';
import Announcements from './pages/Announcements';
import ResourcesLanding from './pages/Resources/ResourcesLanding';
import ResourceGroupBuilder from './pages/Resources/ResourcesGroupBuilder';
import ResourceCategoryBuilder from './pages/Resources/ResourcesCategoryBuilder';
import ScrollToTop from './components/ScrollTop';
// Auth
import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import authConfig from "./authConfig";
import Login from "./components/Login";
import Callback from "./components/Callback";

function App() {
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    ...authConfig,
  });

  function authorize() {
    userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  }

  function clearAuth() {
    userManager.signoutRedirect();
  }

  const [authenticated, setAuthenticated] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [userManager]);

  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Asset Management</title>
        </Helmet>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={<Login auth={authenticated} handleLogin={authorize} />}
          />
          <Route
            path="/redirect_uri"
            element={
              <Callback
                auth={authenticated}
                setAuth={setAuthenticated}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                handleLogout={clearAuth}
                userManager={userManager}
              />
            }
          />
          <Route path="asset-management" element={<AssetManagementLanding />} />
          <Route path="asset-management/checkout" element={<AssetManagementCheckOut />} />
          <Route path="asset-management/checkout/success" element={<CheckoutSubmitSuccess />} />
          <Route path="asset-management/return" element={<AssetManagementReturn />} />
          <Route path="asset-management/return/success" element={<ReturnSubmitSuccess />} />
          <Route path="asset-management/swap" element={<AssetManagementSwap />} />
          <Route path="asset-management/program-overview" element={<ProgramOverview />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="resources/" element={<ResourcesLanding />} />
          <Route path="resources/:category" element={<ResourceCategoryBuilder />} />
          <Route path="resources/:category/:group" element={<ResourceGroupBuilder />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
