import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Content from './Content.js'
import Signin from './Signin.js'
import Myaccount from './Myaccount.js'
import Loan from './Loan'
import './App.css';

const App=()=>(
  <BrowserRouter>
      <Routes>
        <Route  excat path="/" element={<Content/>}/>
        <Route  excat path="/signin" element={<Signin/>}/>
        <Route  excat path="/myaccount" element={<Myaccount/>}/>
        <Route excat path="/loan" element={<Loan/>}/>
        
      </Routes>
  </BrowserRouter>
)

export default App;