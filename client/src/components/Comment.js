import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/Comment.css';

export default function Comment({userID, content}) {
  const [commentor, setCommentor] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${userID}`)
      .then(res => {
        setCommentor(res.data);
      })
      .catch(err => {
        console.error(err.message);
      })
  }, [])

  return (
    <div className='comment'>
      <div className='comment__commentorInfo'>
        <Image
          className='comment__commentorImage'
          cloudName='dnggclzfd'
          publicId={commentor.image}
        />

        <h3 className='comment__commentorName'>{commentor.name}</h3>
      </div>
      
      <p className='comment__content'>{content}</p>
    </div>
  )
}
