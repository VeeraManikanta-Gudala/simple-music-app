import { useState } from 'react';
import { songs } from '../data/songs';
import SongCard from '../components/SongCard';

function FreshReleases() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="category-page">
      <h1>Fresh Releases</h1>
      <div className="songs-grid">
        {songs.fresh.map(song => (
          <SongCard 
            key={song.id} 
            song={song}
            onClick={setSelectedSong}
          />
        ))}
      </div>
    </div>
  );
}

export default FreshReleases;