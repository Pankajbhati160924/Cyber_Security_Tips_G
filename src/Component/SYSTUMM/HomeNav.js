import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { GrShop } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div className='container-fluid '>
            <nav className="navbar navbar-expand-lg  shadow">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"><img className='Nimg' width={"200px"} src='https://systumm.com/wp-content/uploads/2023/11/Untitled-design-1.png'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: "none" }} to={"/"}>  <a className="nav-link active NH " aria-current="page" href="#">Home</a></NavLink>
                            </li>

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle active NH " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shops
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item NH " href="#">Categories</a></li>
                                    <NavLink style={{ textDecoration: "none" }} to={"/S"}>  <li><a className="dropdown-item NH " href="#">T-Shirts</a></li></NavLink>
                                    <NavLink style={{ textDecoration: "none" }} to={"/SH"}><li><a className="dropdown-item NH " href="#">Hoodies</a></li></NavLink>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <NavLink style={{ textDecoration: "none" }} to={"/A"}>
                                    <a className="nav-link active NH " href="#">About</a></NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink style={{ textDecoration: "none" }} to={"/C"}>
                                    <a className="nav-link  active NH  " href="#">Contact</a></NavLink>
                            </li>
                        </ul>
                        <form className="d-flex gap-4 me-5"  >
                            <NavLink style={{ textDecoration: "none", color: "black" }} to={"/L"}> <h4 href="#" style={{ cursor: "pointer" }} > <FaRegUser /></h4></NavLink>
                            <NavLink style={{ textDecoration: "none", color: "black" }} to={"/SI"}> <h4 href="#" style={{ cursor: "pointer" }} ><GrShop /></h4></NavLink>

                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default HomeNav
