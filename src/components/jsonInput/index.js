import React from "react";
import "./styles.css";
import data from "../../data.json";

function JsonInput({ setTeamlist }) {
  const saveFile = (e) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      let jsonObj = JSON.parse(e.target.result);
      //console.log(jsonObj);
      setTeamlist(jsonObj);
    };

    reader.readAsText(e.target.files[0]);
  };
  const setDefault = (e) => {
    e.preventDefault();
    setTeamlist(data);
  };
  return (
    <div className="outerContainer">
      <div className="containerJ">
        <h1>Please enter the JSON</h1>
        <p>
          (The program assumes that the JSON file has number of entries in power
          of 2)
        </p>

        <input type="file" onChange={saveFile} />

        <button className="button" onClick={setDefault}>
          Go by the default file
        </button>
      </div>
    </div>
  );
}

export default JsonInput;
