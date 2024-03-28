import React, { useState } from 'react'
import HomeNav from './HomeNav'
import { FaRupeeSign } from "react-icons/fa";
import './Home.css'
import HomeFooter from './HomeFooter';

const Home1 = () => {
    const [hower, setHower] = useState(null)

    const MouseEnter = (i) => {
        setHower(i)
    }

    const MouseLeave = () => {
        setHower(null)
    }
    const cardmap = [
        {
            img: "https://systumm.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-14-at-7.51.42-PM-1-600x791.jpeg",
            imgH: "https://systumm.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-14-at-7.45.10-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-14-at-7.45.10-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00",
            imgH: "https://systumm.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-14-at-7.38.15-PM.jpeg"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-16-at-8.40.32-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-27-at-7.35.04-PM-1.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-27-at-6.56.51-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-19-at-10.08.03-AM-1.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-05-at-8.39.44-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-23-at-6.01.49-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-05-at-10.21.06-PM-2.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-05-at-10.42.21-PM-3.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-2.39.07-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-03-at-12.10.07-AM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-06-at-5.06.35-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-06-at-5.52.26-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },
        {
            img: "https://systumm.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-06-at-5.22.15-PM.jpeg",
            title: "Haters slogan hoodie- Olive green",
            res: "1799.00"

        },


    ]
    return (
        <div>
            <div className='container-fluid NavImg '>
                <HomeNav />

            </div>
            <h1 className='text-center mt-4 H'>Hoodies & Sweatshirts</h1>
            <div className='container mt-4 '>
                <div className='row'>
                    {
                        cardmap.map((element, value) => {
                            return (


                                <div key={value} className='col-lg-3 col-md-4 col-sm-6 mt-4 mb-4 '>
                                    <div class="card shadowee" onMouseEnter={() => { MouseEnter(value) }} onMouseLeave={MouseLeave} >
                                        <img className='img' src={value == hower ? element.imgH : element.img} height={"300px"} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h6 class="card-title text-center "> {element.title}</h6>
                                            <p class="card-text text-center"><FaRupeeSign /> {element.res}</p>

                                        </div>
                                    </div>

                                </div>

                            )

                        })
                    }

                </div>


            </div>
            <HomeFooter />

        </div>
    )
}

export default Home1
