import React from 'react'
import './cart.css';
import Navbar from './Navbar'
import Footer from './Footer'


const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid ">
                <div className="row">
                    <div className="row shadow-lg border-0 col-9">
                        <div className="d-flex mt-2">
                            <div className="row col-6  ps-5 cart__image">
                                <p className="text-muted"> product</p>
                                <div className="d-flex">
                                    <img src="./images/a.jpg" alt="..." className="pb-3" />
                                    <div className="d-block">
                                        <h6 className="ps-5 fs-bolder m-0">T-shirt with round neck </h6>
                                        <div className="ps-5 text-muted">Size:l</div>
                                        <div className="ps-5 text-muted">Brand:Matrix</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 row">
                                <div className=" col-4 text-muted">
                                    <p className="text-muted"> Quantity</p>
                                    <input type="number" min="0" max="999" className="border-1 border-danger shadow-lg" />

                                </div>
                                <div className="col-3">
                                    <p className="text-muted"> Price</p>
                                    <p className="m-0"> $19.00</p>
                                    <p className="text-muted m-0 p-0">$8.00</p>

                                </div>
                            </div>
                            <div className="col-2">
                                <div className="pt-5">
                                    <div className="d-flex shadow-lg p-3  bg-white rounded-3">
                                        <i class="fas fai fa-heart"></i>
                                        <button className="btn btn-danger p-1 border-0 shadow-lg ms-3">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="row col-6 ps-5 cart__image">
                                <p className="text-muted"> product</p>
                                <div className="d-flex">
                                    <img src="./images/a.jpg" alt="..." className="pb-3" />
                                    <div className="d-block">
                                        <h6 className="ps-5 fs-bolder m-0">T-shirt with round neck </h6>
                                        <div className="ps-5 text-muted">Size:l</div>
                                        <div className="ps-5 text-muted">Brand:Matrix</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 row">
                                <div className=" col-4 text-muted">
                                    <p className="text-muted"> Quantity</p>
                                    <input type="number" min="0" max="999" className="border-1 border-danger shadow-lg" />

                                </div>
                                <div className="col-3">
                                    <p className="text-muted"> Price</p>
                                    <p className="m-0"> $19.00</p>
                                    <p className="text-muted m-0 p-0">$8.00</p>

                                </div>
                            </div>
                            <div className="col-2">
                                <div className="pt-5">
                                    <div className="d-flex shadow-lg p-3  bg-white rounded-3">
                                        <i class="fas fai fa-heart"></i>
                                        <button className="btn btn-danger p-1 border-0 shadow-lg ms-3">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="row col-6 ps-5 cart__image">
                                <p className="text-muted"> product</p>
                                <div className="d-flex">
                                    <img src="./images/a.jpg" alt="..." className="pb-3" />
                                    <div className="d-block">
                                        <h6 className="ps-5 fs-bolder m-0">T-shirt with round neck </h6>
                                        <div className="ps-5 text-muted">Size:l</div>
                                        <div className="ps-5 text-muted">Brand:Matrix</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 row">
                                <div className=" col-4 text-muted">
                                    <p className="text-muted"> Quantity</p>
                                    <input type="number" min="0" max="999" className="border-1 border-danger shadow-lg" />

                                </div>
                                <div className="col-3">
                                    <p className="text-muted"> Price</p>
                                    <p className="m-0"> $19.00</p>
                                    <p className="text-muted m-0 p-0">$8.00</p>

                                </div>
                            </div>
                            <div className="col-2">
                                <div className="pt-5">
                                    <div className="d-flex shadow-lg p-3  bg-white rounded-3">
                                        <i class="fas fai fa-heart"></i>
                                        <button className="btn btn-danger p-1 border border-1 shadow-lg ms-3">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-3 shadow-lg m-0">
                        <div className="shadow-lg p-4 mt-4 me-0">
                            <p className="fw-bold text-black mb-0 ms-3">Have a coupon?</p>
                            <form className="d-flex">
                                <input className="form-control me-2 ms-2" type="search" placeholder="Coupon code" aria-label="Search" />
                                <button className="btn btn-outline-danger text-black  shadow-lg " type="submit">Apply</button>
                            </form>
                        </div>
                        <div className="shadow-lg mt-3">
                            <p className=" pt-2 ps-2 fs-6"> Price: $20.00</p>
                            <p className="ps-2 fs-6">Discount price: $20.00</p>
                            <p className="ps-2 fs-6">Total price: $20.00</p>
                            <button className="btn btn-success w-75 ms-5">make purchase</button>
                            <button className="btn btn-warning mt-3 mb-3 w-75 ms-5">continue purching</button>


                        </div>


                    </div>

                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Cart
