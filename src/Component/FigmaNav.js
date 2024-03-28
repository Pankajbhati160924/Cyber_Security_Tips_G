import React from 'react'


const FigmaNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light navbar-light fixed-top ">
                <div class="container">
                    <h3 class="navbar-brand"><i class="far fa-square"></i>TaskMinder.</h3>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <form class="form-inline my-2 my-lg-0 ms-auto">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div class="my-2 my-lg-0">
                            <ul class="navbar-nav mr-auto my-2 my-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="far fa-bell" style={{ fontSize: "24px" }}></i></a>
                                </li>
                                <li class="nav-item">
                                    <img src="https://mastimorning.com/wp-content/uploads/2023/07/31.jpg" width="40" height="40" style={{ border: "1px solid black", borderRadius: "50%" }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default FigmaNav
