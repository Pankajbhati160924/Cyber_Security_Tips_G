import React from 'react'
import './Techno.css'
import TechnoNav from './TechnoNav'

const Techno3 = () => {

    const arr3 = [
        {
            url3: require("./Img/Image.png"),
            name3: "Designing Dashboards",
            but3: "2018",
            text3: "Dashboard",
            prag3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            url3: require("./Img/Image Side.png"),
            name3: "Designing Dashboards",
            but3: "2020",
            text3: "Dashboard",
            prag3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            url3: require("./Img/Image Side (1).png"),
            name3: "Designing Dashboards",
            but3: "2019",
            text3: "Dashboard",
            prag3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            url3: require("./Img/Image Side (2).png"),
            name3: "Designing Dashboards",
            but3: "2022",
            text3: "Dashboard",
            prag3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
    ]
    return (
        <div>
            <TechnoNav />

            <div className='container ' style={{ marginTop: "9%" }}>
                <div className='row'>
                    <h1 className='Thead'>Work</h1>

                </div>

            </div>

            <div className='container'>
                <div className='row'>
                    {
                        arr3.map((elem) => {
                            return (
                                <div class="card mb-3 mt-4" style={{ maxWidth: "100%" }}>
                                    <div class="row g-0">
                                        <div className="col-md-4">
                                            <img src={elem.url3} className="img-fluid rounded-start imgg" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title crd">{elem.name3}</h5>
                                                <p className="card-text pcrd"><small className="text-muted"><button className='butC'>{elem.but3}</button>{elem.text3}</small></p>
                                                <p className="card-text ppcrd">{elem.prag3}</p>
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

export default Techno3
