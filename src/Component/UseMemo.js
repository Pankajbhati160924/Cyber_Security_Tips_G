// // import React, { useMemo, useState } from 'react'

// // const UseMemo = () => {
// //     const [a, b] = useState(0)
// //     const [c, d] = useState(1000)

// //     const mlt = useMemo(() => {
// //         console.log("hello");
// //         return a * 20
// //     }, [a])



// //     return (
// //         <div>
// //             <h1>Value : {a}</h1>
// //             <h1>value - : {c}</h1>
// //             <h3>{mlt}</h3>
// //             <button onClick={() => { b(a + 1) }} className='btn btn-info m-5'>ADD</button>
// //             <button onClick={() => { d(c - 1) }} className='btn btn-danger m-5'>DEC</button>

// //         </div>
// //     )
// // }

// // export default UseMemo


// //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// import React, { useMemo, useState } from 'react'

// const UseMemo = () => {
//   const [plus, setplus] = useState(0)
//   const [data, setdata] = useState(1000)

//   const mlt = useMemo(() => {
//     console.log("hello")
//     return plus * 10
//   }, [plus])

//   return (
//     <div>
//       <h1>value + : {plus}</h1>

//       {mlt}
//       <button onClick={() => setplus(plus + 1)} className='btn btn-info m-5'>Click</button>

//       <h1>value - :{data}</h1>
//       <button onClick={() => setdata(data - 1)} className='btn btn-info m-5'>Click</button>
//     </div>
//   )
// }

// export default UseMemo


