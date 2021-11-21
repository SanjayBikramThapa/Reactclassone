import React from 'react'
import Slider from 'react-slick';
import './treanding.css'
const Treanding = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="container-fluid treanding-image shadow-lg mt-4 mb-3 py-5 ps-5">
        <Slider {...settings}>
          <div className="tranding__img">
            <img src="/images/a.jpg" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/d.jpg" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/c.jpg" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/d.jfif" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/e.jfif" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/f.jfif" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/g.jfif" alt="..." className="img-fluid custom-slide" />
          </div>
          <div className="tranding__img">
            <img src="/images/h.jfif" alt="..." className="img-fluid custom-slide" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Treanding
