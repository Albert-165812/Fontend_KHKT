import React from 'react'
import VideoStream from '../components/Video_cam'
import Nav from '../layouts/Nav'
const Page_detect = () => {
  return (
    <div className='page page--detect'> 
      {Nav("This is the first")}
      <center>
        <VideoStream/>
      </center>
    </div>
  )
}

export default Page_detect