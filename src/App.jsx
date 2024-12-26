import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import FreshReleases from './pages/FreshReleases';
import WeeklyHits from './pages/WeeklyHits';
import AllTimeHits from './pages/AllTimeHits';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/fresh">Fresh Releases</Link>
          <Link to="/weekly">Weekly Charts</Link>
          <Link to="/alltime">All-Time Classics</Link>
          <Link to="/artists">Artists</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fresh" element={<FreshReleases />} />
            <Route path="/weekly" element={<WeeklyHits />} />
            <Route path="/alltime" element={<AllTimeHits />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:artist" element={<ArtistDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;