import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academy from './pages/Academy';
import CrimeIdentifier from './pages/CrimeIdentifier';
import EmergencyTools from './pages/EmergencyTools';
import News from './pages/News';
import Career from './pages/Career';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Bookmarks from './pages/Bookmarks';
import CaseStudies from './pages/CaseStudies';
import IncidentSimulator from './pages/IncidentSimulator';
import Timeline from './pages/Timeline';
import ResourceLibrary from './pages/ResourceLibrary';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/identifier" element={<CrimeIdentifier />} />
          <Route path="/emergency" element={<EmergencyTools />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/simulator" element={<IncidentSimulator />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/resources" element={<ResourceLibrary />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
