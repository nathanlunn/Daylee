import React, {useState, useEffect} from 'react';
import '../styles/YourProfile.css';
import {Image} from 'cloudinary-react';

export default function YourProfile({state, setState}) {
  return (
    <div className='profile'>
      <div className='profile__imageContainer'>
        <Image
          className='profile__image'
          cloudName='dnggclzfd'
          publicId={state.user.image}
        />
      </div>

      <h5 className='profile__title'>name:</h5>
      <div className='profile__nameContainer'>
        <i class="fa-solid fa-pen-to-square hide"></i>
        <h2 className='profile__info'>{state.user.name}</h2>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      
      <h5 className='profile__title'>email:</h5>
      <h2 className='profile__info'>{state.user.email}</h2>

      <h5 className='profile__title'>name:</h5>
      <div className='profile__nameContainer'>
        <i class="fa-solid fa-pen-to-square hide"></i>
        <h2 className='profile__info'>{state.user.name}</h2>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  )
}
