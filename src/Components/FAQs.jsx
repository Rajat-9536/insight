import React from "react";
import { data } from "../Pages/SiteData";

export const FAQs = () => {
  const filterAboutData = data.filter((item) => item.itempath === "faq");
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h1 className="fw-bold text-center mb-3">{filterAboutData[0].title}</h1>
        <h3 className="fw-bold text-center" style={{ color: "#FE4C1C" }}>
          {filterAboutData[0].subtitle}
        </h3>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <div className="row align-items-center">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              {
                filterAboutData[0].dataPoint.map((datapoint) => (
                  <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {datapoint.title}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                  {datapoint.description}
                  </div>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
