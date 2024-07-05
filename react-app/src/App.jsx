import { useState } from 'react'
import Video from './Video/Video'
import { VIDEOS } from './videos'
import './App.css'

function App() {
  return (
    <>
      <div className='video-container'>
        {
          VIDEOS.map((video) => (
            <Video 
            key={video.id}
              title={video.title} 
              ChanelName={video.ChanelName}
              img={video.img}
            />
          ))
        }
      </div>
    </>
  )
}

export default App;
