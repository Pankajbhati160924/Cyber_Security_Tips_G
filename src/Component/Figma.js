import React from 'react'
import style from './Figma.module.css';

const Figma = () => {
    return (
        <>

            <div className='container mt-3'>
                <div className='row'>
                    <div className='{style.onee}  col-lg-3 col-md-3 col-sm-12 position-fixed ' style={{ width: "230px", zIndex: "10" }}>


                        <div style={{ marginTop: "80px" }}>
                            <div className={style.second}><i class="fa-regular fa-table-columns"></i>Dashboard</div>
                            <div className={style.second}><i class="fa-solid fa-folder-open"></i>Projects</div>
                            <div className={style.second} style={{ backgroundColor: "#2563DC", color: "white" }}><i class="fa-solid fa-list-check"></i>Tasks</div>
                            <div className={style.second}><i class="fa-solid fa-calendar-days"></i>Calendar</div>

                        </div>
                        <div className={style.btn}>
                            <button type="button" className={style.bttn} ><i class="fa-solid fa-arrow-right"></i>Log-in</button>

                        </div>


                    </div>




                    <div className='col-lg-9 col-md-9 col-sm-12 mt-4' style={{ position: "absolute", left: "23vw" }}>

                        <div className='d-flex justify-content-between mt-5 mb-3 '>
                            <div className={style.ram}>
                                <h4>Tasks</h4>

                            </div>
                            <div>
                                <i class="fa-solid fa-share-from-square "></i>
                                <i class="fa-solid fa-bolt ps-3"></i>
                                <i class="fa-solid fa-user ps-3"></i>
                                <i class="fa-solid fa-list ps-3"></i>
                                <button type="button" className={style.but}>New task +</button>


                            </div>

                        </div>


                        <div >

                            <div className='row '>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className={style.first}>
                                        <div className="card-header "><i class="fa-regular fa-square"></i>To do</div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?cs=srgb&dl=pexels-vika-glitter-1619697.jpg&fm=jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://pxbar.com/wp-content/uploads/2023/08/attitude-boy-pic-hd-4k-1-1024x1024.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/poster/h/a/n/medium-bollywood-actors-wall-poster-aditya-roy-kapur-lover-boy-original-imaf9uuzpgehsywt.jpeg?q=90&crop=false'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                </div>




                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className={style.scd}>
                                        <div className="card-header "><i class="fa-brands fa-tiktok"></i>In Progress</div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://e1.pxfuel.com/desktop-wallpaper/242/807/desktop-wallpaper-10-cry-emotional-boy-thumbnail.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://wallpapers.com/images/hd/single-boy-neon-lights-0qkjwt7d7j2hbdls.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://pxbar.com/wp-content/uploads/2023/08/attitude-boy-wallpaper-hd-1080p-1-1024x1024.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://i.pinimg.com/originals/1d/27/bd/1d27bdd5618fd06c26e7eab218a44711.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className={style.trd}>
                                        <div className="card-header "><i class="fa-solid fa-square-check"></i>Done</div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://pxbar.com/wp-content/uploads/2023/08/attitude-boy-photo.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://shayariraja.com/wp-content/uploads/2024/02/boys-dp_by-shayariraja-1.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://beingselfish.in/wp-content/uploads/2023/08/sad-boy-dp133.jpg'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-body bg-white m-1">
                                            <div className={style.d}>
                                                <div>
                                                    <img className={style.img} src='https://images.unsplash.com/photo-1630563232703-bdd4e2c11e4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8fDA%3D'></img>

                                                </div>
                                                <div className='me-2'>
                                                    <i className="fa-solid fa-pencil pe-2"></i>
                                                    <i className="fa-solid fa-trash-can"></i>

                                                </div>
                                            </div>
                                            <p className={style.pra}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>







                    </div>

                </div>

            </div >










        </>
    )
}

export default Figma
