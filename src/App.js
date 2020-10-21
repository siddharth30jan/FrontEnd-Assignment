import React, { useState, useEffect } from "react";
import Matches from "./components/matches";
import Result from "./components/result";
import JsonInput from "./components/jsonInput";
import "./App.css";

function App() {
  const [teamList, setTeamlist] = useState("");
  const [teamList1, setTeamlist1] = useState("");
  const [teamList2, setTeamlist2] = useState("");
  const [finalist, setFinalist] = useState([]);
  const [topMargin, setTopMargin] = useState(0);

  // Considers the teamList array and splits it into 2 equal halves
  const splitArray = () => {
    let arr = [];
    for (let index = 0; index < teamList.length / 2; index++)
      arr.push(teamList[index]);
    setTeamlist1(arr);
    arr = [];
    for (let index = teamList.length / 2; index < teamList.length; index++)
      arr.push(teamList[index]);
    setTeamlist2(arr);
  };

  useEffect(() => {
    if (!teamList) return;
    splitArray();
  }, [teamList]);

  return teamList1 && teamList2 ? (
    <div className="container">
      <div className="box1">
        <Matches
          teamList={teamList1}
          side={true}
          setFinalist={setFinalist}
          topMargin={topMargin}
        />
      </div>
      <div className="box2">
        <Result finalist={finalist} />
      </div>
      <div className="box3">
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
