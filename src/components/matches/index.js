import React, { useState, useEffect } from "react";
import Teamtemplate from "../Teamtemplate";
import "./styles.css";

// Creates the intended array for the next level and initializes every value to null
const setDefault = (teamList) => {
  if (teamList.length == 1) return [];
  const arr = new Array(teamList.length / 2);
  arr.fill(null);
  return arr;
};

function Matches({ teamList, side, setFinalist, topMargin }) {
  const [winningTeams, setWinningTeams] = useState(() => setDefault(teamList));

  useEffect(() => {
    if (!check()) return;
    if (teamList.length == 2) {
      //sets the semi-finalists
      setFinalist((prev) => {
        return [...prev, ...teamList];
      });
    }
    let id;
    //Extract out the winning teams
    for (let no = 0; no < teamList.length; no += 2) {
      id = setTimeout(() => {
        setWinningTeams((prevState) => {
          const winner = Math.random() < 0.5 ? teamList[no] : teamList[no + 1];
          //Extract out the indices pointing to null and then choose a random one from them to allocate the winner's match for the next level
          const possibleCandidates = [];
          for (let index = 0; index < prevState.length; index++) {
            if (prevState[index] === null) possibleCandidates.push(index);
          }

          const randomIndex =
            possibleCandidates[
              Math.floor(Math.random() * possibleCandidates.length)
            ];

          const tempState = [...prevState];
          tempState[randomIndex] = winner;
          return tempState;
        });
      }, Math.floor(Math.random() * 7000) + 5000); //Random value between 5 secs to 10 secs for time allotment of a match
    }
    return () => {
      while (id--) clearTimeout(id);
    };
  }, [teamList]);

  // Enables a check whether we are done with all the matches of the current level
  const check = () => {
    const nullArr = teamList.filter((ele) => ele === null);
    return nullArr.length === 0;
  };

  // Determines the data to be displayed according to the level
  const showLevel = () => {
    if (teamList.length === 4) return "Quaterfinal";
    if (teamList.length === 2) return "Semifinal";
    return `Round of ${teamList.length * 2}`;
  };

  if (teamList.length === 1) return null; // Base case for the recursive calls
  return (
    <div
      className="container"
      style={{
        marginTop: topMargin,
      }}
    >
      <div>
        {side ? (
          <div className="outerBoxLeft">
            <div className="wrapper">
              <h5>{showLevel()}</h5>
              {teamList.map((team) => (
                <Teamtemplate team={team} key={Math.random()} />
              ))}
            </div>
            <div>
              {teamList.length > 0 && (
                <Matches
                  teamList={winningTeams}
                  side={side}
                  setFinalist={setFinalist}
                  topMargin={topMargin + 50}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="outerBoxRight">
            <div>
              {teamList.length > 0 && (
                <Matches
                  teamList={winningTeams}
                  side={side}
                  setFinalist={setFinalist}
                  topMargin={topMargin + 50}
                />
              )}
            </div>
            <div className="wrapper">
              <h5>{showLevel()}</h5>
              {teamList.map((team) => (
                <div className="block" key={Math.random()}>
                  <p>{team ? team.teamName : "Yet to be decided"}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Matches;
