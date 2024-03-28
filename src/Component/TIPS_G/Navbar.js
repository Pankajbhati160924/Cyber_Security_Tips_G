import React from 'react'
import './Tips_1.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <center style={{ backgroundColor: "#5CFF23", padding: "10px", fontSize: "24px", fontFamily: "News701 BT", fontWeight: "700" }}>New Batches are Starting Soon !</center>

            <nav class="navbar navbar-expand-lg shadow" style={{ backgroundColor: "#111927", color: "white" }}>
                <div class="container-fluid" >
                    <NavLink style={{ textDecoration: "none" }} to={"/"}>  <a class="navbar-brand Tips" href="#">TIPS-G</a></NavLink>
                    <button class="btn" type="submit">Cyber-Security</button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/All"}> <a class="nav-link active N1" aria-current="page" href="#">All Courses</a></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/About"}>  <a class="nav-link active N1" href="#">Specialized Courses</a></NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/Cer"}>  <a class="nav-link active N1">Certifications</a></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/Ser"}>  <a class="nav-link active N1">Services</a></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/Contact"}>  <a class="nav-link active N1">Contact Us</a></NavLink>
                            </li>
                        </ul>
                        <form class="d-flex gap-2" role="search">
                            <NavLink style={{ textDecoration: "none" }} to={"/Sing"}> <h4 className='N1 pt-2'>Sign In</h4></NavLink>
                            <button class="btn " type="submit">Get Enrolled</button>
                        </form>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar
