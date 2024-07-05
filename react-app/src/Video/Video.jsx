import { useState } from 'react';
import './Video.css'

function Video(props) {
  const { title, ChanelName,  img } = props;
  const [likesCount, setLikesCount] = useState(0)

  const increaseLikesByOne = () => {
    setLikesCount(likesCount + 1)
  }
  return(    
  <div className='video'>
        <img className='video-img' src={img} alt="img"></img>
        <p>{ title }</p>
        <p>{ChanelName}</p>
        <div className='video-footer'> 
          <p>like: {likesCount}</p>
          <button onClick={increaseLikesByOne}>like</button>
        </div>
  </div>
  );
}

export default Video;