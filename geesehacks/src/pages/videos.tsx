import React, { useState, useRef } from 'react';
import './videos.css';
import VideoCard from './VideoCard.js';
import VideoCard2 from './VideoCard2.js';

const Videos: React.FC = () => {
  return (
    <div>
      <VideoCard />
      <VideoCard2 />
    </div>
  );
};

export default Videos;
