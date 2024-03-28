import React from 'react'
import { NavLink } from 'react-router-dom'

const TechnoNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top ">
                <div className="container-fluid">
                    <h3 className="navbar-brand"><i className="far fa-square"></i><NavLink to='/'>///</NavLink></h3>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">

                        <div className="my-2 my-lg-0 ms-auto">
                            <ul className="navbar-nav mr-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#"><NavLink to='/Blog'>Blog</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" href="#"><NavLink to='/Work'>Work</NavLink></a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default TechnoNav
