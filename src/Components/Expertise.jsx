import React from "react";
import { Link } from "react-router-dom";
import { data } from "../Pages/SiteData";

export const Expertise = () => {
  console.log(data);
  const filteredExpertiseData = data.filter((article) => article.itempath === 'expertise');

  console.log(filteredExpertiseData);
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h2 className="fw-bold text-center mb-5 pb-3">
          {/* Display the title if it exists */}
          {filteredExpertiseData.length > 0 && filteredExpertiseData[0].title}
        </h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center">
            {/* Map through the dataPoint array if it exists */}
            {filteredExpertiseData.length > 0 &&
              filteredExpertiseData[0].dataPoint.map((datapoint) => (
                <div className="col-12 col-lg-6" key={datapoint.title}>
                  <img src={datapoint.image} alt="" />
                  <div className="row container text-center">
                    <h4 className="fw-bold">{datapoint.title}</h4>
                    <p className="mt-2">{datapoint.description}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-4 mb-5">
            {/* Display the itemPathText if it exists */}
            {filteredExpertiseData.length > 0 && (
              <Link className="btn btn-primary fw-bold btn-pill">
                {filteredExpertiseData[0].itemPathText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
