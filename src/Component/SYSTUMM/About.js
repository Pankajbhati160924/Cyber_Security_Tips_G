import React from 'react'
import HomeNav from './HomeNav'
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import './Home.css'
import img1 from './System_1.jpg'
import HomeFooter from './HomeFooter';

const About = () => {
    return (
        <div >
            <div className='container-fluid '>
                <HomeNav />



                <div className='container-fluid ' style={{ backgroundColor: "black" }} >
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-white  p-5' style={{ backgroundColor: "black" }}>
                            <p className='Ap'>Elvish Yadav</p>
                            <h1 className='AH'>Creator of quality designs and thinker of fresh ideas.</h1>
                            <p className='Ap'>Welcome to Systumm Clothing, where fashion meets passion! Systumm Clothing is the brainchild of none other than the heartthrob of many Indians, Elvish Yadav. With a vision to create a clothing brand that resonates with his audience, Elvish embarked on a journey to turn his dreams into reality.</p>
                            <p className='Ap'>Elvish Yadav, a name synonymous with creativity and authenticity, has always had a dream to launch his own clothing line. He believes in the power of fashion to bring people closer, to express individuality, and to make a statement. Through Systumm Clothing, he aims to connect with his audience on a more personal level, ensuring that each piece of apparel reflects the essence of his vision.</p>
                            <p className='Ap'>At Systumm Clothing, we stand by our commitment to quality. Elvish Yadav promises never to compromise on the materials, craftsmanship, and design that go into our products. Our clothing is a testament to his unwavering dedication to delivering the best in the most reasonable prices. We believe that everyone deserves to look and feel great, without breaking the bank.</p>
                            <p className='Ap'>Join us on this exciting journey of style, comfort, and self-expression. Systumm Clothing is more than just a brand; it’s a statement, a promise, and a connection. We invite you to explore our collections, discover your own unique style, and become a part of the Systumm family. Welcome to a world where fashion and passion unite. Welcome to Systumm Clothing!</p>
                            <div className='d-flex gap-3 pt-3 fs-3'>
                                <FiTwitter />
                                <FaFacebookF />
                            </div>


                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>

                            <img className='Aimg w-100' src={img1}></img>


                        </div>

                    </div>

                </div>
            </div>
            <HomeFooter />


        </div>
    )
}

export default About
