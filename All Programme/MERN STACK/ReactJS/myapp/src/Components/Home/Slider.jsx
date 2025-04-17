import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel bg-black"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/sliderimg/slider1.avif"
              className="d-block w-100"
              alt="..."
              style={{height:"50vh"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/sliderimg/slider2.avif"
              className="d-block w-100"
              alt="..."
              style={{height:"50vh"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/sliderimg/slider3.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:"50vh"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/sliderimg/slider4.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:"50vh"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/sliderimg/slider5.jpg"
              className="d-block w-100"
              alt="..."
              style={{height:"50vh"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
