import React from 'react'
import okk from './Img/Daa.jpg'

const Photo = () => {

    let styleSheet = {
        backgroundColor: "green",
        width: "500px",
        height: "400px",
        color: "white"
    }
    return (
        <div>

            <div className="card" style={styleSheet}>
                <img src={okk} className="card-img-top w-75 h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on <br />the card title and make up the bulk of<br /> the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Photo
