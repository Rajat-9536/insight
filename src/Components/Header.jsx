import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="background-overlay-header">
      <div className="container">
        <div className="row align-items-center" style={{ paddingTop: "40px",paddingBottom: "100px" }}>
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold text-light display-5">
              <span className="heading-color">Performance</span> Marketing Agency specializes in turning advertising into high-impact leads and maximazing
              <span style={{ color: "#fe4c1c" }}>
                ROAS!
              </span>
            </h1>
            <p className="text-light mt-3 pb-2 fw-bold">
            100% Guarantee of increase in Sales, Leads, Brand awareness.
            </p>
            <Link
              className="btn fw-bold text-light rounded-pill"
              to="/login"
              style={{ marginRight: "10px", background: "#FE4C1C" }}
            >
              Check Now
            </Link>
          </div>
          <div className="col-12 col-lg-6">
            <img
            width="100px"
            height="100px"
              className="banner-image"
              src="./services-images.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
