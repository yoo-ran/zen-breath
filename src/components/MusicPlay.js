import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faRotateLeft, faRotateRight, faFan, faXmark, faVolumeHigh, faVolumeLow, faVolumeOff } from '@fortawesome/free-solid-svg-icons'

import Images from '../components/importImg';
import Music1 from "../assets/music1.mp3"

const MusicPlay = ({item, openM, setOpenM}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [close, setClose] = useState(true)
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    

    const togglePlayPause = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };
    
      const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
      };
      
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        updateProgressBar();

      };
    
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
      };
    
      useEffect(() => {
        const audioElement = audioRef.current;
        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    
        return () => {
          audioElement.removeEventListener('timeupdate', handleTimeUpdate);
          audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }, []);

      useEffect(()=>{
        formatTime()
      },[currentTime])
    
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      };

      const updateProgressBar = () => {
        const progress = (audioRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      };

      const handleSeek = (e) => {
        const progressBarTotal = document.querySelector(".progress-bar")
        // const progressBarWidth = progressBarRef.current.clientWidth;
        const progressBarWidth = progressBarTotal.clientWidth;
        if (progressBarWidth === 0) return; // Exit early if width is zero to avoid division by zero
      
        const seekTime = (e.nativeEvent.offsetX / progressBarWidth) * duration;
        
        // Check if seekTime is finite (not NaN, Infinity, or -Infinity)
        if (isFinite(seekTime)) {
          audioRef.current.currentTime = seekTime;
          setCurrentTime(seekTime);
          updateProgressBar();
        } else {
          console.error('Invalid seek time:', seekTime);
        }

      };

      const skipBackward = () => {
        audioRef.current.currentTime -= 10;
        setCurrentTime(audioRef.current.currentTime);
        updateProgressBar();
      };

      const skipForward = () => {
        audioRef.current.currentTime += 10;
        setCurrentTime(audioRef.current.currentTime);
        updateProgressBar();
      };

      const closeEvent = () => {
        setOpenM(!openM); 
    }    

    console.log(Number(volume));

    const volumeIcon = () =>{
      if(Number(volume) == 1){
        return <FontAwesomeIcon icon={faVolumeHigh} />
      }else if(Number(volume)>0 && Number(volume)<1){
        return <FontAwesomeIcon icon={faVolumeLow} />
      }else{
        return <FontAwesomeIcon icon={faVolumeOff} />
      }
    }


  return (
    
        <div
            style={{backgroundImage: `url(${Images[item.id-2]})`}}
            className={`absolute flex  justify-center items-center w-full h-full z-50 ${close ? "":"hidden"} `}>
            <audio ref={audioRef} src={Music1} />

            <div className='relative flex flex-col justify-around items-center rounded-3xl bg-[#4F4F4F] w-5/6 h-1/2 md:h-5/6 z-50 bg-opacity-65 drop-shadow border border-[#4F4F4F]'>
                <h1 className='text-white font-bold text-xl text-left w-11/12'><FontAwesomeIcon icon={faFan} /> Daily Meditation</h1>
                <div className='absolute -top-4 -right-4 cursor-pointer flex  justify-center items-center text-white md:text-3xl border rounded-full w-10 h-10 bg-white bg-opacity-50 backdrop-blur-xl drop-shadow hover:bg-darkgray'>
                    <FontAwesomeIcon icon={faXmark} onClick={closeEvent} />
                </div>
                <div className='w-3/4 flex flex-col gap-y-8 '>
                    <section className='flex flex-col text-center text-white md:h-44'>
                        <p className='font-bold text-xl md:text-2xl'>{item.name}</p>
                        <p className='capitalize'>{item.meditation_goal}</p>
                    </section>

                    <section className='flex justify-center gap-x-14 text-xl md:text-2xl text-white'>
                        <button className="control-button" onClick={skipBackward}>
                            <FontAwesomeIcon icon={faRotateLeft} />                    

                        </button>
                        <button className="control-button" onClick={togglePlayPause}>
                            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                        </button>                
                        <button className="control-button" onClick={skipForward}>
                            <FontAwesomeIcon icon={faRotateRight} />                    
                        </button>
                    </section>

                    <section className='flex justify-between items-center'>
                        <div className="progress-bar bg-darkgray w-full h-2 rounded-full flex overflow-hidden" onClick={handleSeek}>
                            <div className="progress  h-full bg-white" ref={progressBarRef}></div>
                        </div>
                        <span className="time-display text-white text-right w-3/12 text-xs md:text-base">{formatTime(currentTime)} / {formatTime(duration)}</span>
                    </section>

                    <div className="volume-control text-white flex items-center gap-x-4">
                        {volumeIcon()}
                        <input 
                            type="range" min="0" max="1" step="0.01" 
                            value={volume} 
                            onChange={handleVolumeChange} 
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>


  );
};

export default MusicPlay