import React from "react";
import { data } from "../Pages/SiteData";

export const BrandAwareness = () => {

  const filterAboutData = data.filter(
    (item) => item.itempath === "brand-awareness"
  );
  return (
    <div
      className="container"
      style={{ paddingTop: "100px"}}
    >
      <div
        className="row pt-5 pb-5 align-items-center"
        style={{background:"#185622", borderRadius: "8px" }}
      >
        <div className="col-12">
          <div className="row p-3">
            <h1 className="fw-bold text-light">
              {filterAboutData[0].title}
            </h1>
            <p className="mt-4 text-light">
              {filterAboutData[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
