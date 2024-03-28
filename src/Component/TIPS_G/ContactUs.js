import React from 'react'
import Navbar from './Navbar'
import './Tips_1.css'
import Footer from './Footer'

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />

            <div className='background'>
                <div className='container mt-4 p-3'>
                    <center className='row' style={{ paddingTop: "10%" }}>
                        <h1 className='S_head'>Register</h1>
                        <p className='S_p'>Start your learning Journey!</p>
                    </center>
                </div>
            </div>
            <center className='ContactPosition'>
                <h2>TIPS-G</h2>
                <button className='btn'>Get Enrolled</button>

            </center>

            <div className='container mt-5 Contact_form w-50'>
                {/* <div className=''> */}
                <form className=' '>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label C_1">Full Name</label>
                        <input type="Name" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label C_1">Username</label>
                        <input type="Name" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label C_1">Email</label>
                        <input type="Email" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label C_1">Confirm Email</label>
                        <input type="Email" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label C_1">Password</label>
                        <input type="password" style={{ backgroundColor: "#061329" }} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label C_1">Confirm Password</label>
                        <input type="password" style={{ backgroundColor: "#061329" }} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label C_1">Country</label>

                        <select className="form-select" style={{ backgroundColor: "#061329" }} aria-label="Default select example">

                            <option value="1">Indian</option>
                            <option value="2">Usa</option>
                            <option value="3">France</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label C_1">Date Of Birth</label>
                        <input type="Date" style={{ backgroundColor: "#061329" }} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" style={{ backgroundColor: "#061329" }} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label C_1" for="exampleCheck1">E-mail me product updates and newsletters.</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Register</button>
                </form>

                {/* </div> */}

            </div>

            <p className='S_p mt-4 '>By registering you agree to our <u>Terms of Service</u>, <u>Privacy Policy</u> and<u>Acceptable Use Policy</u> </p>

            <Footer />

        </div>
    )
}

export default ContactUs
