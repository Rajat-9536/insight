import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Pages/SiteData";

export const Header = () => {
  const [headerData] = useState(data);

  console.log(headerData);
  const filterHeaderData = headerData.filter((item) => item.itempath === "header");
  console.log(filterHeaderData);

  return (
    <div className="background-overlay-header">
       <div className="container">
          <div
            className="row align-items-center"
            style={{ paddingTop: "40px", paddingBottom: "100px" }}
          >
            <div className="col-12 col-lg-6">
              <h1 className="fw-bold text-light display-5">
                <span className="text-light">{filterHeaderData[0].title}</span>
              </h1>
              <p className="text-light mt-3 pb-2 fw-bold">
                {filterHeaderData[0].description}
              </p>
              <Link
                className="btn fw-bold text-light rounded-pill"
                to="/login"
                style={{ marginRight: "10px", background: "#FE4C1C" }}
              >
                {filterHeaderData[0].itemPathText}
              </Link>
            </div>
            <div className="col-12 col-lg-6">
              <img
                width="100px"
                height="100px"
                className="banner-image"
                src={filterHeaderData[0].image}
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
  );
};
