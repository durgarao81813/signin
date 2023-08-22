
import './App.css';

import { FiHome } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineApple } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import { useNavigate,Link } from 'react-router-dom'

import { AiOutlineArrowRight } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"



function Content() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")
    const [error, seterror] = useState("")

    const usernameOf = (event) => {
        setusername(event.target.value)
    }
    const passwordOf = (event) => {
        setpassword(event.target.value)
    }

    const confirmOf = (event) => {
        setconfirm(event.target.value)
        if(event.target.value===password){
            seterror("")
        }
        else{
            seterror("password miss matched")
        }

    }

    const navigate = useNavigate()
    const data = async (event) => {
        if (confirm === password) {
            console.log(username,password)
            
            event.preventDefault()
            const options = {
                method: "POST",
                body: JSON.stringify({
                    id: uuidv4(),
                    username: username,
                    password: password
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
            const res = await fetch("http://localhost:5000/userDetails", options)
            const finalresult = await res.json()
            console.log(finalresult)
            navigate('/signin')
            
        }
            
            
        
        else {
            console.log(false)
        }



    }

    return (
        <div className="container-fluid main">
            <div className='row'>
                <div className='col-md-4  bg-dark first'>



                </div>
                <div className='col-md-8' style={{ "height": "100vh" }}>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-end mt-3'>
                            <FiHome className='iconsize' />
                        </div>
                    </div>

                    <form onSubmit={data}>
                        <div className='row connect'>
                            <div className='col-12 '>
                                <h1>Sign up</h1>
                                <p>Completely Empolyee-owened, we're driven with a passion</p>
                            </div>
                            <div className='col-md-6' >
                                <div className='d-flex iconbutton justify-content-center mt-2'>
                                    <FcGoogle className='iconsize2' />
                                    <p className='m-1'>continue with Google</p>
                                </div>
                            </div>
                            <div className='col-md-6' >
                                <div className='d-flex iconbutton justify-content-center bg-dark text-white mt-2'>
                                    <AiOutlineApple className='iconsize2' />
                                    <p className='m-1'>continue with Apple</p>
                                </div>
                            </div>
                            <div align="center" className='mt-4 col-12'>
                                <h5>Or</h5>
                            </div>
                            <div className='col-12'>

                                <TextField id="standard-basic" className="inputtext" label="Enter Your Username or Email *" onChange={usernameOf} variant="standard" required />

                                <TextField id="standard-basic" className="inputtext" label="Enter Your Password *" onChange={passwordOf} type="Password" variant="standard" required />

                                <TextField id="standard-basic" className="inputtext" label="Confirm  Password *" onChange={confirmOf} type="Password" variant="standard" required />
                                <p className='text-danger'>{error}</p>
                                <br />
                                <br />
                                <a href="target">Forget Password  </a>
                                <div className='d-flex justify-content-end mt-5'>
                                    <Link to="/signin"><button type="button" className='btn' >Sign in</button></Link>
                                    <button type="submit" className='btn btn-primary'>Continue <AiOutlineArrowRight /></button>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
}

export default Content;
