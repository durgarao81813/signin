import React from 'react'

export default function Navbar() {
  return (
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
    
  )
}
