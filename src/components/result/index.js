import React, { useState, useEffect } from "react";
import "./styles.css";

function Result({ finalist, setTeamlist1, setFinalist }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [toggle, setToggle] = useState(false);

  //Container for storing setTimeout ids
  let ids = [];
  useEffect(() => {
    // Determine the winners
    if (
      !finalist[0] ||
      !finalist[1] ||
      !finalist[2] ||
      !finalist[3] ||
      ids.length === 2
    )
      return;

    ids.push(
      setTimeout(() => {
        let winner = Math.random() < 0.5 ? finalist[0] : finalist[3];
        setThird(winner);
        setFourth(winner === finalist[0] ? finalist[3] : finalist[0]);
        ids.push(
          setTimeout(() => {
            let winner = Math.random() < 0.5 ? finalist[1] : finalist[2];
            setFirst(winner);
            setSecond(winner === finalist[1] ? finalist[2] : finalist[1]);
          }, Math.floor(Math.random() * 7000) + 5000)
        );
      }, Math.floor(Math.random() * 7000) + 5000)
    );

    return () => {
      // Clearing the setTimeouts in the clean up function
      ids.forEach((element) => {
        clearTimeout(element);
      });
      setFinalist([]);
      ids = [];
    };
  }, [finalist]);

  return (
    <div className="outerBox">
      {toggle && (
        <div className="alert">
          <h2>Are you sure you want to terminate the current game play?</h2>
          <button
            className="buttonD"
            onClick={(e) => {
              setTeamlist1("");
              setToggle(false);
            }}
          >
            YES
          </button>
          <button
            className="buttonD"
            onClick={(e) => {
              setToggle(false);
            }}
          >
            NO
          </button>
        </div>
      )}
      <button
        className="buttonC"
        onClick={(e) => {
          setToggle(true);
        }}
      >
        Upload another file
      </button>
      <div>
        <img
          src="https://img.favpng.com/23/17/21/2014-fifa-world-cup-brazil-football-player-png-favpng-E8nyFDyxnSCEfCKdBs0ezq4ML.jpg"
          alt="Image"
          className="img"
        />
      </div>
      <div>
        <div className="box">
          <div className="box">
            {first ? <h3>{first?.teamName}</h3> : <p>Yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>WINNNER</h4>
        </div>
        <div className="box">
          <div className="box">
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
          className="img"
        />
      </div>
      <div>
        <div className="box">
          <div className="box">
            {third ? <h3>{third?.teamName}</h3> : <p>Yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>3rd PLACE</h4>
        </div>
        <div className="box">
          <div className="box">
            {fourth ? <h3>{fourth?.teamName}</h3> : <p>Yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>4th PLACE</h4>
        </div>
      </div>
    </div>
  );
}

export default Result;
