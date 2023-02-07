/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { Post_frame } from '../Axios/Axios';
const VideoStream = () => {
  const webcamRef = useRef(null);
  console.log(webcamRef)
  useEffect(() => {
    const interval = setInterval(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      // gui frame image base 64
      Post_frame("change frame", imageSrc)
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='box_video'>
      <Webcam ref={webcamRef} />
    </div>
  );
};

export default VideoStream;
