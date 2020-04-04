import React from "react";

const Advisories = () => {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <div id="content" className="p-4 p-md-5 pt-5">
        <h3 className="mb-4" style={{ color: "#6E7AFA", textAlign: "center" }}>
          Advisories
        </h3>
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0 auto" }}
        >
          <img
            className="card-img-top cardImage"
            src="images/advisories/virus.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text cardText">
              Coronavirus live updates: Death toll touches 62 in India, number
              of cases climb to 2547.
            </p>
          </div>
        </div>
        <br />
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0 auto" }}
        >
          <img
            className="card-img-top cardImage"
            src="images/advisories/virus.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text cardText">
              Coronavirus live updates: Death toll touches 62 in India, number
              of cases climb to 2547.
            </p>
          </div>
        </div>
        <br />
        <div
          className="card shadow"
          style={{ width: "16rem", margin: "0 auto" }}
        >
          <img
            className="card-img-top cardImage"
            src="images/advisories/virus.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text cardText">
              Coronavirus live updates: Death toll touches 62 in India, number
              of cases climb to 2547.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisories;
