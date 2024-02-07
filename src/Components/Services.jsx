import React from "react";
import { data } from "../Pages/SiteData";

export const Services = () => {
  const filteritemBarData = data.filter((item) => item.itempath === "services");
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h1 className="fw-bold text-center mb-3">
          {filteritemBarData[0].title}
        </h1>
        <h3 className="fw-bold text-center" style={{ color: "#FE4C1C" }}>
          {filteritemBarData[0].description}
        </h3>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <div className="row align-items-center">
            {filteritemBarData[0].dataPoint.map((datapoint) => (
              <div className="col-12 col-lg-4 ">
                <div
                  className="p-4 mt-4 mb-4 bg-light"
                  style={{ borderRadius: "25px" }}
                >
                  <img
                    width="100px"
                    height="100px"
                    src={datapoint.image}
                    alt=""
                  />
                  <div className="row">
                    <h4 className="fw-bold mt-3">{datapoint.title}</h4>
                    <p className="mt-2">{datapoint.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
