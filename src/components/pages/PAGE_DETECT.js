import React from 'react'
import VideoStream from '../Camera/Video_cam'
import Nav from '../layouts/Nav/Nav'
import "./Page_detect.css"
import axios from 'axios'
const PAGE_DETECT = () => {
  axios.post("/page_current",{
    "page":"DETECT"
  })
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