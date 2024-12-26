import { useState } from 'react';
import { songs } from '../data/songs';

function WeeklyHits() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="category-page">
      <h1>Weekly Hits</h1>
      <div className="songs-grid">
        {songs.weeklyHits.map(song => (
          <div 
            key={song.id} 
            className="song-card"
            onClick={() => setSelectedSong(song)}
          >
            <img src={song.cover} alt={song.title} className="song-cover" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyHits;