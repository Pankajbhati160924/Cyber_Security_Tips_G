import React from 'react'
import './Mass.css'
import img1 from '../Img/Mass.img.jpg'
import img2 from '../Img/Group 2.png'

const Mass = () => {
  return (
    <div>
      <div className='container-fluid' style={{ backgroundColor: "#F1F1FF", paddingTop: "5%" }}>
        <img src={img2}></img>
        <div className='container ' >
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-4'>
              <p className='text-end a'>stay connected with your loved ones</p>
              <h1 className='b'>New Era of Messaging</h1>
              <p className='a mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className='d-flex gap-3 mt-4'>
                <button className='btn'>NEWS</button>
                <button className='btn'>TAG GAME-1</button>
                <button className='btn'>TAG GAME-2</button>

              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img className='img ' src={img1}></img>

            </div>

          </div>

        </div>
      </div>


      <div className='container' style={{ marginTop: "5%", }}>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 d-flex '>
            <p className='p'><i class="fa-regular fa-comment"></i> LEAVE COMMENT</p>
            <p className='p ps-4'><i class="fa-regular fa-heart"></i> LIKE</p>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-between'>
            <p className='p'><i class="fa-regular fa-comment"></i> 64</p>
            <p className='p'><i class="fa-regular fa-heart"></i> 87</p>
            <p className='p'><i class="fa-regular fa-clock"></i>  11/11/2024</p>
            <p className='p'>12:40 PM</p>


          </div>

        </div>
      </div>

      <div className='container' style={{ marginTop: "2%", }}>
        <div className='row'>
          <p className='d'>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='d'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


        </div>
      </div>





    </div>
  )
}

export default Mass
