import React from 'react'
import a from './Img/tv.png'
import b from './Img/BBB.jpg'
import c from './Img/device-pile-in.png'
import d from './Img/AAA.png'


const Netflix2 = () => {
    return (
        <>
            <div className='py-5 bg-black text-white' style={{ borderBottom: '10px solid rgb(35, 35, 35)' }}>
                <div className='container '>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h1 style={{ fontSize: '50px', fontWeight: "700", fontFamily: "Inter" }}>Enjoy on your TV</h1>
                            <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, <br></br> Apple TV, Blu-ray players and more.</h5>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='imgvid'>
                                <img style={{ width: '100%' }} src={a} alt='aa' /></div>
                            {/* <video href={E} autoPlay controls muted /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 bg-black text-white' style={{ borderBottom: '10px solid rgb(35, 35, 35)' }}>
                <div className='container '>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img style={{ width: '100%' }} src={b} alt='aa' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h1 style={{ fontSize: '50px', fontWeight: "700", }}>Download your shows to <br /> watch offline</h1>
                            <h5>Save your favourites easily and always have <br /> something to watch.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 bg-black text-white' style={{ borderBottom: '10px solid rgb(35, 35, 35)' }}>
                <div className='container '>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h1 style={{ fontSize: '50px', fontWeight: "700", }}>Watch everywhere</h1>
                            <h5>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h5>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img style={{ width: '100%' }} src={c} alt='aa' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 bg-black text-white' style={{ borderBottom: '10px solid rgb(35, 35, 35)' }}>
                <div className='container '>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img style={{ width: '100%' }} src={d} alt='aa' />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h1 style={{ fontSize: '50px', fontWeight: "700", }}>Create profiles for kids</h1>
                            <h5>Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br /> your membership.</h5>
                        </div>
                    </div>
                </div>
            </div>








        </>
    )
}

export default Netflix2
