import React from "react";
import { data } from "../Pages/SiteData";

export const Itembar = () => {
  

  const filteritemBarData = data.filter(
    (item) => item.itempath === "itembar"
  );
  return (
    <div style={{ backgroundColor: "#185622" }}>
      <div className="container pt-2 pb-5 mb-5">
        <div className="row text-center mt-5 pt-5 pb-5">
          {filteritemBarData[0].dataPoint.map((datapoint) => (
            <div className="col-12 col-lg-4">
              <h1 className="fw-bold text-light">{datapoint.title}</h1>
              <h5 className="text-light">{datapoint.subtitle}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
