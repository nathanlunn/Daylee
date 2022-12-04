import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/PostHome.css';
import Comment from './Comment.js';

export default function PostHome({state, setState}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/topics/comments/${state.topic.id}`)
      .then(res => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch(err => {
        console.error(err.message);
      })
  }, [state.topic])

  const commentList = comments.map(comment => {
    return (
      <Comment
        key={comment.id}
        userID={comment.user_id}
        content={comment.content}
      />
    )
  })

  return (
    <div className='topic'>
      <Image 
        className='topic__image'
        cloudName='dnggclzfd'
        publicId={state.topic.image}
      />
      
      <h2 className='topic__title'>{state.topic.title}</h2>

      <div className='topic__commentsList'>
        {commentList}
      </div>
    </div>
  )
}
