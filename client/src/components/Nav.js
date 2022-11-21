import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';

export default function Nav() {
  return (
    <div className='nav'>
      <Link className='nav__link' to='/'>HOME</Link>
      <Link className='nav__link' to='/login'>LOGIN</Link>
      <Link className='nav__link' to='/signup'>SIGN UP</Link>
    </div>
  )
}
