import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/SignUp.css';

export default function SignUp({state, setState}) {
  const [errorMessage, setErrorMessage] = useState('none');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [imageSelected, setImageSelected] = useState({});
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    console.log(imageSelected)
  },[imageSelected])

  const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'pho9c5mj');

    axios.post('https://api.cloudinary.com/v1_1/dnggclzfd/image/upload', formData)
    .then(res => {
      setImageURL(res.data.url);
      setImageSelected(res.data);
    })
    .catch(err => {
      console.error(err.message);
    })
  };

  return (
    <div className='signup'>
      {loading && <div className='signup__spinner'></div>}

      <h2
        className={errorMessage === 'none' ? 'signup__error hide' : 'signup__error'}
      >{errorMessage}</h2>

      <h2 className='signup__title'>Sign Up:</h2>

      <input
        className='signup__input singup__input--name'
        value={name}
        onChange={e => {setName(e.target.value)}}
        placeholder='name'
      ></input>

      <input
        className='signup__input signup__input--email'
        value={email}
        onChange={e => {setEmail(e.target.value)}}
        placeholder='email'
      ></input>

      <input
        className='signup__input signup__input--password'
        value={password}
        onChange={e => {setPassword(e.target.value)}}
        placeholder='password'
      ></input>

      <input
        className='signup__input signup__input--confirmPassword'
        value={confirmPassword}
        onChange={e => {setConfirmPassword(e.target.value)}}
        placeholder='confirm password'
      ></input>

      <input
        className='signup__input signup__input--bio'
        value={bio}
        onChange={e => {setBio(e.target.value)}}
        placeholder='write a short bio for yourself.'
      ></input>

      <h2 className='signup__pickProfilePictureTitle'>Select a Profile Image:</h2>
      <div className='signup__profilePictureContainer'>
        <input
          className='signup__findImageButtons'
          type='file'
          onChange={(e) => {
            uploadImage(e.target.files[0])
          }}
        ></input>

        <Image
          className='signup__profilePicturePreview'
          cloudName='dnggclzfd'
          publicId={imageURL}
        />
      </div>

      <button
        onClick={signup}
      >Sign Up</button>
    </div>
  )
}
