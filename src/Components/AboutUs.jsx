import React from "react";

export const AboutUs = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="row">
                <span className="fw-bold text-light text-center" style={{backgroundColor:"#FE4C1C",borderRadius:"5px", width:"20%"}}>ABOUT US</span>
                <h1 className="fw-bold">
                  Insights Media Focus on growing product Brand
                </h1>
                <p className="mt-4">
                Welcome to INSIGHT ADDS, your premier destination for Data-Driven Performance Marketing. We specialize in collaborating with Specialized Coaches, Brands, and Professional Companies poised for growth. Our mission is to assist businesses in attracting new customers and generating leads that fuel sustainable expansion.
                </p>
                <p>
                At INSIGHT ADDS, we recognize the unique needs of our clients. Whether you're a Specialized Coach seeking to amplify your reach, a Brand aiming for market dominance, or a Professional Company on the verge of transformative growth – we've got you covered.
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-6 d-flex">
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-glyphs/30/000000/double-tick--v1.png"
                        alt="double-tick--v1"
                      />
                      <p>20+ Happy Clients</p>
                    </div>
                    <div className="col-6 d-flex">
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-glyphs/30/000000/double-tick--v1.png"
                        alt="double-tick--v1"
                      />
                      <p>Fast Execution</p>
                    </div>
                    <div className="col-6 d-flex">
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-glyphs/30/000000/double-tick--v1.png"
                        alt="double-tick--v1"
                      />
                      <p>Proven Track Record</p>
                    </div>
                    <div className="col-6 d-flex">
                      <img
                        width="28"
                        height="28"
                        src="https://img.icons8.com/ios-glyphs/30/000000/double-tick--v1.png"
                        alt="double-tick--v1"
                      />
                      <p>ROAS Approach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src="./about-us-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
