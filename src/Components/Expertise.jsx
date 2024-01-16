import React from "react";
import { Link } from "react-router-dom";

export const Expertise = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h2 className="fw-bold text-center mb-5 pb-3">Our Expertise</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <img
                src="https://growthifymedia.com/wp-content/uploads/2022/03/website-image-2.png"
                alt=""
              />
              <div className="row container text-center">
                <h4 className="fw-bold">
                E-commerce Startups and Brands
                </h4>
                <p className="mt-2">
                Embrace a new era of E-commerce innovation with our specialized services at INSIGHT ADDS. We cater to the unique needs of E-commerce startups and established brands, providing targeted solutions for those eager to thrive in the online marketplace. Whether you're a burgeoning startup or an established brand ready to take the next leap, our focus is on aiding your growth journey.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="https://growthifymedia.com/wp-content/uploads/2022/03/website-image-2.png"
                alt=""
              />
              <div className="row container text-center">
                <h4 className="fw-bold">
                E-learning Coaches and Info-product Businesses
                </h4>
                <p className="mt-2">
                Step into a realm of digital education excellence with INSIGHT ADDS Agency, your dedicated partner in driving success for E-learning Coaches and Info-product Businesses. Tailored specifically for those in the educational and informational product sectors, our services cater to individuals and businesses keen on expanding their online footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 mb-5">
            <Link className="btn btn-primary fw-bold btn-pill">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
