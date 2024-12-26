import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

function Artists() {
  // Get unique artists
  const artists = [...new Set([
    ...songs.fresh.map(song => song.artist),
    ...songs.weeklyHits.map(song => song.artist),
    ...songs.alltimeHits.map(song => song.artist)
  ])];

  return (
    <div className="artists-page">
      <h1>Artists</h1>
      <div className="artists-grid">
        {artists.map((artist, index) => (
          <Link 
            to={`/artists/${encodeURIComponent(artist)}`} 
            key={index} 
            className="artist-card"
          >
            <h3>{artist}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Artists;