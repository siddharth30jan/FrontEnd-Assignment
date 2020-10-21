import React, { useState, useEffect } from "react";
import Matches from "./Matches";
import Result from "./Result";
import JsonInput from "./JsonInput";
import "./App.css";

function App() {
  const [teamList, setTeamlist] = useState("");
  const [teamList1, setTeamlist1] = useState("");
  const [teamList2, setTeamlist2] = useState("");
  const [finalist, setFinalist] = useState([]);

  const [topMargin, setTopMargin] = useState(0);

  /* useEffect(() => {
    console.log("finalist", finalist);
  }, [finalist]);*/
  useEffect(() => {
    if (!teamList) return;
    let arr = [];
    for (let index = 0; index < teamList.length / 2; index++)
      arr.push(teamList[index]);
    setTeamlist1(arr);
    arr = [];
    for (let index = teamList.length / 2; index < teamList.length; index++)
      arr.push(teamList[index]);
    setTeamlist2(arr);
  }, [teamList]);

  return teamList1 && teamList2 ? (
    <div style={{ display: "flex", width: "90%", margin: "auto" }}>
      <div style={{ flex: "1", backgroundColor: "red" }}>
        <Matches
          teamList={teamList1}
          side={true}
          setFinalist={setFinalist}
          topMargin={topMargin}
        />
      </div>
      <div
        style={{
          flex: "2",
          backgroundColor: "blue",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {/*finalist.length === 4 &&*/ <Result finalist={finalist} />}
      </div>
      <div
        style={{
          flex: "1",
          backgroundColor: "pink"
        }}
      >
        <Matches
          teamList={teamList2}
          side={false}
          setFinalist={setFinalist}
          topMargin={topMargin}
        />
      </div>
    </div>
  ) : (
    <JsonInput setTeamlist={setTeamlist} />
  );
}

export default App;
