import React, { useState, useEffect } from "react";
import "./result.css";
function Result({ finalist }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  useEffect(() => {
    if (!finalist[0] || !finalist[1] || !finalist[2] || !finalist[3]) return;
    setTimeout(() => {
      let winner = Math.random() < 0.5 ? finalist[0] : finalist[3];
      setThird(winner);
      setFourth(winner === finalist[0] ? finalist[3] : finalist[0]);
      setTimeout(() => {
        let winner = Math.random() < 0.5 ? finalist[1] : finalist[2];
        setFirst(winner);
        setSecond(winner === finalist[1] ? finalist[2] : finalist[1]);
      }, 5000);
    }, 5000);
  }, [finalist]);
  return (
    <div className="outerBox">
      <div>
        <img
          src="https://img.fifa.com/image/upload/t_tc1/zzbuqee2npvdmzi4m1dy.jpg"
          alt="Image"
          className="img"
        />
      </div>
      <div>
        <div className="box">
          <div className="box">
            {first ? <h3>{first?.teamName}</h3> : <p>yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>WINNNER</h4>
        </div>
        <div className="box">
          <div className="box">
            {second ? <h3>{second?.teamName}</h3> : <p>yet to be decided</p>}
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
            {third ? <h3>{third?.teamName}</h3> : <p>yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>3rd PLACE</h4>
        </div>
        <div className="box">
          <div className="box">
            {fourth ? <h3>{fourth?.teamName}</h3> : <p>yet to be decided</p>}
          </div>
          <hr size="2" style={{ width: "100%" }} />
          <h4>4th PLACE</h4>
        </div>
      </div>
    </div>
  );
}

export default Result;
