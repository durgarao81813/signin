import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Content from './Content.js'
import Signin from './Signin.js'
import './App.css';

const App=()=>(
  <BrowserRouter>
      <Routes>
        <Route  excat path="/" element={<Content/>}/>
        <Route  excat path="/signin" element={<Signin/>}/>
      </Routes>
  </BrowserRouter>
)

export default App;