import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

function Teamtemplate({ team }) {
  const [counter, setCounter] = useState(0);
  const ref = useRef("");
  useEffect(() => {
    if (!team) return;
    if (counter === 0) {
      console.log(counter);
      ref.current.className = "block flicker";
      setCounter((prev) => prev + 1);
    }
  }, [team]);
  return (
    <div ref={ref} className="block">
      <p>{team ? team.teamName : "Yet to be decided"}</p>
    </div>
  );
}

export default Teamtemplate;
