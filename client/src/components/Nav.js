import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <div className='nav'>
      <Link className='nav__link' to='/'>Home</Link>
      <Link className='nav__link' to='/login'>Login</Link>
      <Link className='nav__link' to='/signup'>Sign Up</Link>
    </div>
  )
}
