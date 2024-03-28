import React from 'react'
import Header from './Header'



const Table = () => {

    const data = [
        {
            first: "Pankaj",
            last: "Kumar",
            city: "jaipur"
        },
        {
            first: "Karan",
            last: "Kumar",
            city: "jaipur"
        },
        {
            first: "Harshit",
            last: "Kumar",
            city: "jaipur"
        }
    ]


    return (
        <div>
            <Header />


            <div className='container'>
                <div className='row'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">City</th>
                            </tr>
                        </thead>


                        {
                            data.map((res, index) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{res.first}</td>
                                            <td>{res.last}</td>
                                            <td>{res.city}</td>
                                        </tr>

                                    </tbody>
                                )

                            })
                        }
                    </table>


                </div>
            </div>

        </div>
    )
}

export default Table
