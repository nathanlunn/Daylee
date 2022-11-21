import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';

export default function PostHome({state, setState}) {
  console.log(state);

  return (
    <div>
      <Image 
        cloudName='dnggclzfd'
        publicId={state.topic.image}
      />
      <h2>{state.topic.title}</h2>
    </div>

  )
}
