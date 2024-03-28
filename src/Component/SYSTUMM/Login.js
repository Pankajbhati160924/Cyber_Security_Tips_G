import React from 'react'
import HomeNav from './HomeNav'
import HomeFooter from './HomeFooter'

const Login = () => {
    return (
        <div>
            <HomeNav />
            <div className='container mt-4 mb-4'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-6'>
                        <center style={{ fontWeight: "800", fontSize: "40px" }}>Login</center>
                        <div className='mt-5'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address*</label>
                                <input style={{ border: "0", backgroundColor: "rgb(234, 245, 245)" }} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Password*</label>
                                <input style={{ border: "0", backgroundColor: "rgb(234, 245, 245)" }} type="Password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button type="button" class="btn btn-primary w-100 mb-3">Login</button>
                            <p style={{ cursor: "pointer", color: "blue", fontWeight: "700" }} className='mb-3'>Lost your password?</p>



                        </div>

                    </div>
                </div>
            </div>
            <HomeFooter />

        </div>
    )
}

export default Login
