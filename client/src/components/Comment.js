import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/Comment.css';
import thumbsUp from '../assets/thumbsUp.png';
import thumbsUpClicked from '../assets/thumbsUpClicked.png';

export default function Comment({commentID, userID, content, state}) {
  const [commentor, setCommentor] = useState({})
  const [alreadyUpvoted, setAlreadyUpvoted] = useState(false);
  const [upvoteCounter, setUpvoteCounter] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${userID}`)
      .then(res => {
        setCommentor(res.data);

        axios.post(`http://localhost:8000/upvotes`, {commentID, userID: state.user.id})
            .then(res => {
              if(res.data.length > 0) {
                setAlreadyUpvoted(true);
              }

              axios.get(`http://localhost:8000/upvotes/${commentor.id}`)
                .then(res => {

                })
                .catch(err => {
                  console.error(err.message);
                })
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
    axios.post('http://localhost:8000/upvotes/add', {commentID, userID: state.user.id})
      .then(res => {
        console.log('update already voted');
      })
      .catch(err => {
        console.error(err.message);
      })
  }

  const deleteUpvote = () => {
    axios.post('http://localhost:8000/upvotes/delete', {commentID, userID: state.user.id})
      .then(res => {
        console.log('deleted');
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
          <h3
            className='comment__upvoteCounter'
          ></h3>
          <img 
            src={alreadyUpvoted ? thumbsUpClicked : thumbsUp}
            className='comment__upvoteButton'
            onClick={() => {
              if (alreadyUpvoted) {
                deleteUpvote();
                setAlreadyUpvoted(false);
                return;
              }
              upvote();
              setAlreadyUpvoted(true);
            }}
          />
        </div>)
      }
    </div>
  )
}
