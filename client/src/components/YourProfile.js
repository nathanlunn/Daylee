import React, {useState, useEffect} from 'react';
import '../styles/YourProfile.css';
import {Image} from 'cloudinary-react';
import axios from 'axios';

export default function YourProfile({state, setState}) {
  const [changeImage, setChangeImage] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [changeBio, setChangeBio] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'pho9c5mj');

    axios.post('https://api.cloudinary.com/v1_1/dnggclzfd/image/upload', formData)
    .then(res => {
      setImageURL(res.data.url);
    })
    .catch(err => {
      console.error(err.message);
    })
  };

  return (
    <div className='profile'>
      <div className='profile__imageContainer'>
        {changeImage ? (
          <div>
            <div className='profile__changePictureContainer hide'>
              <input
                className='profile__chooseNewPicture'
                type='file'
                onChange={(e) => {
                  uploadImage(e.target.files[0])
                }}
              ></input>
            </div>
            <Image
              className='profile__image'
              cloudName='dnggclzfd'
              publicId={imageURL || state.user.image}
            />
          </div>
        ) : (
          <>
            <i class="fa-solid fa-pen-to-square profile__imageIcon hide"></i>
            <Image
              className='profile__image'
              cloudName='dnggclzfd'
              publicId={state.user.image}
            />
            <i 
              class="fa-solid fa-pen-to-square profile__imageIcon"  
              onClick={() => setChangeImage(true)}
            ></i>
          </>
        )}
      </div>

      <h5 className='profile__title'>name:</h5>
      <div className='profile__nameContainer'>
        <i class="fa-solid fa-pen-to-square profile__icon hide"></i>
        <h2 className='profile__info'>{state.user.name}</h2>
        <i
          class="fa-solid fa-pen-to-square profile__icon"
          onClick={() => setChangeName(true)}
        ></i>
      </div>
      
      <h5 className='profile__title'>email:</h5>
      <h2 className='profile__info'>{state.user.email}</h2>

      <h5 className='profile__title'>bio:</h5>
      <div className='profile__bioContainer'>
        <i class="fa-solid fa-pen-to-square profile__icon hide"></i>
        <h2 className='profile__info'>{state.user.bio}</h2>
        <i
          class="fa-solid fa-pen-to-square profile__icon"
          onClick={() => setChangeBio(true)}
        ></i>
      </div>
    </div>
  )
}
