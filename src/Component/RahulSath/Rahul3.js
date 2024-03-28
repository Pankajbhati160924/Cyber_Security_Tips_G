import React from 'react'
import RahulNav from './RahulNav'
import './Rahul.css'

const Rahul3 = () => {
    return (
        <div>
            <RahulNav />
            <div className='container'>
                <div className='row'>
                    <h1 className='R3'>All Projects</h1>

                </div>

            </div><hr />


            <div className='container mt-3 mb-4'>
                <div className='row'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img height={"230px"} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2F7d92854afe667215312e0e0a7f8213b2f4f3ca02-1200x630.png&w=1920&q=75" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title c1">Next JS and tailwind Project</h5>
                                    <p class="card-text c2">Next JS and tailwind Project Next JS and tailwind Project</p>
                                    <button className='btn'>Learn More!</button>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={"230px"} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2Fb1b019a0b4ab39d86f5550c08a1b7133c7e7ae29-1844x883.png&w=1920&q=75" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title c1">Responsive Next JS Dashboard</h5>
                                    <p class="card-text c2">next chart library is being used</p>
                                    <button className='btn'>Learn More!</button>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={"230px"} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2F0cc082b0768e35fc3401761215a095e258923510-284x177.jpg&w=1920&q=75" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title c1">Portfolio website nextjs</h5>
                                    <p class="card-text c2">I have created a cool portfolio with nextjs and sanity.io. Its fast and cool so you also create one!</p>
                                    <button className='btn'>Learn More!</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Rahul3
