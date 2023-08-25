import React, { useEffect, useState } from 'react'
import './products.css'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'


export default function Products() {
    const [data, setdata] = useState([])
    const [searchData,setsearch]=useState([])
    const [switched,setswitched]=useState("")

    const searchFunction=(event)=>{
        console.log(event.target.value)
        const newdatasearch=searchData.filter(eachitem=>eachitem.title.includes(event.target.value))
        setdata([...newdatasearch])

    }

    const allbutton=()=>{
        setswitched("")
    }
    const menbutton=()=>{
        setswitched("man")
    }
    const womenbutton=()=>{
        setswitched("women's clothing")
    }
    const jewbutton=()=>{
        setswitched("jewelery")
    }
    const elebutton=()=>{
        setswitched("electronics")
    }

    
    
    useEffect(() => {
        const url = 'https://fakestoreapi.com/products'
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json)
                const updatedata= json.map(eachitem=>{
                    if(eachitem.category==="men's clothing"){
                        return(
                            {
                                category:"man",
                                description:eachitem.description,
                                id:eachitem.id,
                                image:eachitem.image,
                                price:eachitem.price,
                                rating:eachitem.rating,
                                title:eachitem.title
                            }
                        )
                    }
                    else{
                        return(
                            {
                                category:eachitem.category,
                                description:eachitem.description,
                                id:eachitem.id,
                                image:eachitem.image,
                                price:eachitem.price,
                                rating:eachitem.rating,
                                title:eachitem.title

                            }
                        )
                    }
                })
                const newdata=updatedata.filter(eachitem=>eachitem.category.includes(switched))
                // console.log(newdata)
                console.log(updatedata)
                setdata([...newdata])
                setsearch([...json])
                

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [switched])
    return (
        <div className=''>
            <div className='row'>
                <div className='col-12 p-4 bg-dark'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                        <a class="navbar-brand text-white" href="name">Group Dreams</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse text-white " id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="name">BUILD DREAM </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="name">INSPIRE</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="name">COMMUNITY</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="name">MY DREAMS</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="name">LOGOUT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image2.avif" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image1.avif" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image3.avif" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

            </div>

            <section className='container-fluid'>
                <div className='p-1 d-flex justify-content-between'>
                    <div>
                    <button className='btn btn-outline-secondary m-1' onClick={allbutton}>All</button>
                    <button className='btn btn-outline-secondary m-1' onClick={menbutton}>Mens</button>
                    <button className='btn btn-outline-secondary m-1'onClick={womenbutton}>Womens</button>
                    <button className='btn btn-outline-secondary m-1' onClick={jewbutton}>Jewelery</button>
                    <button className='btn btn-outline-secondary m-1'onClick={elebutton}>Electronics</button>
                    </div>
                    <div className='mt-2'>
                        <input type="search" placeholder='search' onChange={searchFunction}/>

                    </div>
                    
                    
                     
                    

                </div>
                <div className='d-flex flex-wrap'>
                    {data.map((eachitem, i) => {
                        return (
                            <div className=''>

                                <div className='card m-2 ' style={{ "width": "250px", "height": "420px" }}>
                                    <div className='card-head'>
                                        <img src={eachitem.image} width={200} height={200} alt="" />
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-title'>{eachitem.title}</p>
                                        <p className='card-text'>{eachitem.price}</p>

                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn btn-primary'>Add</button>

                                    </div>



                                </div>
                            </div>

                        )
                    })}
                </div>
            </section>
            <div className='row m-3 p-3 footer' >
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
