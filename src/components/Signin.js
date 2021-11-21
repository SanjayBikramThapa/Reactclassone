import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const Signin = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid text-center background-signin d-flex  justify-content-center">
                <div className="row col-4">
                    <form className="form-control shadow-lg sign__form  mt-5 mb-5 border-0 rounded-0 ">
                        <h4 className="fw-bold shadow-lg p-2 text-white"> Login Form</h4>
                        <div className="shadow-lg mb-2">
                        <label className="text-white d-flex justify-content-center mt-4 fw-bold pb-2">Email / User Name</label>
                            <input type="text" className="w-75 mb-4 p-2 shadow-lg border-0 text-center" placeholder="sanjay@gmail.com" />
                        <label className="text-white d-flex justify-content-center fw-bold pb-2">password</label>
                            <input type="password" className="w-75 p-2 text-center shadow-lg border-0 " placeholder="Sanjay123@" />
                        <div class="checkbox">
                            <label className="text-white" > 
                                <input type="checkbox" value="remember-me" className=" mt-4" /> Remember password
                                </label>
                        </div>
                            <button class="w-75 btn btn-lg btn-success fw-bold mt-2" type="submit">Sign in</button>
                            <label className="pt-3 text-white pb-5" >Do not have account ? <Link className="text-decoration-none" to="/signup">Now</Link> 
                            </label>
                            </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signin
