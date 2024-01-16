import React from "react";

export const Contact = () => {
  return (
    <div className="background-overlay">
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <div
          className="row bg-light pt-5 pb-5 align-items-center"
          style={{ borderRadius: "8px" }}
        >
          <div className="col-12 col-lg-6 text-center">
            <div className="row p-5">
              <h5 className="fw-bold text-primary">Contact Us</h5>
              <h1 className="fw-bold">Feel Free to Contact Us</h1>
              <p className="mt-4">
                Growthify Media is a{" "}
                <strong>Data Driven Performance marketing agency </strong>
                where we work with Specialized Coaches, Brands & Professional
                companies who are looking to grow and need to attract new
                customers and generate leads for growth.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form className="row g-3">
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword4" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Name"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Phone Number"
                />
              </div>
              <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Send Message  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
