import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import '../styles/SignUp.css';

export default function SignUp({state, setState}) {
  const [errorMessage, setErrorMessage] = useState('none');
  const [loading, setLoading] = useState(false);

  return (
    <div className='signup'>
      {loading && <div className='login__spinner'></div>}

      <h2
        className={errorMessage === 'none' ? 'signup__error hide' : 'signup__error'}
      >{errorMessage}</h2>
    </div>
  )
}
