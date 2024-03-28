import React from 'react'
import img1 from './Img/Group 1.png'
import './Techno.css'
import TechnoNav from './TechnoNav'
// import 

const Techno = () => {

    const arr = [
        {
            url: require("./Img/Image.png"),
            name: "Designing Dashboards",
            but: "2020",
            text: "Dashboard",
            prag: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            url: require("./Img/Image Side.png"),
            name: "Designing Dashboards",
            but: "2020",
            text: "Dashboard",
            prag: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
    ]
    return (
        <div>
            <TechnoNav />


            <div className='container ' style={{ marginTop: "10%" }}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12' >
                        <h1 className='one'>Hi, I'm John! <br />Creative Technologist</h1>
                        <p className='two'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation<br /> veniam consequat sunt nostrud amet.</p>
                        <button className="btn btn-outline-light  mt-4 butN" type="submit">Check my Work</button>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12' >
                        <img className='img' src={img1}></img>

                    </div>

                </div>

            </div>

            <div className='container-fluid mt-4' style={{ backgroundColor: "#EDF7FA" }}>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between mt-4'>
                            <h3 className='thrd'>Recent Posts</h3>
                            <h3 className='thrd' style={{ color: "#00A8CC" }}>View All</h3>


                        </div>


                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 mt-4 mb-4'>
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <h5 className="card-title ">Post Title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted pt-3 pb-3">12 Feb 21   |   Design System</h6>
                                        <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 mt-4 mb-4'>

                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <h5 className="card-title ">Post Title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted pt-3 pb-3">12 Feb 21   |   Design System</h6>
                                        <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


            <div className='container mt-4  '>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between '>
                        <h3 className='thrd'>Recent Posts</h3>
                        <h3 className='thrd' style={{ color: "#00A8CC" }}>View All</h3>


                    </div>


                    {
                        arr.map((element) => {
                            return (
                                <div class="card mb-3 mt-4" style={{ maxWidth: "100%" }}>
                                    <div class="row g-0">
                                        <div className="col-md-4">
                                            <img src={element.url} className="img-fluid rounded-start imgg" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title crd">{element.name}</h5>
                                                <p className="card-text pcrd"><small className="text-muted"><button className='butC'>{element.but}</button>{element.text}</small></p>
                                                <p className="card-text ppcrd">{element.prag}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }





                </div>

            </div>

            <center className='mt-5'>
                <div>
                    <i class="fa-brands fa-facebook-f icon"></i>
                    <i class="fa-brands fa-instagram icon ps-3"></i>
                    <i class="fa-brands fa-twitter icon ps-3"></i>

                </div>


                <p className='last mt-3'>© 2022 Your Name. All rights reserved.</p>
            </center>

        </div>
    )
}

export default Techno
