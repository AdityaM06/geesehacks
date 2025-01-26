import React, { useState, useRef } from 'react';
import './videos.css';

const Videos: React.FC = () => {
  const videoUrls = [
    'Video1.mp4',
    //'video2.mp4',
    //'video3.mp4',
    // Add more video URLs as needed
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      // Check if video is ready to play
      if (videoRef.current.readyState >= 3) {
        // If video is playing, pause it; if paused, play it
        if (videoRef.current.paused) {
          videoRef.current.play().catch((err) => {
            console.error('Error trying to play the video:', err);
          });
        } else {
          videoRef.current.pause();
        }
      } else {
        console.warn('Video is not ready to play yet.');
      }
    }
  };

  const handleScroll = (event: React.WheelEvent) => {
    if (event.deltaY > 0) {
      setCurrentVideoIndex((prevIndex) => Math.min(prevIndex + 1, videoUrls.length - 1));
    } else {
      setCurrentVideoIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  return (
    <div className="video-container" onWheel={handleScroll}>
      <video
        ref={videoRef}
        src={videoUrls[currentVideoIndex]}
        controls={false}
        autoPlay
        muted
        onClick={handleVideoClick}
        className="video-player"
        onLoadedData={() => {
          // Ensure the video is muted when it's ready to play
          if (videoRef.current) {
            videoRef.current.muted = true;
          }
        }}
      />
    </div>
  );
};

export default Videos;
