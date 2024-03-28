import React from 'react'
import './Rahul.css'
import { NavLink } from 'react-router-dom'

const RahulNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand fs-3 a" href="#">Rahul <span style={{ color: "green" }}>Sath</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li class="nav-item">
                                <a class="nav-link active b" aria-current="page" href="#"><NavLink style={{ textDecoration: "none" }} to='/'>Home</NavLink> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active b" href="#"><NavLink style={{ textDecoration: "none" }} to='/1'>Guestbook</NavLink></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active b"><NavLink style={{ textDecoration: "none" }} to='/2'>Project</NavLink></a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-moon"></i></button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default RahulNav
