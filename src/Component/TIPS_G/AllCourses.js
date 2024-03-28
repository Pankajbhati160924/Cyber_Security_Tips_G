import React from 'react'
import Navbar from './Navbar'
import { ImFolderOpen } from "react-icons/im";
import { HiLightBulb } from "react-icons/hi2";
import './Tips_1.css'
import Footer from './Footer';
// import dd from '../Img/All_3.png'



const AllCourses = () => {
    const arrAll = [
        {
            img: require('../Img/All_1.png'),
            HeadAll: "MAPT",
            pAll: "Mobile Application Penetration Testing",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_2.png'),
            HeadAll: "CBBS",
            pAll: "Certified Bug Bounty Specialist",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_3.png'),
            HeadAll: "CPTS",
            pAll: "Certified Penetration Testing Specialist",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_4.png'),
            HeadAll: "CEH",
            pAll: "TIPS-G Certified Ethical Hacker",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_5.png'),
            HeadAll: "CFS",
            pAll: "Certified Forensics Specialist",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_6.png'),
            HeadAll: "APT",
            pAll: "Advance Penetration Testing",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_7.png'),
            HeadAll: "AWS",
            pAll: "AWS Associate",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_8.png'),
            HeadAll: "IOT",
            pAll: "IOT Testing",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_9.png'),
            HeadAll: "CFS",
            pAll: "Certified Forensics Specialist",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_10.png'),
            HeadAll: "Linux",
            pAll: "Advance Penetration Testing",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_11.png'),
            HeadAll: "Networking",
            pAll: "Beginner to Advanced Networking Course",
            p1: "28 Modules",
            p2: "Exam Included"
        },
        {
            img: require('../Img/All_12.png'),
            HeadAll: "Python",
            pAll: "Mobile Application Penetration Testing",
            p1: "28 Modules",
            p2: "Exam Included"
        },
    ]
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />

            <div className='container-fluid mt-4 p-3' style={{ backgroundColor: "#1A2332" }}>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_head'>All Courses</h1>
                    <p className='S_p'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p>
                </center>
            </div>
            <div className='text-center mt-4'><button className='p-2 btn2'>Get Your Demo Class</button></div>


            <div className='container mt-5'>
                <div className='row'>

                    {
                        arrAll.map((All) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                    <div className="card text-white text-center pb-2" style={{ backgroundColor: "#1A2332" }} >
                                        <img style={{ width: "100%", height: "230px", padding: "25px" }} src={All.img}></img>
                                        <div >
                                            <h5 className="card-title map_headAll">{All.HeadAll}</h5>
                                            <p className="card-text map_p">{All.pAll}</p><hr />

                                            <div className='d-flex justify-content-evenly'>
                                                <div><p className='map_p'><ImFolderOpen />    {All.p1}</p></div>
                                                <div><p className='map_p'><HiLightBulb />    {All.p2}</p></div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }


                </div>

            </div>

            <Footer />


        </div>
    )
}

export default AllCourses
