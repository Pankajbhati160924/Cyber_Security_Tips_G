import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Home.css'

const HomeFooter = () => {
    return (
        <div>
            <div className="container-fluid pt-4 pb-4 a">
                <footer className="py-3 my-4">
                    <p className="text-center text-muted ">Important Links</p>

                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-black f">Privacy Policy
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-black f">Refund and Returns Policy
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-black f">Contact Us
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-black f">Terms & Conditions</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-black f">Shipping Policy</a></li>
                    </ul>
                    <div className=' d-flex justify-content-center gap-4'>
                        <FaFacebookF className='Ficon' />
                        <FaInstagram className='Ficon' />
                        <FaTwitter className='Ficon' />

                    </div>
                    <p style={{ fontFamily: "Inter", fontSize: "18px" }} className="text-center text-dark mt-4">© 2023 Systumm Clothing. Built with 3 by NickFlix.in</p>
                </footer>
            </div>

        </div>
    )
}

export default HomeFooter
