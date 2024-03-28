// import React, { useState } from 'react';

// // Parent component
// function CallBackFun() {
//     // State to store input value
//     const [inputValue, setInputValue] = useState('');

//     // Callback function to handle input change
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     return (
//         <div>
//             <h2>Parent Component</h2>
//             {/* Child component */}
//             <ChildComponent inputValue={inputValue} onInputChange={handleInputChange} />
//             <p>Input value: {inputValue}</p>
//         </div>
//     );
// }

// // Child component
// function ChildComponent({ inputValue, onInputChange }) {
//     return (
//         <div>
//             <h3>Child Component</h3>
//             <input type="text" value={inputValue} onChange={onInputChange} />
//         </div>
//     );
// }

// export default CallBackFun;


//******************************************************************** */

import React, { useCallback, useState } from 'react'
import CallBackFun_2 from './CallBackFun_2'

const CallBackFun = () => {
    const [data, setdata] = useState(0)
    const [count, setcount] = useState(100)

    const Demo = useCallback(() => {

    }, [])
    return (
        <div className='m-5'>
            <CallBackFun_2 Demo={Demo} count={count} />

            <h1>{data}</h1>
            <button onClick={() => { setdata(data + 1) }}>ADD</button><hr />

            <h1>{count}</h1>
            <button onClick={() => { setcount(count - 1) }}>-</button>

        </div>
    )
}

export default CallBackFun
