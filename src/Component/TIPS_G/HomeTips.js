import React from 'react'
import './Tips_1.css'
import g from '../Img/Home_10.png'
import r from '../Img/Home_4.png'
import vec1 from '../Img/Home_5.png'
import vec2 from '../Img/Home_7.png'
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import Panku1 from '../Img/Group 1.png'
import Panku2 from '../Img/Group 1.png'
import Panku3 from '../Img/Group 1.png'
import ImgTips from '../Img/ImgTips1.png'
import ImgTips2 from '../Img/imgTips2.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoIosClock } from "react-icons/io";

const HomeTips = () => {

    const cards = [
        {
            img: vec1,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            img: g,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            img: r,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            img: vec2,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
    ]

    const carding = [
        {
            imgs: <IoIosClock />,
            title: "Guided Courses",
            p: "Certified Penetration Testing Specialist"

        },
        {
            imgs: <PiCursorFill />,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            imgs: <BsFillBookmarkStarFill />,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            imgs: <FaClipboardList />,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            imgs: <FaUserTie />,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
        {
            imgs: <MdOutlineOnlinePrediction />,
            title: "CPTS",
            p: "Certified Penetration Testing Specialist"

        },
    ]

    const Cardsperson = [
        {
            imgs: Panku1,
            title: "Pankaj Kumar"
        },
        {
            imgs: Panku2,
            title: "Pankaj Kumar"
        },
        {
            imgs: Panku3,
            title: "Pankaj Kumar"
        },
    ]

    const Cardsperson1 = [
        {
            imgs: require('../Img/Home_6.png'),
            title: "Nand Kisor Yadav",
            P: "Founder @ Tips-g",
            p1: "Greetings! I'm Nand Kishore Yadav, founder of TIPS-G, your guide to cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity.o cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity.o cybersecurity. With over a decade of hands-on experience, I've navigated the ever-evolving cyber landscape. TIPS-G is a culmination of my passion for simplifying cybersecurity."
        },
        {
            imgs: require('../Img/Home_3.png'),
            title: "Dinesh Kumar",
            P: "Security-Ananlyst",
            p1: "Hello, I'm Dinesh Kumar, a dedicated Security Analyst at TIPS-G Cyber Security. With a passion for ensuring digital landscapes remain secure, I bring a wealth of experience and expertise to the realm of cybersecurity."
        },
        {
            imgs: require('../Img/Home_2.png'),
            title: "Deepak",
            P: "Security-Ananlyst"

        },
    ]
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />
            <div className='text-center'>
                <h1 className='landingpage0'>Your <span className='landingpage1'>cybersecurity</span> <br /> journey starts <span className='landingpage2'>here.</span></h1>
                <p className='landingpage3'>Develop your skills with guided training and prove your expertise with industry <br />
                    certifications. Become a market-ready cybersecurity professional.</p>
                <button style={{ backgroundColor: "#05FF00", margin: "2%", borderRadius: "10px", padding: "1%", border: "none" }}>Get Enrolled</button>
            </div>

            <div className="container">
                <div className="row landingpage8">
                    <div className='col-lg-3'></div>
                    <div className='col-lg-3'>
                        <div class="card landingpage4" >
                            <img src={ImgTips} style={{ position: "relative", top: "-42px" }} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><span className='landingpage6'>Get certified with</span> <span className='landingpage5'>TIPS-G</span></h5>
                                <p class="card-text text-center S_p">Some quick example text to build on the the bulk of the card's content.</p>
                                <h1 className='landingpage7'>Get Enrolled</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div class="card landingpage4" >
                            <img src={ImgTips2} className="card-img-top " style={{ position: "relative", top: "-42px" }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><span className='landingpage6'>Master of Your</span> <br /> <span className='landingpage5'>TIPS-G</span></h5>
                                <p class="card-text text-center S_p">Some quick example text to build on the the bulk of the card's content.</p>
                                <h1 className='landingpage7'>Get Enrolled</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>

                </div>
            </div>

            <div>
                <h1 className='landingpage9 mt-4'>100+</h1>
                <div className="landingpage12">
                    <p className="landingpage13">Learners advancing in cybersecurity.</p>
                </div>
            </div>

            <div>
                <h1 className='landingpage14'>Get <span style={{ color: "#05FF00" }}>TIPS-G</span> certified</h1>
                <div className='text-center'>
                    <button style={{ backgroundColor: "#05FF00", borderRadius: "8px", color: "white", padding: "4px 8px", border: "none" }}>Online Course</button>
                    <button className='ms-2' style={{ color: "white", backgroundColor: "rgb(57, 57, 57)", borderRadius: "8px", padding: "4px 8px", border: "none" }}>Online Course</button>
                </div>
            </div>



            <div className="container mt-5">
                <div className="row">
                    {
                        cards.map((i) => {
                            return (
                                <div className="col-lg-3">
                                    <div className="card bg" style={{ width: "100%", height: "70%" }}>
                                        <img src={i.img} className="card-img-top h-full" style={{ height: "45%", width: "100%" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title cardlanding">{i.title}</h5>
                                            <p className='S_2p' style={{ borderBottom: "2px solid grey" }}>{i.p}</p>
                                            <div className='d-flex gap-3'>
                                                <h6 className='map_p'><img src="https://s3-alpha-sig.figma.com/img/0804/57cd/522a2997c17193d2b47143d41e50a2e2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLKh~~~AwD~DC4M5tn-a20zQHpK2ZMoEFREffxu91od~XTtzavWa~Uh4f3XrlPET0vSycF6ORR92kxNeHeo-XsC-BZ~bTZCmbcwhWwOSxniB-4qfltE9xioX-o7RrvgS3nDWH7YF9D3xMcZv-PjcUiUrq1VaxysTUJMX26hJ7DW0x6ysQgGZO8oS93Kkb7W33fLiyA2SQ-lRXGpqfNaA8DcNCBJIjEktby6n-z8v4LDRYXEX36gTYizAbn2nTk1JPCHu~q44EhIAPvl2U0F0nNPIplNiF-hm7F0AXtYmb4WQG89WoHNpEmJ8lNDB17e7hox6s8NLK2~e4N70UXv-6g__" alt="" />28 Modules</h6>
                                                <h6 className='map_p'>🎖Exam included</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='landingpage17'>
                <div className='text-center'>
                    <h1 className='landingpagw16'>Why TIPS-G <span style={{ color: "#05FF00" }}>Cyber-Security?</span></h1>
                    <p style={{ color: "white" }}>Prepare for your future in cybersecurity with  interactive, guided training and industry
                        certifications. <br />Learn the skills needed to stand out from the competition.</p>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            carding.map((indexs) => {
                                return (
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <div className='bg1'>
                                            <img src={indexs.imgs} style={{ width: "10%", paddingTop: "20px", color: "white" }} alt=""></img>
                                            <h1 className='lgp1 pt-5'>{indexs.title}</h1>
                                            <p className='lgp2'>For every skill level, from beginner to  advanced, Enhance your chances to make  a dream career in the field of cybersecurity </p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <h1 className='lgp3'>Frequently Asked Questions</h1>
                <h1 className='lgp4'>FAQ</h1>
            </div>

            <div className='lgp6'>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
                <div className='lgp7'>
                    <h1 className='lgp5'>Frequently Asked Questions 1</h1>
                    <p className='lgp8'>+</p>
                </div>
            </div>

            <div>
                <div>
                    <h1 className='landingpage9'>100+</h1>
                    <div className="landingpage12">
                        <p className="landingpage13">Listen it from your Fellow students</p>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            Cardsperson.map((Img) => {
                                return (
                                    <div className="col-lg-4 main text-center">
                                        <div className='d-flex align-center' style={{ borderBottom: "3px solid grey" }}>
                                            <div>
                                                <img style={{ borderRadius: "120px", width: "120px", height: "120px", border: "2px solid #05FF00" }} src={Img.imgs} alt="" />
                                            </div>
                                            <div style={{ paddingLeft: "5%", paddingTop: "5%" }}>
                                                <h3 style={{ color: "white" }} className='IMGS1'>{Img.title}</h3>
                                                <div className='d-flex'>
                                                    <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                                                    <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                                                    <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                                                    <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                                                    <i class="fa-solid fa-star" style={{ color: "#11f80d" }}></i>
                                                </div>
                                            </div>


                                        </div>
                                        <p className='IMGS2 pt-2 text-justify'>The TIPS-G Cybersecurity course exceeded my expectations. The hands-on approach, industry-relevant curriculum, and expert instructors provided a solid foundation. The practical skills gained have been invaluable. TIPS-G's commitment to excellence makes it the ideal choice for anyone serious about a career in cybersecurity.</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div>
                <h1 className='landingpage9'>100+</h1>
                <div className="landingpage12">
                    <p className="landingpage13">Meet Our Team</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        Cardsperson1.map((Imgg) => {
                            return (
                                <div className="col-lg-4 main text-center pt-3 pb-3">
                                    <img style={{ borderRadius: "120px", width: "120px", height: "120px", border: "2px solid #05FF00" }} src={Imgg.imgs} alt="" />
                                    <h1 className='nand mt-3'>{Imgg.title}</h1>
                                    <p style={{ color: "grey" }}>{Imgg.P}</p>
                                    <p style={{ color: "white", textAlign: "justify", fontSize: "10px" }}>{Imgg.p1}.</p>
                                    <div style={{ display: 'flex', color: '#05FF00' }}>
                                        <i className="fa-brands fa-square-instagram" style={{ fontSize: '28px', paddingLeft: '10px' }}></i>
                                        <i className="fa-brands fa-square-facebook" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                        <i className="fa-brands fa-linkedin" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                        <i className="fa-brands fa-youtube" style={{ fontSize: '28px', paddingLeft: '30px' }}></i>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='last0'>
                <div>
                    <h1 className='last'>Learn Cybersecurity,</h1>
                    <h1 className='last1'>invest in your <span className='last2'>Career</span></h1>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default HomeTips

