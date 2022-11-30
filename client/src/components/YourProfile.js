import React, {useState, useEffect} from 'react';
import '../styles/YourProfile.css';
import {Image} from 'cloudinary-react';
import axios from 'axios';

export default function YourProfile({state, setState}) {
  const [changeImage, setChangeImage] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [changeBio, setChangeBio] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

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

  const changeProfile = (type, content) => {
    axios.post(`http://localhost:8000/users/change/${type}`, {content})
      .then(res => {

      })
      .catch(err => {
        console.error(err.message);
      })
  };

  return (
    <div className='profile'>
      <div className='profile__imageContainer'>
        {changeImage ? (
          <div className='profile__imageEdit'>
            <div className='profile__changePictureContainer hide'>
              <input
                className='profile__chooseNewPicture'
                type='file'
              ></input>

              <div className='profile__buttonContainer'>
                <button
                  className='profile__button profile__button--cancel'
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                >confirm</button>
              </div>
            </div>

            <Image
              className='profile__image'
              cloudName='dnggclzfd'
              publicId={imageURL || state.user.image}
            />

            <div className='profile__changePictureContainer'>
              <input
                className='profile__chooseNewPicture'
                type='file'
                onChange={(e) => {
                  uploadImage(e.target.files[0])
                }}
              ></input>
              
              <div className='profile__buttonContainer'>
                <button
                  className='profile__button profile__button--cancel'
                  onClick={() => {
                    setImageURL('');
                    setChangeImage(false);
                  }}
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                  onClick={() => {changeProfile('image', imageURL)}}
                >confirm</button>
              </div>
            </div>
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
      
      {changeName ? (
        <div>
          <div className='profile__nameContainer'>
            <h5 className='profile__title'>name:</h5>

            <div className='profile__nameContentContainer'>
            <div className='profile__buttonContainer hide'>
                <button
                  className='profile__button profile__button--cancel'
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                >confirm</button>
              </div>

              <input 
                className='profile__changeInput profile__changeInput--name'
                value={name || state.user.name}
                onChange={(e) => {setName(e.target.value)}}
              ></input>

              <div className='profile__buttonContainer'>
                <button
                  className='profile__button profile__button--cancel'
                  onClick={() => {
                    setName(state.user.name);
                    setChangeName(false);
                  }}
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                  onClick={() => {changeProfile('name', name)}}
                >confirm</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='profile__nameContainer'>
            <h5 className='profile__title'>name:</h5>

            <div className='profile__nameContentContainer'>
              <i class="fa-solid fa-pen-to-square profile__icon hide"></i>

              <h2 className='profile__info'>{state.user.name}</h2>
              
              <i
                class="fa-solid fa-pen-to-square profile__icon"
                onClick={() => setChangeName(true)}
              ></i>
            </div>
          </div>
        </div>
      )}
      
      <h5 className='profile__title'>email:</h5>
      <h2 className='profile__info'>{state.user.email}</h2>

      {changeBio ? (
        <div className='profile__bioContainer'>
          <h5 className='profile__title'>bio:</h5>
          <div class='profile__bioContentContainer'>
          <div className='profile__buttonContainer hide'>
                <button
                  className='profile__button profile__button--cancel'
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                >confirm</button>
              </div>

              <textarea 
                className='profile__changeInput profile__changeInput--bio'
                value={bio || state.user.bio}
                onChange={(e) => {setBio(e.target.value)}}
              ></textarea>

              <div className='profile__buttonContainer'>
                <button
                  className='profile__button profile__button--cancel'
                  onClick={() => {
                    setBio(state.user.bio);
                    setChangeBio(false);
                  }}
                >cancel</button>
                <button
                  className='profile__button profile__button--confirm'
                  onClick={() => {changeProfile('bio', bio)}}
                >confirm</button>
              </div>
          </div>
        </div>
      ) : (
        <div className='profile__bioContainer'>
          <h5 className='profile__title'>bio:</h5>
          <div class='profile__bioContentContainer'>
            <i class="fa-solid fa-pen-to-square profile__icon hide"></i>

            <h2 className='profile__info profile__info--bio'>{state.user.bio}</h2>

            <i
              class="fa-solid fa-pen-to-square profile__icon"
              onClick={() => setChangeBio(true)}
            ></i>
          </div>
        </div>
      )}
    </div>
  )
}
