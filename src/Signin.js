
import './App.css';

import {FiHome} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineApple}from 'react-icons/ai'
import TextField from '@mui/material/TextField';

import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react"


function Signin() {
  const [username,setusername]=useState("")
    const [password,setpassword]=useState("")

    const usernameOf=(event)=>{
        setusername(event.target.value)
    }
    const passwordOf=(event)=>{
        setpassword(event.target.value)
    }
  const navigate=useNavigate()
    const data=async(event)=>{
      event.preventDefault()
      const result= await fetch("http://localhost:5000/userDetails")
      const finalresult= await result.json()
      const finalpassword=finalresult.filter(eachitem=>eachitem.username===username)
      if(password===finalpassword[0   ].password){
        navigate('/Myaccount')
      }
      else{
        console.log("failed")
      }
      console.log(finalpassword)
      
        
    }
  return (  
    <div className="container-fluid main">
      <div className='row'>
        <div className='col-md-4  bg-dark first'>
          
          

        </div>
        <div className='col-md-8' style={{"height":"100vh"}}>
          <div className='row'>
            <div className='col-12 d-flex justify-content-end mt-3'>
              <FiHome className='iconsize'/>
            </div>
          </div>
          <div className='row connect'>
           <form onSubmit={data}>
            <div className='col-12 '>
              <h1>Sign in</h1>
              <p>Completely Empolyee-owened, we're driven with a passion</p>
            </div>
            <div className='col-12 col-md-6 mt-2 ' >
              <div className='d-flex iconbutton justify-content-center'>
              <FcGoogle className='iconsize2'/>
              <p className='m-1'>continue with Google</p>
              </div>
            </div>  
            <div className='col-12 col-md-6 mt-2 ' >
              <div className='d-flex iconbutton justify-content-center bg-dark text-white'>
                <AiOutlineApple className='iconsize2'/>
                <p className='m-1'>continue with Apple</p>
              </div>
            </div>
            <div align="center" className='mt-4'>
              <h5>Or</h5>
            </div>
            <div  className='col-12'>
          
                <TextField id="standard-basic" className="inputtext" label="Enter Your Username or Email *"  onChange={usernameOf} variant="standard"  required />
                <TextField id="standard-basic" className="inputtext" label="Enter Your Password *" type="Password" onChange={passwordOf} variant="standard" required/>
                
            
            <br/>
            <a href="target">Forget Password</a>
            <div className='d-flex justify-content-end mt-5'>
                            <Link to="/"><button type="button" className='btn' >Sign up</button></Link>
                            <button type="submit" className='btn btn-primary'>Continue <AiOutlineArrowRight/></button>

            </div>


            </div>
            </form>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Signin;
