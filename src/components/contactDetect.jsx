import React from "react";

const Details = () => {
  return (
    <div>
      <div id="content" className="p-4 p-md-5 pt-5">
        <h4 className="mb-4" style={{ color: "#6E7AFA", textAlign: "center" }}>
          COVID-19 Contact Detection
        </h4>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Here's a list of people who have tested positive for COVID-19. Please
          select the people who have been in contact with you:
        </p>
        <div className="topnav">
          <input type="text" placeholder="Search by State, Region or Pincode" />
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div id="cardBody" className="card-body">
            <img
              style={{ float: "left" }}
              className="card-img-top"
              src="images/contactDetection/adult-beard-boy-1.png"
              alt="Card image cap"
            />
            <p className="card-text" style={{ fontSize: "10px" }}>
              <b>Name</b>
              <br />
              Address
              <br />
              Area
              <br />
              City
              <br />
              Pincode
            </p>
            <div className="form-check" style={{ float: "right" }}>
              <input
                className="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="..."
              />
            </div>
          </div>
        </div>

        <div className="sticky" style={{ align: "center" }}>
          <button type="button" className="btn btn-light buttonMy">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
