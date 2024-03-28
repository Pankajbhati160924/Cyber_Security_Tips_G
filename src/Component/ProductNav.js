import React from 'react'
import './Product.css'
import imgg from './Img/undraw_happy_news_hxmt.png'
import imgg2 from './Img/undraw_mobile_login_ikmv.png'
import ProductMap from './ProductMap'

const ProductNav = () => {
    return (
        <>


            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">CONTANT</a>
                            </li>
                            <li className="nav-item  landing" style={{ marginLeft: "100%" }}>
                                <a className="nav-link active">Landing</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-light butN" type="submit">Buy Now</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='container' style={{ marginTop: "7%" }}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1 className='one'>Introduce Your Product <br /> Quickly & Effectively</h1>
                        <p className='second'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus<br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,<br /> sem. Nulla consequat massa quis enim.</p>
                        <button className="btn btn-outline-light butN mt-4" type="submit">Purchase UI Kit</button>
                        <button className="btn btn-outline-light butN ms-3 mt-4" type="submit">Learn More</button>


                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 pt-5'>
                        <img width={"100%"} src={imgg}></img>
                    </div>

                </div>



            </div>

            <div className='container' style={{ marginTop: "15%" }}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 ' style={{ display: "flex", justifyContent: "center", alignContent: 'center', flexDirection: "column" }}>
                        <h1 className='one'>Light, Fast & Powerful</h1>
                        <p className='second'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus<br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,<br /> sem. Nulla consequat massa quis enim.</p>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>
                                <i class="fa-solid fa-helicopter fs-3"></i>
                                <h5 className='h'>Title Goes Here</h5>
                                <p className='p'>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. Aenean commodo ligula <br /> eget dolor. </p>

                            </div>
                            <div>
                                <i class="fa-solid fa-helicopter fs-3"></i>
                                <h5 className='h'>Title Goes Here</h5>
                                <p className='p'>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit. Aenean commodo ligula <br /> eget dolor. </p>

                            </div>
                        </div>


                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 pt-4'>
                        <img width={"100%"} height={"450px"} src={imgg2}></img>
                    </div>

                </div>



            </div>

            <ProductMap />

            <center style={{ marginTop: "5%", backgroundColor: "#E7ECFF", padding: "4%" }}>
                <h2 className='one'>A Price To Suit Everyone</h2>
                <p className='second'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque<br /> penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                <h3 className='for'>$40</h3>
                <p className='second'>UI Design Kit</p>
                <p className='p'>See, One price. Simple.</p>
                <button className="btn btn-outline-light butN" type="submit">Purchase Now</button>



            </center>

            <div className='container-fluid p-4' style={{ backgroundColor: "#E7ECFF" }}>
                <div className='container'>


                    <div className='row '>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <p className='second text-muted'>©2023 Yourcompany</p>

                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-center'>
                            <h3 className='lll'>Landing</h3>

                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-end' >
                            <button className="btn btn-outline-light butN " type="submit">Purchase now</button>

                        </div>

                    </div><hr />



                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div className='last'>
                                <h3 className='second'>Home</h3>
                                <h3 className='second'>About</h3>
                                <h3 className='second'>Contant</h3>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 lastC'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}

export default ProductNav
