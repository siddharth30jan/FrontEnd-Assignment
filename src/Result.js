import React, { useState, useEffect } from "react";

function Result({ finalist }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  useEffect(() => {
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
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>{first?.teamName || <p>yet to be decided</p>}</div>
      <div>{second?.teamName || <p>yet to be decided</p>}</div>
      <div>{third?.teamName || <p>yet to be decided</p>}</div>
      <div>{fourth?.teamName || <p>yet to be decided</p>}</div>
    </div>
  );
}

export default Result;
