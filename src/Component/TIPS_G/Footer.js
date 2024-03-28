import React from 'react'
import './Tips_1.css'

const Footer = () => {
    return (
        <div className='py-5' style={{ backgroundColor: 'rgb(17, 25, 39)', color: 'white' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12'>
                        <div className='d-flex align-items-center'>
                            <div style={{ fontSize: '30px' }} className='Tips'>TIPS-G</div>
                            <div><button className='btn'>Cyber-Security</button></div>
                        </div>
                        <div>
                            <div className='F1'><i class="fa-solid fa-phone Fi"></i>  +91 7020609101</div>
                            <div className='F1'><i class="fa-solid fa-location-dot Fi"></i>  101-201-301, Chanda Tower, Girnar Colony, Gandhi Path Road, Vaishali Nagar, Jaipur - 302021</div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 i500'>
                        <div className='N1 mt-2'>All Courses</div>
                        <div className='N1 mt-2'>Specialized Courses</div>
                        <div className='N1 mt-2'>Certifications</div>
                        <div className='N1 mt-2'>Services</div>
                        <div className='N1 mt-2'>Contact Us</div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 i500'>
                        <div className='N1 mt-2'>About Us</div>
                        <div className='N1 mt-2'>News and Blog </div>
                        <div className='N1 mt-2'>Franchise</div>
                        <div className='N1 mt-2'>Testimonials</div>
                        <div className='N1 mt-2'>FAQ</div>
                    </div>

                    <div className='col-lg-3 col-md-12 col-sm-12'>
                        <div className='d-flex align-items-center gap-2'>
                            <div className='N1'>Sign In</div>
                            <div><button className='btn'>Get Enrolled</button></div>
                        </div>
                        <div style={{ cursor: "pointer" }} className='F1'><u>Download Application</u></div>
                        <div className='d-flex align-items-center gap-4'>
                            <div style={{ fontSize: '30px' }}><i class="fa-solid fa-play Fi"></i></div>
                            <div style={{ fontSize: '30px' }}><i class="fa-brands fa-app-store-ios Fi"></i></div>
                        </div>
                        <div style={{ cursor: "pointer" }} className='F1'><u>Follow Us :</u></div>
                        <div className='d-flex align-items-center gap-4'>
                            <div style={{ fontSize: '20px' }}><i class="fa-brands fa-instagram Fi"></i></div>
                            <div style={{ fontSize: '20px' }}><i class="fa-brands fa-facebook Fi"></i></div>
                            <div style={{ fontSize: '20px' }}><i class="fa-brands fa-linkedin Fi"></i></div>
                            <div style={{ fontSize: '20px' }}><i class="fa-brands fa-youtube Fi"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 F1 mt-5'>2023 © TIPS-G Cybersecurity</div>
                    <div className='col-lg-2 col-md-12 col-sm-12 F1 mt-5'>Terms of Service</div>
                    <div className='col-lg-2 col-md-12 col-sm-12 F1 mt-5'>Privacy Policy</div>
                    <div className='col-lg-3 col-md-12 col-sm-12 F1 mt-5'>Acceptable Use Policy</div>
                    <div className='col-lg-1 col-md-12 col-sm-12 F1 mt-5'>FAQ</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
