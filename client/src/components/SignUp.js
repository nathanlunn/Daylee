import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

export default function SignUp({state, setState}) {
  const [errorMessage, setErrorMessage] = useState('none');

  return (
    <div className='signup'>
      <h2
        className={errorMessage === 'none' ? 'signup__error hide' : 'signup__error'}
      >{errorMessage}</h2>
    </div>
  )
}
