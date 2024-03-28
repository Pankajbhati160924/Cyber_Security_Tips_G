import React from 'react'
import HomeNav from './HomeNav'
import { FaCircleInfo } from "react-icons/fa6";
import HomeFooter from './HomeFooter';


const ShopIcon = () => {
    return (
        <div>
            <HomeNav />
            <div className='container mt-5'>
                <h6 style={{ backgroundColor: "rgb(234, 245, 245)" }} className='border p-3 mt-4'><FaCircleInfo style={{ color: 'blue', fontSize: "25px" }} />  Your cart is currently empty.</h6>

            </div>

            <center className='mb-5'>
                <button type="button" class="btn btn-primary mb-3 mt-4 p-3">Return To Shop</button>

            </center>
            <HomeFooter />
        </div>
    )
}

export default ShopIcon
