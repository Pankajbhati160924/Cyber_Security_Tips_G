import React from 'react'
import './Netflix.css'

const Nav = () => {
    return (
        <div className='back pb-5' style={{ borderBottom: '10px solid rgb(35, 35, 35)' }}>
            <nav class="navbar ">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-1 text-danger">NETFLIX</a>
                    <form class="d-flex gap-5" role="search">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-language"></i> English
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">English</a></li>
                                <li><a class="dropdown-item" href="#">हिंदी</a></li>

                            </ul>
                        </div>
                        <button class="btn bg-danger text-white" type="submit">Sign In</button>
                    </form>
                </div>
            </nav>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: "15%" }} >
                <h1 className='text-white fw-bold fs-1 text-center'>Unlimited movies, TV shows and more</h1>
                <p className='text-white  fs-5 text-center'>Watch anywhere. Cancel anytime.</p>
                <p className='text-white  fs-5 text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12'></div>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <input style={{ padding: ' 10px 30px ', width: "100%" }} type='text' placeholder='Email address' />
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12'><button style={{ padding: ' 10px 30px ' }} className='btn bg-danger text-white '>Get Started </button></div>
                        <div className='col-lg-3 col-md-12 col-sm-12'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav

