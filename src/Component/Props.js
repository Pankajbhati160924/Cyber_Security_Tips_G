import React from 'react'
import Props1 from './Props1'


const Props = () => {

    function hii() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    Featured
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>



        )
    }
    return (
        <div>


            <Props1 key={hii()} />

        </div>
    )
}

export default Props





