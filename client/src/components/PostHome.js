import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function PostHome() {
  const [todaysPost, setTodaysPost] = useState({});

  useEffect(() => {
    axios.get('https://daylee-backend.onrender.com/posts')
    .then(res => {
      setTodaysPost(res.data);
    })
    .catch(err => {
      console.error(err.message);
    })
  }, [])

  return (
    <div>
      {todaysPost.description}

      <input type='file'>
      </input>
    </div>
  )
}
