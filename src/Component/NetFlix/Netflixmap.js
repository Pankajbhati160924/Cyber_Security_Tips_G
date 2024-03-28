import React from 'react'
import './Netflix.css'

const Netflixmap = () => {

    const arr = [
        {
            name: "What Is Netflix ?",
            text: "  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more-on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            name: "How much does Netflix cost?",
            text: "  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        },
        {
            name: "Where can I watch?",
            text: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere. "
        },
        {
            name: "How do I cancel?",
            text: " Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            name: "What can I watch on Netflix?",
            text: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. "
        },
        {
            name: "Is Netflix good for kids?",
            text: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see. "
        },
    ]
    return (
        <div>
            <div className='container-fluid pt-5 pb-5' style={{ backgroundColor: "black" }}>

                <div className='container '>
                    <h1 className='text-white text-center' style={{ fontFamily: "Roboto", fontSize: "70px", fontWeight: "800" }}>Frequently Asked Questions</h1>
                    {
                        arr.map((element) => {
                            return (

                                <div className='row'>
                                    <p>
                                        <button className="btn btn-primary w-100 p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                            {element.name}<i class="fa-solid fa-plus"></i>
                                        </button>
                                    </p>
                                    <div >
                                        <div className="collapse " id="collapseWidthExample">
                                            <div className="card card-body bg-dark text-white" style={{ width: "100%" }}>
                                                {element.text}
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            )
                        })
                    }

                </div>

                <center className='text-white fs-4 mt-5' style={{ fontFamily: "Inter" }}>
                    Ready to watch? Enter your email to create or restart your membership.
                </center>

                <div className='container mt-3'>
                    <div className='row '>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center pt-3'>
                            <input type='text' className='p-2 text-center' placeholder='Enter your Email'></input>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center pt-3'>
                            <button class="btn bg-danger text-white p-2 w-50" style={{ fontWeight: "700" }} type="submit">Get Started</button>


                        </div>

                    </div>

                </div>


            </div>


            <div className='container-fluid  mt-2 pb-5 pt-5' style={{ backgroundColor: "black" }}>
                <div className='container'>
                    <h1 className='a mb-4'>Questions? Call<ins>000-800-919-1694</ins> </h1>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <h3 className='a'><ins>FAQ</ins></h3>
                                    <h3 className='a'><ins>Investor Relations</ins></h3>
                                    <h3 className='a'><ins>Privacy</ins></h3>
                                    <h3 className='a'><ins>Speed Test</ins></h3>
                                    <div class="dropdown pt-4 ">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-language"></i> English
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">English</a></li>
                                            <li><a class="dropdown-item" href="#">हिंदी</a></li>
                                            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                        </ul>
                                    </div>
                                    <h3 className='a pt-4'>Netflix India</h3>



                                </div>
                                <div>
                                    <h3 className='a'><ins>Help Centre</ins></h3>
                                    <h3 className='a'><ins>Jobs</ins></h3>
                                    <h3 className='a'><ins>Cookie Preferences</ins></h3>
                                    <h3 className='a'><ins>Legal Notices</ins></h3>


                                </div>

                            </div>


                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex justify-content-around'>
                                <div>
                                    <h3 className='a'><ins>Account</ins></h3>
                                    <h3 className='a'><ins>
                                        Ways to Watch</ins></h3>
                                    <h3 className='a'><ins>
                                        Corporate Information</ins></h3>
                                    <h3 className='a'><ins>
                                        Only on Netflix</ins></h3>



                                </div>
                                <div>
                                    <h3 className='a'><ins> Media Centre</ins></h3>
                                    <h3 className='a'><ins> Terms of Use</ins></h3>
                                    <h3 className='a'><ins>Contact Us</ins></h3>



                                </div>

                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Netflixmap
