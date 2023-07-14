import './normalize.css'
import './App.css';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Home from './pages/Home';
import Management from './pages/AssetManagement';
import AssetManagement from './pages/AssetManagement';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';

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
          <Route path='asset-management' element={<AssetManagement />} />
          <Route path='announcements' element={<Announcements />} />
          <Route path='resources' element={<Resources />} />
        </Route>
      </Routes>
      <Routes>
        {/* http://localhost:3001/tech-consulting-automation#/google-sites/management */}
        <Route path='/google-sites'>
          <Route path='management' element={<Management />} />
          <Route path='asset-management' element={<AssetManagement />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
