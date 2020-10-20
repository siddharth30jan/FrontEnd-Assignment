import React, { useState, useEffect } from "react";

const setDefault = (teamList) => {
  if (teamList.length == 1) return [];
  const arr = new Array(teamList.length / 2);
  arr.fill(null);
  return arr;
};

function Matches({ teamList, side }) {
  // console.log("Bap", teamList);
  const [winningTeams, setWinningTeams] = useState(() => setDefault(teamList));

  useEffect(() => {
    //Extract out the winning teams
    if (teamList.length == 1) return;
    if (!check()) return;

    for (let no = 0; no < teamList.length; no += 2) {
      // if (teamList[no] === null || teamList[no + 1] === null) continue;
      setTimeout(() => {
        // console.log("calledddd");
        setWinningTeams((prev) => {
          let winner = Math.random() < 0.5 ? teamList[no] : teamList[no + 1];
          //Extract out the indices pointing to null and then choose a random one from them
          const possibleCandidates = [];
          for (let index = 0; index < prev.length; index++) {
            if (prev[index] === null) possibleCandidates.push(index);
          }
          //console.log()
          const randomIndex =
            possibleCandidates[
              Math.floor(Math.random() * possibleCandidates.length)
            ];
          // console.log("ran", randomIndex);
          let copy = [...prev];
          //console.log("Wi", winner);
          copy[randomIndex] = winner;
          // console.log("temp", temp);
          return copy;
        });
        //console.log(Math.floor(Math.random() * 7000) + 5000);
      }, Math.floor(Math.random() * 7000) + 5000);
    }
  }, [teamList]);

  const check = () => {
    const nullArr = teamList.filter((ele) => ele === null);
    return nullArr.length === 0;
  };

  useEffect(() => {
    if (teamList.length === 1) return;
    //console.log("Winning Teams", winningTeams);
  }, [winningTeams]);
  if (teamList.length === 1) return null;
  return (
    <div>
      {side ? (
        <div style={{ display: "flex", marginLeft: "60px" }}>
          <div>
            {teamList.map((team) => (
              <p>{team ? team.teamName : "Yet to be decided"}</p>
            ))}
          </div>
          <div>
            {teamList.length > 0 && (
              <Matches teamList={winningTeams} side={side} />
            )}
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", marginRight: "60px" }}>
          <div>
            {teamList.length > 0 && (
              <Matches teamList={winningTeams} side={side} />
            )}
          </div>
          <div>
            {teamList.map((team) => (
              <p>{team ? team.teamName : "Yet to be decided"}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Matches;
