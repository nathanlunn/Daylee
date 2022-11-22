import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';
import name from '../assets/name.png';

export default function Nav() {
  return (
    <div className='nav'>
      <img className='nav__name' src={name}/>
      <div>
        <Link className='nav__link' to='/'>HOME</Link>
        <Link className='nav__link' to='/login'>LOGIN</Link>
        <Link className='nav__link' to='/signup'>SIGN UP</Link>
      </div>
    </div>
  )
}
