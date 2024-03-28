import React from 'react'
import HomeNav from './HomeNav'
import HomeFooter from './HomeFooter'
import img2 from './System_1.jpg'
import './Home.css'

const Contact = () => {
    return (
        <div>

            <HomeNav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img style={{ width: "100%", height: "600px" }} src={img2}></img>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <h1 style={{ fontFamily: "Roboto", fontWeight: "700" }}>Contact</h1>
                        <p> For any queries regarding systumm.com please mail us at <ins style={{ color: 'blue', cursor: "pointer" }}>help@systumm.com</ins></p>
                        <h5 className='mt-5' style={{ fontFamily: "Roboto", fontWeight: "700" }}>Gurgaon</h5>
                        <p><ins style={{ color: 'blue', cursor: "pointer" }}>help@systumm.com</ins></p>
                    </div>

                </div>

            </div>

            <HomeFooter />

        </div>
    )
}

export default Contact
