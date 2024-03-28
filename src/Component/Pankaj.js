import React from 'react'
import Header from './Header'

const Pankaj = () => {

  const data = [
    {
      hed: "This Is My Card",
      name: "My Name Is Pankaj",
      prag: "IT Student"

    },
    {
      hed: "This Is My Card",
      name: "My Name Is Nitesh",
      prag: "IT Student"

    }
  ]
  return (

    <>
      <Header />
      <div className='container'>
        <div className='row'>

          {
            data.map((res) => {
              return (
                <div className='col-lg-4 col-md-6 col-sm-12 bg-danger'>

                  <div className='card'>
                    <div className='card-header bg-dark text-white'>
                      <h1>{res.hed}</h1>
                    </div>
                    <div className='card-body bg-success'>
                      <h1>{res.name}</h1>
                      <p>{res.prag}</p>

                    </div>
                  </div>

                </div>
              )

            })
          }

        </div>
      </div>

    </>
  )
}

export default Pankaj



//************************************************** */


// import React from 'react'

// const Pankaj = () => {
//   return (
//     <div>
//       <div className="card border border-5 border-danger rounded-pill" style={{width:"18rem"}}>
//   <img src="https://t3.ftcdn.net/jpg/06/31/02/82/360_F_631028294_qbitC8RsZ8y8eHBFLxxSxGqmoEqkbmpH.jpg" className="card-img-top" alt="..."/>
//   <div className="card-body bg-info">
//     <h5 className="card-title">PANKAJ KUMAR</h5>
//     <p className="card-text">IT Student</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Pankaj
