import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
const Signup = () => {
    return (
        <>
        <Navbar/>
            <div className="container-fluid text-center background-signin d-flex  justify-content-center">
                <div className="row col-4">
                    <form className="form-control shadow-lg sign__form  mt-5 mb-5 border-0 rounded-0 ">
                        <h4 className="text-danger shadow-lg fw-bold  p-4"> Register Form </h4>

                        <div className="shadow-lg">   
                        <label className="text-white p-2 d-flex justify-content-center fw-bold">First Name</label>
                        <input type="text" className="w-75 p-2 shadow-lg border-0 text-center" placeholder="sanjay" />

                        <label className="text-white p-2 d-flex justify-content-center fw-bold">LastName</label>
                        <input type="text" className="w-75 p-2 text-center shadow-lg border-0 " placeholder="Chhetri"/>

                        
                        <label className="text-white p-2 d-flex justify-content-center fw-bold">Email</label>
                        <input type="email" className="w-75 p-2 text-center shadow-lg border-0 " placeholder="Sanjay123@gmail.com"/>

                        <label className="text-white p-2 d-flex justify-content-center fw-bold">Password</label>
                        <input type="password" className="w-75 p-2 text-center shadow-lg border-0 " placeholder="Sanjay123@"/>

                        <label className="text-white p-2 d-flex justify-content-center fw-bold">Confirm Password</label>
                        <input type="password" className="w-75 p-2 text-center shadow-lg border-0 " placeholder="Sanjay123@"/>

                        <button class="w-75 btn btn-lg btn-success fw-bold mt-4" type="submit">Sign in</button>
                        <label className="pt-3 mb-4 text-white" >Do not have account ? <Link className="text-decoration-none" to="/signin">Now</Link>
                        </label>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Signup
