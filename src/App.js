import React from 'react'
import HomeTips from './Component/TIPS_G/HomeTips'
import Service from './Component/TIPS_G/Service'
import AllCourses from './Component/TIPS_G/AllCourses'
import ContactUs from './Component/TIPS_G/ContactUs'
import SignIn from './Component/TIPS_G/SignIn'
import Certification from './Component/TIPS_G/Certification'
import AboutTips from './Component/TIPS_G/AboutTips'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeTips />} />
                    <Route path='/All' element={<AllCourses />} />
                    <Route path='/About' element={<AboutTips />} />
                    <Route path='/Cer' element={<Certification />} />
                    <Route path='/Ser' element={<Service />} />
                    <Route path='/Contact' element={<ContactUs />} />
                    <Route path='/Sing' element={<SignIn />} />

                </Routes>

            </BrowserRouter>

        </div>
    )
}

export default App

//********************************************************** */











// import React from 'react'
// import Useref from './Component/Hook/Useref'
// // import CallBackFun from './Component/CallBackFun'
// // import UseMemo from './Component/UseMemo'
// // import UseEffect from './Component/UseEffectt'

// const App = () => {
//     return (
//         <div>
//             {/* <UseEffect /> */}
//             {/* <UseMemo /> */}
//             {/* <CallBackFun /> */}

//             <Useref />
//         </div>
//     )
// }

// export default App


//******************************************************************* */

// import React from 'react'
// import Home1 from './Component/SYSTUMM/Home1'
// import AboutMain from './Component/SYSTUMM/AboutMain'
// import Contact from './Component/SYSTUMM/Contact'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Shop_T_Shirt from './Component/SYSTUMM/Shop_T_Shirt'
// import Hoodies from './Component/SYSTUMM/Hoodies'
// import Login from './Component/SYSTUMM/Login'
// import ShopIcon from './Component/SYSTUMM/ShopIcon'


// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Home1 />} />
//                     <Route path='/S' element={<Shop_T_Shirt />} />
//                     <Route path='/SH' element={<Hoodies />} />
//                     <Route path='/A' element={<AboutMain />} />
//                     <Route path='/C' element={<Contact />} />
//                     <Route path='/L' element={<Login />} />
//                     <Route path='/SI' element={<ShopIcon />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }
// export default App




// //********************************************************* */

// // import React from 'react'
// // import Mass from './Component/Massege/Mass'

// // const App = () => {
// //     return (
// //         <div>
// //             <Mass />

// //         </div>
// //     )
// // }

// // export default App



// //****************************************************************** */

// // import React from 'react'
// // import Rahul3 from './Component/RahulSath/Rahul3'
// // import Rahul from './Component/RahulSath/Rahul'
// // import Rahul2 from './Component/RahulSath/Rahul2'
// // import { BrowserRouter, Route, Routes } from 'react-router-dom'

// // const App = () => {
// //   return (
// //     <div className='container' style={{ width: "80%" }}>


// //       <BrowserRouter>
// //         <Routes>
// //           <Route path='/' element={<Rahul />} />
// //           <Route path='/1' element={<Rahul2 />} />
// //           <Route path='/2' element={<Rahul3 />} />
// //         </Routes>
// //       </BrowserRouter>

// //     </div>
// //   )
// // }

// // export default App



//************************************************************************ */


// import React from 'react'
// import Netflix from './Component/Netflix'
// import Netflix2 from './Component/Netflix2'
// import Netflixmap from './Component/Netflixmap'


// const App = () => {
//   return (
//     <div>
//       <Netflix />
//       <Netflix2 />
//       <Netflixmap />


//     </div>
//   )
// }

// export default App



//************************************************************************** */


// import React from 'react'
// // import Techno from './Component/Techno'
// // import Techno2 from './Component/Techno2'
// // import Techno3 from './Component/Techno3'
// // import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ProductNav from './Component/ProductNav'


// const App = () => {
//   return (
//     <div>
//       <ProductNav />

//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Techno />} />
//           <Route path='/Blog' element={<Techno2 />} />
//           <Route path='/Work' element={<Techno3 />} />
//         </Routes>
//       </BrowserRouter> */}

//     </div>
//   )
// }

// export default App



//************************************************************* */

// import React from 'react'
// // import Figma from './Component/Figma'
// // import FigmaNav from './Component/FigmaNav'
// import Props2 from './Component/Props2'

// // import Photo from './Component/Photo'


// const App = () => {
//   return (
//     <div>
//       {/* <Photo /> */}

//       <Props2 name="Pankaj" Age="21" city="jaipur" />
//       <Props2 name="Pankaj" Age="2" city="jaipur" />
//       <Props2 name="Pankaj" Age="22" city="jaipur" />
//       {/* <FigmaNav />

//       <Figma /> */}


//     </div>
//   )
// }

// export default App




//*********************************************** */


// import React from 'react'
// import Props from './Component/Props'

// const App = () => {
//     return (
//         <div>
//             <Props />
//         </div>
//     )
// }

// export default App


//********************************************************* */

// import React from 'react'
// import Figma from './Component/Figma'

// const App = () => {
//   return (
//     <div>
//       <Figma />
//     </div>
//   )
// }

// export default App

//************************************************************************* */


// import React from 'react'
// import Pankaj from './Component/Pankaj';
// import Student from './Component/Student'
// import Table from './Component/Table';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Pankaj />} />
//           <Route path="/hello" element={<Student />} />
//           <Route path="/ttt" element={<Table />} />
//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// export default App

