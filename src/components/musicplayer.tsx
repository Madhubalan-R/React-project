import React, { useState, useRef, useEffect } from 'react';
import '../styles/musicplayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faBackwardFast, faForwardFast } from '@fortawesome/free-solid-svg-icons';

interface Track {
  title: string;
  artist: string;
  src: string;
}

const tracks: Track[] = [
  {
    title: 'Pirates-Bgm',
    artist: 'Tiësto and other DJs',
    src: 'audio/song1.mp3'
  },
  {
    title: 'Plata o plomo..',
    artist: 'Real Sobrino',
    src: 'audio/song2.mp3'
  },
  {
    title: 'Ethirnechal-Motivation',
    artist: ' Anirudh Ravichander',
    src: 'audio/song3.mp3'
  },
  {
    title: 'MASTER- Bgm',
    artist: ' Anirudh Ravichander',
    src: 'audio/song4.mp3'
  },
  {
    title: 'Baddash-song',
    artist: 'Aniruth',
    src: 'audio/song5.mp3'
  },
  {
    title: 'RRR-Song',
    artist: ' Anirudh Ravichander',
    src: 'audio/song6.mp3'
  }
];

const MusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const updateDuration = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('loadedmetadata', updateDuration);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('loadedmetadata', updateDuration);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex(
      (currentTrackIndex - 1 + tracks.length) % tracks.length
    );
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  return (
    <div className="music-player">
      <h3>Now Playing</h3>
      <div className="track-details">
        <img src="https://store-images.s-microsoft.com/image/apps.15085.14115329210069531.946ea4f7-14f3-4b03-b30b-8abb867a790c.8cfe94bc-af0d-4bd8-9164-0ed0deec89e3" alt="image" />
      </div>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={handleNext}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        autoPlay
      />
      <div className="controls">
        <button onClick={handlePrevious}><FontAwesomeIcon icon={faBackwardFast} className="icon" /></button>
        <button onClick={handleRewind}><FontAwesomeIcon icon={faBackward} className="icon" /></button>
        <button onClick={handlePlayPause}>{isPlaying ? <FontAwesomeIcon icon={faPause} className="icon" /> : <FontAwesomeIcon icon={faPlay} className="icon" />}</button>
        <button onClick={handleForward}><FontAwesomeIcon icon={faForward} className="icon" /></button>
        <button onClick={handleNext}><FontAwesomeIcon icon={faForwardFast} className="icon" /></button>
      </div>
      <div className="progress-bar-container">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div className="track-list">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`track ${index === currentTrackIndex ? 'active' : ''}`}
            onClick={() => setCurrentTrackIndex(index)}
          >
            <p>{track.title} - {track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
