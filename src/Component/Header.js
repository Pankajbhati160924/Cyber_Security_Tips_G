import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        < >
            {/* <div className='ps-3 gap-5' style={{ display: "flex", backgroundColor: "black", color: "white" }}>
                <NavLink to="/"><h1>Pankaj</h1></NavLink>
                <NavLink to="/hello"><h1>Student</h1></NavLink>
                <NavLink to="/ttt"><h1>Table</h1></NavLink>

            </div> */}

            <nav class="navbar navbar-expand-lg bg-light bg-dark ">
                <div class="container-fluid ">
                    <a class="navbar-brand text-white" href="#"><img style={{ width: "100px", height: "50px" }} src='https://static.vecteezy.com/system/resources/previews/019/136/302/original/adidas-logo-adidas-icon-free-free-vector.jpg'></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav gap-5" style={{ paddingLeft: "30px" }}>
                            <NavLink style={{ color: "white", fontSize: "30px" }} to="/">Home</NavLink>
                            <NavLink style={{ fontSize: "30px", color: "white" }} to="/hello">About</NavLink>
                            <NavLink style={{ fontSize: "30px", color: "white" }} to="/ttt">Table</NavLink>


                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header



