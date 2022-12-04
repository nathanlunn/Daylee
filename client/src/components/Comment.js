import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Comment({userID, content}) {
  const [commentor, setCommentor] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${userID}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err.message);
      })
  }, [])

  return (
    <div className='comment'>
      <h3 className='comment__user'>{}</h3>
    </div>
  )
}
