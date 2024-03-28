import React from 'react'
import './Techno.css'
import TechnoNav from './TechnoNav'

const Techno2 = () => {

    const arr1 = [
        {
            card: "Post Title",
            card2: "12 Feb 21   |   Design System",
            card3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

        },
        {
            card: "Post Title",
            card2: "12 Feb 21   |   Design System",
            card3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

        },
        {
            card: "Post Title",
            card2: "12 Feb 21   |   Design System",
            card3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

        },
        {
            card: "Post Title",
            card2: "12 Feb 21   |   Design System",
            card3: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

        },
    ]
    return (
        <div>
            <TechnoNav />


            <div className='container ' style={{ marginTop: "9%" }}>
                <div className='row'>
                    <h1 className='Thead'>Blog</h1>

                </div>

            </div>

            <div className='container'>
                <div className='row'>
                    {
                        arr1.map((ele) => {
                            return (
                                <div className='col-lg-12 col-md-12 col-sm-12 mt-4 mb-4'>
                                    <div className="card" style={{ width: "100%" }}>
                                        <div className="card-body">
                                            <h5 className="card-title Chead">{ele.card}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted pt-3 pb-3">{ele.card2}</h6>
                                            <p className="card-text Tpra">{ele.card3}</p>

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

export default Techno2
