import React, { useRef, useState } from 'react'

const Useref = () => {
    const [data, setData] = useState('Pankaj')
    const RefText = useRef();
    console.log(RefText, "Hello");


    const Refresh = () => {
        setData(' ')
        RefText.current.focus()
    }

    const Updata = () => {
        RefText.current.value = "karan"
        RefText.current.style.color = "blue"
    }

    return (
        <div className='m-5'>
            <input ref={RefText} value={data} onChange={(e) => setData(e.target.value)} type='text' />

            <button onClick={() => { Refresh() }}>Click</button>
            <button onClick={() => { Updata() }}>Updata</button>

        </div>
    )
}

export default Useref
