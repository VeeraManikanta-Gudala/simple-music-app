import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../data/songs';

function ArtistDetail() {
  const { artist } = useParams();
  const [selectedSong, setSelectedSong] = useState(null);

  // Get all songs by this artist
  const artistSongs = [
    ...songs.fresh,
    ...songs.weeklyHits,
    ...songs.alltimeHits
  ].filter(song => song.artist === artist);

  return (
    <div className="category-page">
      <h1>{artist}</h1>
      <div className="songs-grid">
        {artistSongs.map(song => (
          <div 
            key={song.id} 
            className="song-card"
            onClick={() => setSelectedSong(song)}
          >
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.album}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistDetail;