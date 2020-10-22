import React, { useState, useEffect } from "react";
import "./styles.css";

function Twoplayers({ teamList, setDouble }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(teamList);
  let id;
  useEffect(() => {
    id = setTimeout(() => {
      const winner = Math.random() < 0.5 ? teamList[0] : teamList[1];
      setFirst(winner);
      setSecond(winner === teamList[0] ? teamList[1] : teamList[0]);
    }, Math.floor(Math.random() * 7000) + 5000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div className="container2">
      {toggle && (
        <div className="alertE">
          <h2>Are you sure you want to terminate the current game play?</h2>
          <button
            className="buttonE"
            onClick={(e) => {
              setDouble(false);
              setToggle(false);
            }}
          >
            YES
          </button>
          <button
            className="buttonE"
            onClick={(e) => {
              setToggle(false);
            }}
          >
            NO
          </button>
        </div>
      )}
      <div className="wrapper2" style={{ flex: "2" }}>
        <div className="block2" key={Math.random()}>
          <p>{teamList[0].teamName}</p>
        </div>
      </div>
      <div className="outerBox2" style={{ flex: "1" }}>
        <button className="buttonC2" onClick={(e) => setToggle(true)}>
          Upload another file
        </button>
        <div>
          <img
            src="https://img.favpng.com/23/17/21/2014-fifa-world-cup-brazil-football-player-png-favpng-E8nyFDyxnSCEfCKdBs0ezq4ML.jpg"
            alt="Image"
            className="img2"
          />
        </div>
        <div>
          <div className="boxx2">
            <div className="boxx2">
              {first ? <h3>{first?.teamName}</h3> : <p>Yet to be decided</p>}
            </div>
            <hr size="2" style={{ width: "100%" }} />
            <h4>WINNNER</h4>
          </div>
          <div className="boxx2">
            <div className="boxx2">
              {second ? <h3>{second?.teamName}</h3> : <p>Yet to be decided</p>}
            </div>
            <hr size="2" style={{ width: "100%" }} />
            <h4>RUNNER-UP</h4>
          </div>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/1/1d/2014_FIFA_World_Cup.svg"
            alt="Image"
            className="img2"
          />
        </div>
      </div>
      <div className="wrapper2" style={{ flex: "2" }}>
        <div className="block2" key={Math.random()}>
          <p>{teamList[1].teamName}</p>
        </div>
      </div>
    </div>
  );
}

export default Twoplayers;
