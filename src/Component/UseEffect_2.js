import React from 'react'

const UseEffect_2 = () => {
    return (
        <div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label C_1">Email</label>
                                <input type="Email" style={{ backgroundColor: "#061329" }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label C_1">Password</label>
                                <input type="password" style={{ backgroundColor: "#061329" }} class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Login</button>

                        </form>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default UseEffect_2
