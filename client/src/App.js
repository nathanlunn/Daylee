import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import PostHome from './components/PostHome.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import axios from 'axios';
import Nav from './components/Nav.js';

function App() {
  const [state, setState] = useState({
    user: {},
    topic: {},
    dateToday: ''
  })

  useEffect(() => {
    const today = new Date(Date.now()).toString().slice(0, 15);
    setState(prev => ({...prev, dateToday: today}));
    axios.post('http://localhost:8000/topics/today', {today})
      .then(res => {
        setState(prev => ({...prev, topic: res.data}))
      })
      .catch(err => {
        console.error(err.message);
      })
  }, []);

  return (
    <Router>
      <Nav 
        state={state}
        setState={setState}
      />
      <Routes>
        <Route path='/' element={<PostHome
          state={state}
          setState={setState}
        />}/>
        <Route path='/login' element={<Login 
          state={state}
          setState={setState}
        />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
