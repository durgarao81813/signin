import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Content from './Content.js'
import Signin from './Signin.js'
import Myaccount from './Myaccount.js'
import Loan from './Loan'
import Mydreams from './Mydreams.js'
import Products from './Products.js';
  

const App=()=>(
  <BrowserRouter>
      <Routes>
        <Route  excat path="/" element={<Content/>}/>
        <Route  excat path="/signin" element={<Signin/>}/>
        <Route excat path="/loan" element={<Loan/>}/> 
        <Route excat path="/products" element={<Products/>}/>
        <Route  excat path="/myaccount" element={<Myaccount/>}/>
        <Route excat path="/mydreams" element={<Mydreams/>}/>
      </Routes>
  </BrowserRouter>
  
)

export default App;