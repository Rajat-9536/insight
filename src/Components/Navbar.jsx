import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "#185622" }}
      >
        <div className="container pt-1 pb-1">
          {/* <button className="bg-dark" onClick={toggleSidebar}>
            <span className="">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
                alt="menu--v1"
              />
            </span>
          </button> */}
          <Link className="navbar-brand fw-bold text-light" href="/">
            <img
            
              width="100px"
              src="./insights-logo.png"
              alt=""
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-bold  nav-list-anchor"
                  href="/"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-bold  nav-list-anchor"
                  href="/"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-bold  nav-list-anchor"
                  href="/"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-bold  nav-list-anchor"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
              <Link
                className="btn fw-bold rounded-pill text-light"
                href="/login"
                style={{ marginRight: "10px", background: "#FE4C1C" }}
              >
                +91 91492 19740
              </Link>
            </div>
        </div>
      </nav>
    </div>
  );
};
