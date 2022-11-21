import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function PostHome({state, setState}) {
  console.log(state);

  return (
    <div>
      {state.topic.title}
    </div>

  )
}
