import React from 'react'
import RahulNav from './RahulNav'
import './Rahul.css'


const Rahul = () => {
    return (
        <div>
            <RahulNav />

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='R1'>Home</h1>

                    </div>

                </div>

            </div>

            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12  text-center'>
                        <img className='img' src='https://rahulseth.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth.77d13c2b.png&w=1920&q=75'></img>
                        <h1 className='Rhead'>Rahul Sath</h1>
                        <p className='text-muted'>Hey my name is Rahul Seth and I am a Frontend Developer</p>

                        <div className='d-flex justify-content-evenly mt-3'>
                            <i class="fa-brands fa-github i"></i>
                            <i class="fa-brands fa-linkedin i"></i>
                            <i class="fa-solid fa-envelope i"></i>
                            <i class="fa-brands fa-twitter i"></i>

                        </div>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 hey mt-4'>
                        <p className='p'>Welcome to my portfolio! I'm a versatile frontend developer specializing in crafting engaging and responsive web applications.</p>
                        <p className='p'>With a strong command of React.js, Tailwind CSS, and TypeScript, along with a solid foundation in sorting algorithms, I'm dedicated to building visually stunning and high-performance user interfaces.</p>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Rahul
