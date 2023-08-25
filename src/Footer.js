import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Footer() {
    return (
        <div className='container-fluid p-3 footer' >
            <div className='row'>


                <div className='col-md-3 p-4 text-white'>
                    <h3>COMPANY</h3>
                    <br />
                    <p>About Us</p>
                    <p>careers</p>
                    <p>Patners</p>
                    <p>Contact</p>
                </div>
                <div className=' p-4 col-md-3 text-white'>
                    <h3>RESOURCES</h3>
                    <br />
                    <p>Resources center</p>
                    <p>Integration</p>
                    <p>Patners</p>
                    <p>Glossary</p>
                </div>
                <div className=' p-4 col-md-3 text-white' >
                    <p>Sign up for our monthly newsletter</p>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <button className="btn btn-primary rounded-pill">Subscribe</button>
                    </div>
                </div>
                <div className='p-4 col-md-3 text-white' >
                    <div className='d-flex'>
                        <img src="Download_on_the_App_Store_Badge.svg.webp" alt="" className='image2 mt-3' />
                        <img src="en_badge_web_generic.png" className='image3' alt="not found" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='d-flex'>
                        <ImFacebook className='icones' />
                        <BsTwitter className='icones' />
                        <FaLinkedinIn className='icones' />
                        <IoLogoWhatsapp className='icones' />
                    </div>
                </div>
                <div className='col-md-3 text-white'>
                    <p>License Agreement</p>

                </div>
                <div className='col-md-3 text-white'>
                    <p>Privacy Policy</p>

                </div>
                <div className='col-md-3 text-white ms-auto'>
                    <p>Copyright @ 2022 Bluelakes, Inc.All rights reserved.</p>

                </div>
            </div>

        </div>
    )
}
