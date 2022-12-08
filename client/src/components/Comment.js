import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/Comment.css';
import thumbsUp from '../assets/thumbsUp.png';
import thumbsDown from '../assets/thumbsDown.png';

export default function Comment({commentID, userID, content, state}) {
  const [commentor, setCommentor] = useState({})
  const [alreadyUpvoted, setAlreadyUpvoted] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${userID}`)
      .then(res => {
        setCommentor(res.data);

        axios.post(`http://localhost:8000/upvotes`, {commentID, userID: state.user.id})
            .then(res => {
              if(res.data.length > 0) {
                setAlreadyUpvoted(true);
              }
            })
            .catch(err => {
              console.error(err.message);
            })
      })
      .catch(err => {
        console.error(err.message);
      })
  }, []);

  const upvote = () => {
    if(alreadyUpvoted) {
      console.log('already upvoted');
      return;
    }
    axios.post('http://localhost:8000/upvotes/add', {commentID, userID: state.user.id})
      .then(res => {
        setAlreadyUpvoted(true);
      })
      .catch(err => {
        console.error(err.message);
      })
  }

  return (
    <div className='comment'>
      <div className='comment__container'>
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
      {state.user.id !== userID && state.user.id &&
        (<div className='comment__upvoteContainer'>
          <img 
            src={thumbsUp}
            className={alreadyUpvoted ? 'comment__upvoteButton grey' :'comment__upvoteButton'}
            onClick={upvote}
          />
        </div>)
      }
    </div>
  )
}
