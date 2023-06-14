import { FC, useEffect, useRef, useState } from 'react';
import { ReactComponent as PlayIcon } from '../../assets/audioPlayer/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assets/audioPlayer/pause-icon.svg';
import { ReactComponent as DownloadIcon } from '../../assets/audioPlayer/download-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import styles from './audioPlayer.module.css';
import parseDate from '../../service/parseDate';

interface IAudioPlayer {
  track: string;
  isLoad: boolean;
}

const AudioPlayer: FC<IAudioPlayer> = ({ track, isLoad }) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(track));
  const intervalRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    audioRef.current = new Audio(track);
  }, [track, isLoad]);

  const { duration } = audioRef.current;

  const setTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${parseDate(minutes)} : ${parseDate(seconds)}`;
  };

  useEffect(() => {
    if (!isLoad) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isLoad]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  useEffect(() => {
    if (!isLoad) return;
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying, isLoad]);

  const onScrub = (value: string) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = Number(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #002CFB), color-stop(${currentPercentage}, #ADBFDF))
`;

  return (
    <div className={styles.container}>
      <span className={styles.timer}>{setTime(trackProgress)}</span>
      {isPlaying ? (
        <button className={styles.button} type="button" onClick={() => setIsPlaying(false)}>
          <PauseIcon width="8" height="8" />
        </button>
      ) : (
        <button className={styles.button} type="button" onClick={() => setIsPlaying(true)}>
          <PlayIcon width="8" height="10" />
        </button>
      )}
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className={styles.progress}
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        style={{ background: trackStyling }}
      />
      <button className={styles.icon + ' ' + styles.downloadIcon}>
        <DownloadIcon width="13" height="16" />
      </button>
      <button className={styles.icon + ' ' + styles.closeIcon}>
        <CloseIcon width="14" height="14" />
      </button>
    </div>
  );
};

export default AudioPlayer;
