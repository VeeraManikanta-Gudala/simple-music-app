import { AUDIO_FILES } from '../constants/audioFiles';
import { COVER_IMAGES } from '../constants/images';

export const songs = {
  fresh: [
    {
      id: 1,
      title: "Sunny Morning",
      artist: "Chill Wave",
      album: "Fresh Hits",
      url: AUDIO_FILES.FRESH.SUNNY_MORNING,
      cover: COVER_IMAGES.FRESH.COVER1
    },
    {
      id: 2,
      title: "Urban Life",
      artist: "City Lights",
      album: "Fresh Hits",
      url: AUDIO_FILES.FRESH.URBAN_LIFE,
      cover: COVER_IMAGES.FRESH.COVER2
    }
  ],
  weeklyHits: [
    {
      id: 3,
      title: "Night Drive",
      artist: "Night Owls",
      album: "Weekly Charts",
      url: AUDIO_FILES.WEEKLY.NIGHT_DRIVE,
      cover: COVER_IMAGES.WEEKLY.COVER1
    },
    {
      id: 4,
      title: "Electric Dreams",
      artist: "Voltage",
      album: "Weekly Charts",
      url: AUDIO_FILES.WEEKLY.ELECTRIC_DREAMS,
      cover: COVER_IMAGES.WEEKLY.COVER2
    }
  ],
  alltimeHits: [
    {
      id: 5,
      title: "Timeless Melody",
      artist: "Timeless",
      album: "Greatest Hits",
      url: AUDIO_FILES.ALLTIME.TIMELESS_MELODY,
      cover: COVER_IMAGES.ALLTIME.COVER1
    },
    {
      id: 6,
      title: "Forever Young",
      artist: "Forever",
      album: "Greatest Hits",
      url: AUDIO_FILES.ALLTIME.FOREVER_YOUNG,
      cover: COVER_IMAGES.ALLTIME.COVER2
    }
  ]
};