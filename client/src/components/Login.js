import axios from 'axios';
import React, {useState} from 'react'

export default function Login({state, setState}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post('http://localhost:8000/users/login', {email, password})
      .then(res => {

      })
      .catch(err => {
        console.error(err.message);
      })
  }

  return (
    <div className='login'>
      <h2 className='login__title'>Login:</h2>
      <input 
        className='login__input login__input--email'
        value={email}
        type='text'
        onChange={(e) => {
          setEmail(e.target.value);
        }} 
      ></input>
      <div className='login__passwordContainer'>
        <input 
          className='login__input login__input--password'
          value={password}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => {
            setPassword(e.target.value);
          }} 
        ></input>
        {showPassword ? (<i 
          class="fa-solid fa-eye-slash"
          onClick={() => {setShowPassword(false)}}
        ></i>) : (<i
          class="fa-solid fa-eye"
          onClick={() => {setShowPassword(true)}}
        ></i>)}
      </div>
      <button
        className='login__submit'
        onClick={login}
      >Login</button>
    </div>
  )
}
