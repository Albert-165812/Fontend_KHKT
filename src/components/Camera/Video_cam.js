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
    <div className='box_video' style={{"padding":"16px 0"}}>
      <div className="container-fluid text-center">
        <h1>Nhận dạng <span className="glyphicon glyphicon-camera"></span></h1>
      </div>
      <center className="container-fluid text-center" style={{"marginTop": "1%"}}>
      <Webcam ref={webcamRef} className="img-fluid img-thumbnail" style={{"outline": "solid 2px black","width":"50vw","maxWidth":"580px"}}/>
      </center>
    </div>
  );
};

export default VideoStream;
