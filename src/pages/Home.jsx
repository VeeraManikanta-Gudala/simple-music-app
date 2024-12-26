import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Music App</h1>
      <p>Discover your favorite music</p>
      <div className="features">
        <Link to="/fresh" className="feature">
          <h2>Fresh Releases</h2>
          <p>Check out the latest hits</p>
        </Link>
        <Link to="/weekly" className="feature">
          <h2>Weekly Charts</h2>
          <p>Top trending songs</p>
        </Link>
        <Link to="/alltime" className="feature">
          <h2>All-Time Classics</h2>
          <p>Never gets old</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;