import React from 'react'
import Navbar from './Navbar'
import './Tips_1.css'


const SignIn = () => {
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />

            <div className='background'>
                <div className='container mt-4 p-3'>
                    <center className='row' style={{ paddingTop: "10%" }}>
                        <h1 className='S_head'>Welcome Back !</h1>
                        <p className='S_p'>Sign in to continue to TIPS-G</p>
                    </center>
                </div>
            </div>
            <div className='ContactPosition'>
                <h2>TIPS-G</h2>
                <button className='btn'>Get Enrolled</button>

            </div>

            <div className='container Contact_form w-50'>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label C_1">Email</label>
                        <input type="Email" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label C_1">Password</label>
                        <input type="password" style={{ backgroundColor: "#061329" }} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" style={{ backgroundColor: "#061329" }} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label C_1" for="exampleCheck1">Remember me </label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                    <p className='S_p mt-3'>Forgot your password?<span style={{ color: "#5CFF23" }}>Click Here</span></p>
                    <p className='S_p mt-3'>Don’t have an account ? <span style={{ color: "#5CFF23" }}>Register Now</span></p>
                    <p className='S_p mt-3'>© 2023 TIPS-G Cyber Security</p>
                </form>

            </div>



        </div>
    )
}

export default SignIn
