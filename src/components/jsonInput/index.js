import React from "react";

function JsonInput({ setTeamlist }) {
  const saveFile = (e) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      var jsonObj = JSON.parse(e.target.result);
      console.log(jsonObj);
      setTeamlist(jsonObj);
    };

    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <h1>Please enter the JSON file</h1>
      <input type="file" placeholder="Browse" onChange={saveFile} />
    </div>
  );
}

export default JsonInput;
