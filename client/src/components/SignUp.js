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
  const [bio, setBio] = useState('');
  const [imageSelected, setImageSelected] = useState({});
  const [imageURL, setImageURL] = useState('');

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append('file', imageSelected);
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
    <div className='signup'>
      {loading && <div className='signup__spinner'></div>}

      <h2
        className={errorMessage === 'none' ? 'signup__error hide' : 'signup__error'}
      >{errorMessage}</h2>

      <h2 className='signup__title'>Sign Up:</h2>

      <input
        className='signup__input singup__input--name'
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      ></input>
    </div>
  )
}
