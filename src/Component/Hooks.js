// import React, { useState } from 'react'

// const Hooks = () => {
//     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     const [value, setvalue] = useState(0)

//     function okk() {
//         if (value < a.length - 1) {

//             setvalue(value + 1)
//         }
//     }
//     return (
//         <div>
//             <h1>Change value : {a[value]} </h1>
//             <button onClick={okk}>okk</button>

//         </div>
//     )
// }

// export default Hooks



//*********************************************************** */


// import React, { useState } from 'react'

// const Hooks = () => {
//     const [currentText, setcurrentText] = useState("black")
//     const [currentBG, setcurrentBG] = useState("blue")



//     const ColorChange = () => {
//         setcurrentText(currentText === "black" ? "red" : "white")
//         setcurrentBG(currentBG === "blue" ? "pink" : "orange")
//     }

//     return (
//         <div>

//             <h1 className='m-5' style={{ color: currentText, backgroundColor: currentBG }}>RNS IT</h1>

//             <button onClick={ColorChange} className='btn btn-info m-5'>Click</button>


//         </div>
//     )
// }

// export default Hooks



//************************************************************ */











// import React, { useState } from 'react'

// const Hooks = () => {
//     const [current, setcurrent] = useState(0);

//     const ChangeValue = () => {
//         setcurrent(current + 4)
//     }
//     return (
//         <div>
//             <h1>This is value : {current}</h1>
//             <button onClick={ChangeValue} className='btn btn-info m-5'>Click Me</button>

//         </div>
//     )
// }

// export default Hooks

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// import React, { useState } from 'react'

// const Hooks = () => {

//     let arr = ["A", "B", "C", "D", "E"]
//     const [current, setcurrent] = useState(0)


//     const ChangeValue = () => {
//         if (current < arr.length - 1) {
//             setcurrent(current + 1)

//         }

//     }
//     return (
//         <div>
//             <h1>Name Change : {arr[current]}</h1>

//             <button onClick={() => { ChangeValue() }} className='btn btn-info m-5'>Click Me</button>

//         </div>
//     )
// }

// export default Hooks


//************************************************************ */


import React, { useEffect, useState } from 'react'

const Hooks = () => {

    const [currentTaxt, setTaxt] = useState(16)
    const [colorTaxt, setColor] = useState(0)
    const ColorArr = ["red", "blue", "yellow", "orange", "white", "gray"]

    useEffect(() => {
        alert("this is my page")
    }, [])

    const Increement = () => {

        setTaxt(Math.min(currentTaxt + 2, 100))
        // setTaxt(hello => currentTaxt + 1)
        // if (currentTaxt <= 100) {
        //     setTaxt(currentTaxt + 2)
        // }

        if (colorTaxt >= 100) {

        } else if (colorTaxt <= ColorArr.length - 1) {

            setColor(colorTaxt + 1)
        }

        else {
            setColor(0)
        }

    }

    const decreement = () => {

        setTaxt(Math.max(currentTaxt - 2, 10))
        // setTaxt(hello => currentTaxt - 1)

        // if (currentTaxt >= 0) {
        //     setTaxt(Math.max(-2, 10))
        // }
        if (colorTaxt >= 100) {

        } else if (colorTaxt <= ColorArr.length - 1) {

            setColor(colorTaxt + 1)
        }

        else {
            setColor(0)
        }


    }

    return (
        <div>

            <button onClick={() => { Increement() }} className='btn btn-secondary m-5'>Incrrement +</button>
            <button onClick={() => { decreement() }} className='btn btn-danger m-5'>Decrrement -</button>

            <h1 className='text-center'>hello<span style={{ fontSize: `${currentTaxt}px`, color: `${ColorArr[colorTaxt]}` }}>Word</span> </h1>




        </div>
    )
}

export default Hooks

