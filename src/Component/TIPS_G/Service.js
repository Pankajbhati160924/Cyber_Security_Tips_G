import React from 'react'
import Navbar from './Navbar'
import './Tips_1.css'
import { FaLock } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { DiApple } from "react-icons/di";
import { FaFile } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { SiGoogleearth } from "react-icons/si";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { BsFingerprint } from "react-icons/bs";
import Footer from './Footer';









const Service = () => {

    const arr = [
        {
            icon: <MdOutlineSecurity />,
            Head: "External Penetration Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <FaBox />,
            Head: "Internal Penetration Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <SiGoogleearth />,
            Head: "Web Application Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <MdOutlineReportGmailerrorred />,
            Head: "Vulnerability Scanning",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <MdOutlineSecurity />,
            Head: "Wireless Penetration Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <MdOutlineSecurity />,
            Head: "Social Engineering",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <MdOutlineSecurity />,
            Head: "Physical Penetration Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
        {
            icon: <MdOutlineSecurity />,
            Head: "SOC / Purple Team Testing",
            p: "A risk assessment evaluates the potential threats to your organization and the risks to the confidentiality, integrity, and availability of information.",
            button: "Read More"
        },
    ]


    const arr3 = [
        {
            icon3: <BsFingerprint />,
            Head3: "Forensic Acquisition & Extraction",
            p3: "Forensic acquisition is the careful gathering of digital evidence, preserving its integrity. Extraction involves retrieving pertinent information from seized data using specialized tools. Both processes are integral to uncovering digital evidence for investigations in areas like cybersecurity and criminal cases.",
            button3: "Read More"
        },
        {

            Head3: "TIPS-G Cyber Security USES GLOBALLY REPUTED TOOLS & STANDARD FORENSIC TECHNIQUES.",
            p3: "There’s been a significant rise in the amount of computer, Mobile and internet related crime in recent years. This is hardly surprising as we increasingly rely on computers, mobile phones and the internet to carry out transactions and store and exchange information. The very nature of computers means that whatever you do leaves a trail of evidence, but in order to be used in court this needs to be gathered and handled in such a way that it isn’t compromised. This is where we come into play ! Our team is not only capable of effectively investigating various type of Digital Evidence but also understand the crucial nature and magnitude of the evidence and the importance of keeping it confidential. We undertake all the possible steps to make sure that optimum care is taken while investigating. with dedicated experience in the Digital Forensic Domain and providing Digital Forensic Training & Services to various Law Enforcement Organizations, Investigation Agencies, Defense Organizations, Central/ State Forensic Labs, Research & Development Organizations, Top Multi-Nationals etc."

        },
        {
            icon3: <BsFingerprint />,
            Head3: "Forensic Acquisition & Extraction",
            p3: "Forensic acquisition is the careful gathering of digital evidence, preserving its integrity. Extraction involves retrieving pertinent information from seized data using specialized tools. Both processes are integral to uncovering digital evidence for investigations in areas like cybersecurity and criminal cases.",
            button3: "Read More"
        },
    ]
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />

            <div className='container mt-4'>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_head'>Our Services</h1>
                    <p className='S_p'>The average cost of a data breach is $3.92 million. We help to prevent breaches and keep your company safe. Fortune 500 companies, government agencies, educational, and non-profits are among the organizations targeted every day – many of whom are woefully unprepared to respond to security incidents. That’s where we come in. With decades of combined experience, thousands of hours of practice, and core values from our time in service, we will use our skill set to secure your environment.</p>


                </center>

            </div>

            <div className='container mt-4'>
                <div className='row border p-3 shadow' style={{ backgroundColor: "#1A2332" }}>
                    <div className='col-lg-3 col-md-3 col-sm-6 text-center '>
                        <p style={{ color: "#5CFF23", fontSize: "40px" }}><FaLock /></p>
                        <p style={{ fontSize: "26px", fontFamily: "Archivo", fontWeight: "400" }} >Penetration Testing</p>

                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
                        <p style={{ color: "#5CFF23", fontSize: "40px" }}><MdSecurity /></p>
                        <p style={{ fontSize: "26px", fontFamily: "Archivo", fontWeight: "400" }} >Security Auditing</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
                        <p style={{ color: "#5CFF23", fontSize: "40px" }}><DiApple /></p>
                        <p style={{ fontSize: "26px", fontFamily: "Archivo", fontWeight: "400" }} >Cyber Forensics</p>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 text-center'>
                        <p style={{ color: "#5CFF23", fontSize: "40px" }}><FaFile /></p>
                        <p style={{ fontSize: "26px", fontFamily: "Archivo", fontWeight: "400" }} >Custom Solutions</p>
                    </div>

                </div>

            </div>

            <div className='container mt-4'>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_2head'>Penetration Testing</h1>
                    <p className='S_2p'>From large Fortune 500 companies to local small businesses, we  have helped hundreds of companies<br /> secure their most valuable data.Our solutions are customized to meet your needs and requirements. <br /> When you’re ready to secure your organization, choose us as  your partner.</p>


                </center>

            </div>


            <div className='container'>
                <div className='row'>

                    {
                        arr.map((element) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                    <div className="card text-white text-center pb-2" style={{ backgroundColor: "#1A2332" }} >
                                        <p style={{ color: "#5CFF23", fontSize: "35px" }}>{element.icon}</p>
                                        <div >
                                            <h5 className="card-title map_head">{element.Head}</h5>
                                            <p className="card-text map_p">{element.p}</p>
                                            <button className="btn" type="submit">{element.button}</button>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }


                </div>

            </div>


            <div className='container mt-4'>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_2head'>Security Auditing & Consultation</h1>
                    <p className='S_2p'>Our talented engineers have decades of experience assisting customers<br /> with their security needs.</p>
                </center>
            </div>

            <div className='container'>
                <div className='row'>

                    {
                        arr.map((element) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                    <div className="card text-white text-center pb-2" style={{ backgroundColor: "#1A2332" }} >
                                        <p style={{ color: "#5CFF23", fontSize: "35px" }}>{element.icon}</p>
                                        <div >
                                            <h5 className="card-title map_head">{element.Head}</h5>
                                            <p className="card-text map_p">{element.p}</p>
                                            <button className="btn" type="submit">{element.button}</button>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }


                </div>

            </div>

            <div className='container mt-4'>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_2head'>Cyber Forensics</h1>
                    <p className='S_2p'>Our talented engineers have decades of experience assisting customers with <br />their security needs.</p>
                </center>
            </div>


            <div className='container'>
                < div className='row'>

                    {
                        arr3.map((element_Thrd, value) => {
                            return (
                                <div className='col-lg-4 col-md-4 col-sm-12 mb-4'>
                                    <div className="card text-white text-center pb-2" style={{ backgroundColor: "#1A2332", height: "100%" }} >
                                        <p style={{ color: "#5CFF23", fontSize: "100px" }}>{element_Thrd.icon3}</p>
                                        <div >
                                            <h5 className="card-title map_head">{element_Thrd.Head3}</h5>
                                            <p className="card-text map_p">{element_Thrd.p3}</p>
                                            {
                                                value === 1 ? <></> : <button className="btn" type="submit">{element_Thrd.button3}</button>
                                            }

                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }



                </div>


            </div>

            <div className='container mt-4'>
                <center className='row ps-4 pe-4'>
                    <h1 className='S_2head'>See How We Can Secure Your Assets</h1>
                    <p className='S_2p'>Let’s talk about how TIPS-G Cyber Security can solve your cybersecurity needs.<br /> Give us a call, send us an e-mail, or fill out the contact form below to<br /> get started.</p>
                </center>
            </div>

            <div className='container mt-4'>
                <form className="row g-3 ">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label S_2p">First Name</label>
                        <input type="email" style={{ backgroundColor: "#1A2332" }} className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label S_2p">Last Name</label>
                        <input type="password" style={{ backgroundColor: "#1A2332" }} className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label S_2p">Email</label>
                        <input type="email" style={{ backgroundColor: "#1A2332" }} className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label S_2p">Phone Number</label>
                        <input type="password" style={{ backgroundColor: "#1A2332" }} className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label S_2p">Message</label>
                        <input type="text" style={{ backgroundColor: "#1A2332" }} className="form-control" id="inputAddress" />
                    </div>



                    <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn btn-primary text-dark">Send Message</button>
                    </div>
                </form>

            </div>

            <Footer />


        </div>
    )
}

export default Service
