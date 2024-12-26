import { useState } from 'react';
import { songs } from '../data/songs';

function Albums() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="albums">
      <h1>Albums</h1>
      
      <section>
        <h2>Fresh Releases</h2>
        <div className="songs-list">
          {songs.fresh.map(song => (
            <div key={song.id} className="song-item" onClick={() => setSelectedSong(song)}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Weekly Hits</h2>
        <div className="songs-list">
          {songs.weeklyHits.map(song => (
            <div key={song.id} className="song-item" onClick={() => setSelectedSong(song)}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>All-Time Hits</h2>
        <div className="songs-list">
          {songs.alltimeHits.map(song => (
            <div key={song.id} className="song-item" onClick={() => setSelectedSong(song)}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}

export default Albums;