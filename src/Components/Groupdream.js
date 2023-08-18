import './Groupdream.css'
import Input from '@mui/material/Input';
import {BsStarHalf} from 'react-icons/bs'
import {BiSolidUser} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

const Groupdream=()=>{
    return(
        <div className='Container-fluid'>
            <div className='row'>
                <div className='col-12'>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="name">Group Dreams</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="name">BUILD DREAM <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="name">INSPIRE</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="name">COMMUNITY</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link " href="name">MY DREAMS</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link " href="name">LOGOUT</a>
                                </li>
                                </ul>
                            </div>
                        </nav>
                </div>
            </div>
            <div className='row m-4'>
                <div className='col-md-6 '>
                    <div className='first p-3 m-3'>
                        <h3>Display Name</h3>
                        <hr/>
                        <Input placeholder="name"  className='main'/>
                        <br/>
                        <br/>
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-primary rounded-pill'>Change name</button>
                        </div>
                        
                    </div>

                </div>
                <div className='col-md-6 '>
                    <div className='second p-4 m-3 d-flex flex-column align-items-center'>
                            <h3><BsStarHalf/> $10,000</h3>
                            <h3>Dream Dollars</h3>
                            <br/>
                            <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary rounded-pill'>Invite </button>
                            </div>
                            
                            
                    </div>
                </div>
                <div className='col-12'>
                     <h3 className="text-primary"><BiSolidUser/>My Account</h3>
                     <div className=''>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item videoplayer" title="name"src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div> 

                     </div>
                                  


                </div>
            </div>
            <div className='row m-3 p-3 footer' >
                <div className='col-md-3 p-4 text-white'>
                    <h3>COMPANY</h3>
                    <br/>
                    <p>About Us</p>
                    <p>careers</p>
                    <p>Patners</p>
                    <p>Contact</p>
                </div>
                <div className=' p-4 col-md-3 text-white'>
                    <h3>RESOURCES</h3>
                    <br/>
                    <p>Resources center</p>
                    <p>Integration</p>
                    <p>Patners</p>
                    <p>Glossary</p>
                </div>
                <div className=' p-4 col-md-3 text-white' >
                    <p>Sign up for our monthly newsletter</p>
                    <hr/>   
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <button className="btn btn-primary rounded-pill">Subscribe</button>
                    </div>
                </div>
                <div className='p-4 col-md-3 text-white' >
                    <div className='d-flex'>
                        <img src="Download_on_the_App_Store_Badge.svg.webp" alt=""className='image2 mt-2'/>
                        <img src="en_badge_web_generic.png" className='image3' alt="not found"/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='d-flex'>
                        <ImFacebook className='icones'/>
                        <BsTwitter className='icones'/>
                        <FaLinkedinIn className='icones'/>
                        <IoLogoWhatsapp className='icones'  />
                    </div>
                </div>
                <div className='col-md-3 text-white'>
                    <p>License Agreement</p>

                </div>
                <div className='col-md-3 text-white'>
                    <p>Privacy Policy</p>

                </div>
                <div className='col-md-3 text-white ml-auto'>
                    <p>Copyright @ 2022 Bluelakes, Inc.All rights reserved.</p>

                </div>

            </div>
            
        </div>
    )
}

export default Groupdream