import React from 'react'


const ProductMap = () => {

    const arr = [
        {
            img1: require("./Img/undraw_mention_6k5d.png"),
            h1: "Light, Fast & Powerful",
            p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. "

        },
        {
            img1: require("./Img/undraw_social_influencer_sgsv.png"),
            h1: "Light, Fast & Powerful",
            p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. "

        },
        {
            img1: require("./Img/undraw_mention_6k5d.png"),
            h1: "Light, Fast & Powerful",
            p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. "

        },
    ]
    return (
        <>

            {
                arr.map((element, value) => {
                    return (
                        <div className='container ' style={{ marginTop: "17%" }}>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <img width={"100%"} height={"320px"} src={element.img1}></img>

                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 pt-5' style={{ display: "flex", justifyContent: "center", alignContent: 'center', flexDirection: "column" }}>
                                    <h1 className='one'>{element.h1}</h1>
                                    <p className='second'>{element.p1}</p>
                                    {
                                        value == 2 ? <>
                                            <button>click me</button>
                                        </> : <></>
                                    }


                                </div>
                            </div>
                        </div>
                    )

                })
            }





        </>
    )
}

export default ProductMap
