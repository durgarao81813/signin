
import './App.css';

import {FiHome} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineApple}from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {AiOutlineArrowRight} from 'react-icons/ai';


function Signin() {
  return (  
    <div className="container-fluid main">
      <div className='row'>
        <div className='col-md-4  bg-dark first'>
          
          

        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-end mt-3'>
              <FiHome className='iconsize'/>
            </div>
          </div>
          <div className='row connect'>
           <form>
            <div className='col-12 '>
              <h1>Sign in</h1>
              <p>Completely Empolyee-owened, we're driven with a passion</p>
            </div>
            <div className='col-12 col-lg-6 mt-3 ' >
              <div className='d-flex iconbutton justify-content-center'>
              <FcGoogle className='iconsize2'/>
              <p className='m-1'>continue with Google</p>
              </div>
            </div>  
            <div className='col-12 col-lg-6 mt-3' >
              <div className='d-flex iconbutton justify-content-center'>
                <AiOutlineApple className='iconsize2'/>
                <p className='m-1'>continue with Apple</p>
              </div>
            </div>
            <div align="center" className='mt-4'>
              <h5>Or</h5>
            </div>
            <div  className='col-12'>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="standard-basic" label="Enter Your Username or Email *"  variant="standard"  required />
                <TextField id="standard-basic" label="Enter Your Password *" type="Password" variant="standard" required/>
                
            </Box>
            <br/>
            <a href="target">Forget Password</a>
            <div className='d-flex justify-content-end mt-5'>
                            <button type="button" className='btn' >Sign up</button>
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
