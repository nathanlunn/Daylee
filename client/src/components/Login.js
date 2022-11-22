import React, {useState} from 'react'

export default function Login({state, setState}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      </div>
    </div>
  )
}
