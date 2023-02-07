import React from 'react'
import VideoStream from '../Camera/Video_cam'
import Nav from '../layouts/Nav/Nav'
import "./Page_detect.css"
const PAGE_DETECT = () => {
  return (
    <div className='page page--detect'> 
      {Nav("This is the first")}
      <center>
        <VideoStream/>
      </center>
    </div>
  )
}

export default PAGE_DETECT