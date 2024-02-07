import React, { useState } from "react";
import { data } from "../Pages/SiteData";

export const Contact = () => {

  const filterAboutData = data.filter(
    (item) => item.itempath === "contact-us"
  );
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hello ");

    // Send the form data to the server for processing
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setFormData({
      email:'',
      name: '',
      phoneNumber:'',
      message: '',
    });
  };

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
              <h5 className="fw-bold text-primary">{filterAboutData[0].title}</h5>
              <h1 className="fw-bold">{filterAboutData[0].subtitle}</h1>
              <p className="mt-4">
              {filterAboutData[0].description}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
