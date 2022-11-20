import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostHome from './components/PostHome.js';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostHome />}/>
      </Routes>
    </Router>
  );
}

export default App;
