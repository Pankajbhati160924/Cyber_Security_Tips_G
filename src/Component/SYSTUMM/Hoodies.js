import React from 'react'
import HomeNav from './HomeNav'
import HomeFooter from './HomeFooter'
import { FaList } from "react-icons/fa";
import './Home.css'
import { FaRupeeSign } from "react-icons/fa";

const Hoodies = () => {
    const arr = [

        {
            img11: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-19-at-10.08.03-AM-1.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-2.39.07-PM.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-05-at-10.42.21-PM-3.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-02-at-10.39.58-AM-1.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-23-at-6.01.49-PM.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-27-at-7.35.04-PM-1.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },
        {
            img11: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-27-at-6.56.51-PM.jpeg",
            head: "Haters slogan hoodie- Olive green",
            rs: "1799.00"

        },

    ]
    return (
        <div>
            <HomeNav />
            <div className='bg-secondary'>
                <h1 style={{ fontSize: "50px", fontWeight: "700", fontFamily: "Roboto", padding: "10%" }}>Hoodies & Sweatshirts</h1>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-12'>
                        <div className='d-flex gap-2 mb-4'>
                            <h6 style={{ fontSize: "15px" }}>Home</h6>
                            <h6 style={{ fontSize: "15px" }}>Shop</h6>
                            <h6 style={{ fontSize: "15px" }}>T-Shirts</h6>
                        </div>
                        <button style={{ border: "none", padding: "8px 20px" }}> <FaList /> Hide Filter</button>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12'></div>
                    <div className='col-lg-5 col-md-5 col-sm-12 d-flex gap-3' style={{ paddingTop: "6%" }}>
                        <h4 style={{ fontSize: "22px", fontFamily: "Inter", fontWeight: "800" }}>Showing all 2 results</h4>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Default Sorting
                            </button>
                            <ul class="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            <div className='container mt-5 mb-4'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-12 mt-3  '>
                        <p className='text-muted'>Filter By Price</p>
                        <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
                        <div className='d-flex gap-3 mt-3'>

                            <p style={{ fontSize: "10px" }}>Price: ₹790 — ₹800</p>
                            <button className='Tb' >Filter</button>
                        </div>
                        <p className='text-muted mt-3'>Product Categories</p>

                        <div className='d-flex justify-content-between pt-5'>

                            <p style={{ fontSize: "11px", fontWeight: "600" }}>Hoodies & sweatshirts</p>
                            <button className='Tb'>10</button>
                        </div>
                        <div className='d-flex justify-content-between pt-2'>

                            <p style={{ fontSize: "11px", fontWeight: "600" }}>T-Shirts</p>
                            <button className='Tb'>2</button>
                        </div>
                        <div className='d-flex justify-content-between pt-2'>

                            <p style={{ fontSize: "11px", fontWeight: "600" }}>  Uncategorized</p>
                            <button className='Tb'>1</button>
                        </div>


                    </div>


                    <div className='col-lg-10 gt col-md-10 col-sm-12'>
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            {
                                arr.map((ele) => {
                                    return (
                                        <>

                                            <div class="col">
                                                <div class="card shadowee">
                                                    <img src={ele.img11} height={"400px"} class="card-img-top" alt="..." />
                                                    <div class="card-body mt-5 mb-4">
                                                        <h5 class="card-title text-center">{ele.head}</h5>
                                                        <p class="card-text  text-center"><FaRupeeSign /> {ele.rs}</p>
                                                    </div>
                                                </div>
                                            </div>


                                        </>

                                    )

                                })
                            }


                        </div>


                    </div >

                </div>


            </div>
            <HomeFooter />
        </div>
    )
}

export default Hoodies;
