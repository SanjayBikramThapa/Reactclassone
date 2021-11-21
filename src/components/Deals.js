import React from 'react'
import './deals.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

const Deals = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid  p-0 deals__wrapper">
                <div className="col-12 row">

                    <div className="col-sm-2 col-md-10 col-lg-2 mt-1 ps-3 border border-1">
                        <h6 className="fw-bold">Categories</h6>
                        <div className=" ps-2">
                            <input type="checkbox" /> <span className="ps-1"> Mobile </span>
                        </div>
                        <div className="ps-2">
                            <input type="checkbox" /> <span className="ps-1"> Laptop </span>
                        </div>
                        <div className="ps-2">
                            <input type="checkbox" /> <span className="ps-1"> Clothes </span>
                        </div>
                        <div className="ps-2">
                            <input type="checkbox" /> <span className="ps-1"> Foods </span>
                        </div>
                        <div className="ps-2">
                            <input type="checkbox" /> <span className="ps-1"> Shooes </span>
                        </div>

                        <h6 className="fw-bold color__wrapper"> ALL Deals</h6>
                        <div className=" ps-2 p-0 color__wrapper">
                            <span className="ps-1"> Available </span>
                        </div>
                        <div className="ps-2 p-0 color__wrapper">
                            <span className="ps-1"> Watchlist </span>
                        </div>

                        <h6 className="fw-bold">Price</h6>
                        <h6 className="fw-bold color__wrapper">All</h6>
                        <div className=" ps-2">
                            <span className="ps-1 color__wrapper"> Under $25 </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper"> $25 to $50 </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper">  $50 to $100 </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper">  $100 to $200 </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper"> $200 above </span>
                        </div>

                        <h6 className="fw-bold">Discount</h6>
                        <h6 className="fw-bold color__wrapper">All deals</h6>
                        <div className=" ps-2">
                            <span className="ps-1 color__wrapper">10% off or more </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper"> 25% off or more  </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper">  50% off or more  </span>
                        </div>
                        <div className="ps-2">
                            <span className="ps-1 color__wrapper">  70% off or more </span>
                        </div>


                        <h6 className="fw-bold">Average Customer Review</h6>
                        <div className=" ps-2">
                            <span className="ps-1">
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                &up
                            </span>
                        </div>

                        <div className=" ps-2">
                            <span className="ps-1">
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                &up
                            </span>
                        </div>

                        <div className=" ps-2">
                            <span className="ps-1">
                                <i class="fas fais fa-star"></i>
                                <i class="fas fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                &up
                            </span>
                        </div>
                        <div className=" ps-2 pb-3">
                            <span className="ps-1">
                                <i class="fas fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                <i class="far fais fa-star"></i>
                                &up
                            </span>
                        </div>

                    </div>

                    <div className="col-sm-10 col-md-2 col-lg-10 mt-1">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/a.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/a.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/a.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/a.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/d.jfif" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/d.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/c.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light border border-1 m-0 ps-0 pb-3">
                                <div className="deals__img mt-3 text-center">
                                    <img src="./images/b.jpg" alt="..." />
                                </div>
                                <div className="ps-3 m-0 fs-4 text-danger">
                                    $56.00
                                </div>
                                <div className="fs-6 text-start ps-3 m-0">up to 30% off</div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Deals
