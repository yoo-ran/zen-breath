import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRotateLeft, faRotateRight, faFan, faXmark, faVolumeHigh, faVolumeLow, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

const VideoPlay = ({ item, openV, setOpenV }) => {
    const [isPlaying, setIsPlaying] = useState(true); // Start with playing state
    const [volume, setVolume] = useState(0); // Start muted
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [close, setClose] = useState(true);
    const videoRef = useRef(null);
    const progressBarRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
        updateProgressBar();
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const updateProgressBar = () => {
        const progress = (videoRef.current.currentTime / duration) * 100;
        progressBarRef.current.style.width = `${progress}%`;
    };

    const handleSeek = (e) => {
        const progressBarTotal = document.querySelector(".progress-bar");
        const progressBarWidth = progressBarTotal.clientWidth;
        if (progressBarWidth === 0) return;

        const seekTime = (e.nativeEvent.offsetX / progressBarWidth) * duration;

        if (isFinite(seekTime)) {
            videoRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
            updateProgressBar();
        } else {
            console.error('Invalid seek time:', seekTime);
        }
    };

    const skipBackward = () => {
        videoRef.current.currentTime -= 10;
        setCurrentTime(videoRef.current.currentTime);
        updateProgressBar();
    };

    const skipForward = () => {
        videoRef.current.currentTime += 10;
        setCurrentTime(videoRef.current.currentTime);
        updateProgressBar();
    };

    const closeEvent = () => {
        setOpenV(!openV);
    };

    const volumeIcon = () => {
        if (Number(volume) === 1) {
            return <FontAwesomeIcon icon={faVolumeHigh} />;
        } else if (Number(volume) > 0 && Number(volume) < 1) {
            return <FontAwesomeIcon icon={faVolumeLow} />;
        } else {
            return <FontAwesomeIcon icon={faVolumeOff} />;
        }
    };

    return (
        <div className={`fixed top-0 right-0 flex items-end w-10/12 h-lvh z-50 bg-gray ${close ? "" : "hidden"}`}>
            <video
                ref={videoRef}
                src={item.video}
                className="absolute top-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <div className='absolute top-4 right-4 cursor-pointer flex justify-center items-center text-white md:text-3xl hover:text-darkgray '>
                <FontAwesomeIcon icon={faXmark} onClick={closeEvent} />
            </div>

            <div className='relative flex flex-col justify-end items-center pt-12 pb-4 bg-gradient-to-t from-black via-zinc-900 via-40% w-full z-50 bg-opacity-65 drop-shadow'>


                <div className='w-3/4 flex flex-col gap-y-4'>
                    <section className='flex flex-col text-center text-white '>
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
                            <div className="progress h-full bg-white" ref={progressBarRef}></div>
                        </div>
                        <span className="time-display text-white text-right w-3/12 text-xs md:text-base">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
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

export default VideoPlay;
