// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [current, setcurrent] = useState(0)

//     const add = setTimeout(() => {
//         setcurrent(current + 1)
//     }, 1000)


//     useEffect(() => {
//         console.log(add)


//     }, [])
//     return (
//         <div>

//             <h1>value :{current} </h1>
//         </div>
//     )
// }

// export default UseEffect



//*********************************************** */

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [a, set] = useState();

//     useEffect(() => {
//         set("first")

//     }, [])

//     return (
//         <div>
//             <div className='d-flex gap-3 m-4'>
//                 <button className={`btn  ${a == "first" && "bg-info"}`} onClick={() => { set("first") }}>First</button>
//                 <button className={`btn  ${a == "second" ? "bg-danger" : ""}`} onClick={() => { set("second") }}>second</button>
//                 <button className={`btn  ${a == "therd" && "bg-info"}`} onClick={() => { set("therd") }}>therd</button>

//             </div>


//             {
//                 a === "first" ? <>pankaj</> : <></>
//             }
//             {
//                 a === "second" ? <>kumar</> : <></>
//             }
//             {
//                 a === "therd" ? <>bhati</> : <></>
//             }

//         </div>
//     )
// }

// export default UseEffect



import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const UseEffectt = () => {
    const [value, setvalue] = useState()

    useEffect(() => {
        setvalue("first")

    }, [])

    return (
        <div>

            <div style={{ display: value == "first" ? "block" : "none" }}>
                <form className='border w-75 m-5 p-5 bg-success'  >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </form>
                <button type="submit" onClick={() => { setvalue("second") }} class="btn btn-primary">Submit</button>
            </div>



            <div style={{ display: value == "second" ? "block" : "none" }}>

                <form className='border w-75 m-5 p-5  bg-primary'>
                    <FaArrowAltCircleLeft className='fs-2 ' onClick={() => { setvalue("first") }} />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </form>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>




        </div>
    )
}

export default UseEffectt
