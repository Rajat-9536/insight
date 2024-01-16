import React from "react";
import { Link } from "react-router-dom";

export const Expertise = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h2 className="fw-bold text-center mb-5 pb-3">My Expertise</h2>
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
                  Growthify Media Focus on growing product Brand
                </h4>
                <p className="mt-2">
                  Get the best bang for your buck by taking your products to
                  customers who will never stop buying from you.
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
                  Growthify Media Focus on growing product Brand
                </h4>
                <p className="mt-2">
                  Get the best bang for your buck by taking your products to
                  customers who will never stop buying from you.
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
