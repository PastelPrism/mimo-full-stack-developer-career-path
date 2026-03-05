import React, { useState } from "react";
import ScoreView from "./ScoreView";
import "./ScoreKeeper.css";

const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);

  return (
    <div className="score-keeper-container">
      <h1 className="score-keeper-heading">Score Keeper</h1>

      <ScoreView
        teamName="Team One"
        score={teamOneScore}
        leading={teamOneScore > teamTwoScore}
      />
      <button
        className="score-keeper-button"
        onClick={() => setTeamOneScore(teamOneScore + 1)}
      >
        +1 Team One
      </button>

      <ScoreView
        teamName="Team Two"
        score={teamTwoScore}
        leading={teamTwoScore > teamOneScore}
      />
      <button
        className="score-keeper-button"
        onClick={() => setTeamTwoScore(teamTwoScore + 1)}
      >
        +1 Team Two
      </button>
    </div>
  );
};

export default ScoreKeeper;
