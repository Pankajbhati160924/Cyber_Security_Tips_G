import React from 'react'
import Navbar from './Navbar'
import img22 from '../Img/Ab_g.png'
import './Tips_1.css'
import Footer from './Footer'
import About3 from '../Img/About_3.png'
import About2 from '../Img/About_2.png'
import About1 from '../Img/About_1.png'


const AboutTips = () => {
    return (
        <div style={{ backgroundColor: "#111927", color: "white" }}>
            <Navbar />

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img width={"100%"} height={"100%"} src='https://s3-alpha-sig.figma.com/img/66f5/64b7/51188fe85435b9ecb67741c27158de89?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UocnGvhF3aE40B4s-Ejo5HEkWDlmtkPYHrR8-gtNQF0RlM3-p6x7pV-rulim1uMekNBHtIFwEJ~3zV0Z6o5i1hJt~l22ZQgnr7VAaAbKY7YAqoFcSUFMsxLWpLSfiFUOFpKMSove4xHoMsMxdxBzLpuEbllbcCKQe5SwDGDIeUaf6p0KWEMkSr6WM5QmGnWzTFQ6jq1oymqyWHPgnKh1nYSVHi-TJxlOzxF-m58rS9TSTo6ukDTwmadt-vGcATXMWis9zK~8d5ixd8Tc6w8UvbpJmhmCI8yCm6V98AQja5rvKGrniXAfMwTs1Z7Yhc3t01C6unJIiwPVj3p9ZYsxJw__'></img>

                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center  flex-column'>
                        <h1 className='AboutHead'>We are changing the <br />old Education<br /> System</h1>

                        <div className='d-flex gap-4'>
                            <button class="btn" type="submit">Courses</button>
                            <button class="btn bg-light" type="submit">Know More</button>

                        </div>


                    </div>

                </div>

            </div>


            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1 className='About_H2'>Our  <span style={{ color: "#05FF00" }}> Journey :</span></h1>
                        <div className='d-flex gap-2'>
                            <div className='bg-info ' style={{ width: "26%", height: "5px" }}></div>
                            <div className='bg-white ' style={{ width: "26%", height: "5px" }}></div>

                        </div>
                        <div className='mt-4'>
                            <h4 className='About_h4'>01. Starting from the Dorm room:</h4>
                            <p className='About_pp'>RNS Group of Companies started as a small dorm room IT Company back in 2016, in Jaipur. The Company also faced a critical shortage of skilled and affordable manpower in order to drive business from Colleges/Universities.</p>

                        </div>
                        <div>
                            <h4 className='About_h4'>02. Solving Manpower Crisis:</h4>
                            <p className='About_pp'>In order to solve the manpower crisis, RNS Group ran in the house On Job Training program by hiring freshers and making them skilled by training them on live projects and procure to produce manpower post-completion of Training.</p>
                        </div>
                        <div>
                            <h4 className='About_h4'>03. Success of OJT:</h4>
                            <p className='About_pp'>Our “On Job Training” program made a super hit in market and helped us to generate over 120+ skilled in-house manpower at affordable prices. RNS Group of Companies grew from a family of 6 to 120 in no time, with a valuation of $ 1 Million, in just one year.</p>
                        </div>
                        <div>
                            <h4 className='About_h4'>04. Birth of TIPS-G:</h4>
                            <p className='About_pp'>With the success of the OJT program, we find a huge difference in the Indian Educational System of theoretical learning and the application of that knowledge in the practical world. We are here to full fill this gap with our TIPS-G program, which empowered high school graduate students to enroll in the corporate world and learn practically, without worrying about a formal education degree. Along with 100% placement assurance.</p>
                        </div>
                        <div>
                            <h4 className='About_h4'>05. Success of TIPS-G:</h4>
                            <p className='About_pp'>In less than 3 years in the market, TIPS-G has made a benchmark in the history of the Indian Educational System by training and placing more than 300+ students and having over 16+ learning centers all over Rajasthan.</p>
                        </div>


                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <img width={"80%"} height={"100%"} style={{ padding: "4%" }} src={img22}></img>
                    </div>

                </div>

            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1 className='About_H2'>Our Secret to<span className='text-danger'> Success:</span></h1>
                        <div className='d-flex gap-2'>
                            <div className='bg-danger ' style={{ width: "40%", height: "5px" }}></div>
                            <div className='bg-white ' style={{ width: "40%", height: "5px" }}></div>

                        </div>
                        <p className='About_p2 mt-3'>Your success is what matters to us, so we have created the simplest process which will lead you to your success, which includes: Graduation degree from India’s Top most Universities, along with Guaranteed placements. In just 3 simple steps.</p>
                        <div>
                            <h3 className='About_HH'>1. Talent Hunt:</h3>
                            <p className='About_pP'>We conduct a talent hunt exam at the national level for 12th-pass students and enroll the selected students in our TIPS-G program according to their interests.</p>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <button className='About_btn'>Know More</button>
                            </div>

                        </div>
                        <div>
                            <h3 className='About_HH'>2.Training:</h3>
                            <p className='About_pP'>After enrolling in their desired course, the students are given practical training from day one in the real working environment, which provides complete skill development to students.</p>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <button className='About_btn'>Know More</button>
                            </div>                        </div>
                        <div>
                            <h3 className='About_HH'>3. Placement:</h3>
                            <p className='About_pP'>As students complete their first 2 years of practical training with us. We ensure them with 1 year of Paid Internship and Guaranteed Placement offers, along with their graduation degree.</p>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <button className='About_btn'>Know More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <div style={{ marginTop: "-20px" }} className='text-center'>

                            <img style={{ width: "260px", height: "260px" }} src={About3}></img><br />
                        </div>
                        <div style={{ marginTop: "-20px" }}>
                            <img style={{ width: "260px", height: "260px" }} src={About2}></img><br />

                        </div>
                        <div style={{ marginTop: "-20px" }} className='text-center'>
                            <img style={{ width: "260px", height: "260px" }} src={About1}></img><br />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default AboutTips
