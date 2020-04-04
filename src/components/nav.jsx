import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, fToggle] = useState("active");
  return (
    <nav id="sidebar" className={toggle}>
      <div className="custom-menu">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-primary"
          onClick={(e) => {
            if (toggle == "inactive") {
              fToggle("active");
            } else fToggle("inactive");
          }}
        >
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h1>
          <a href="index.html" className="logo">
            Flash
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <Link to="/adv">
              <span className="fa fa-home mr-3"></span> Advisories{" "}
            </Link>
          </li>
          <li>
            <Link to="/checkContact">
              <span className="fa fa-user mr-3"></span> Check Contact
            </Link>
          </li>
          <li>
            <Link to="/testingEligibility">
              <span className="fa fa-briefcase mr-3"></span> Testing Eligibility{" "}
            </Link>
          </li>
          <li>
            <Link to="/followUp">
              <span className="fa fa-sticky-note mr-3"></span> Follow up
            </Link>
          </li>
          <li>
            <Link to="/abt">
              <span className="fa fa-paper-plane mr-3"></span> About{" "}
            </Link>
          </li>
        </ul>
        <div className="footer"></div>
      </div>
    </nav>
  );
};
export default Nav;
