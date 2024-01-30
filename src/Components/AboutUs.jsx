import React, { useState } from "react";
import { data } from "../Pages/SiteData";

export const AboutUs = () => {
  const [aboutData, setAboutData] = useState(data);

  const filterAboutData = aboutData.filter(
    (item) => item.itempath === "about-us"
  );

  

  console.log("about-us data",filterAboutData);
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="row">
                <span
                  className="fw-bold text-light text-center"
                  style={{
                    backgroundColor: "#FE4C1C",
                    borderRadius: "5px",
                    width: "20%",
                  }}
                >
                  ABOUT US
                </span>
                <h1 className="fw-bold">{filterAboutData[0].title}</h1>
                <p className="mt-4">{filterAboutData[0].description}</p>
                <p>{filterAboutData[0].description2}</p>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row align-items-center">
                    {filterAboutData[0].dataPoint.map((datapoint) => (
                      <div className="col-6 d-flex">
                        <img
                          width="28"
                          height="28"
                          src={datapoint.image}
                          alt="double-tick--v1"
                        />
                        <p>{datapoint.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img src={filterAboutData[0].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
