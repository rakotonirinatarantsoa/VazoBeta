import './Lecteur.css';
import { useState, useRef } from 'react';

export function Lecteur() {
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicCurrentTime, setMusicCurrentTime] = useState('00:00');
  const [musicTotalLength, setMusicTotalLength] = useState('--:--');
  const currentAudio = useRef();

  const handleMusicProgress = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  }

  const handleAudioUpdate = () => {
    // Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    setMusicTotalLength(musicTotalLength0);

    // Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`;

    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  }

  return (
    <div className="music-player-container">
      <audio src="/audio/IZY_Henika.mp3"
        ref={currentAudio}
        onTimeUpdate={handleAudioUpdate}
      >
      </audio>
      <div className="music-player-details">
        <div className="music-info">
          <div className="music-player">Music Player</div>

          <div className="marquee-container">
            <div className="music-title">IZY</div>
          </div>

          <div className="marquee-container">
            <div className="singer">Henika</div>
          </div>
        </div>
        <img src="/images/default-cover.jpg" alt="Song's image" className="music-image" />
      </div>

      <div className="music-player-controller">
        <div className="duration-music">
          <div className="current-time">{musicCurrentTime}</div>
          <div className="end-time">{musicTotalLength}</div>
        </div>
        <input type="range" name="music-bar" className="music-bar" value={audioProgress} onChange={handleMusicProgress} />
        <div className="controls">
          <img src="/images/previous-lecteur.png" alt="previous" className="previous" />
          <img src={isAudioPlaying ? "/images/pause-lecteur.png" : "/images/play-lecteur.png"} alt="play or pause" className="play pause" onClick={handleAudioPlay} />
          <img src="/images/next-lecteur.png" alt="next" className="next" />
        </div>
      </div>
    </div>
  );
}