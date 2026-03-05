import React from "react";
import "./ScoreView.css";

const ScoreView = ({ teamName, score, leading }) => {
  const wrapperClass = leading
    ? "score-view-wrapper-leading-true"
    : "score-view-wrapper-leading-false";

  return (
    <div className={wrapperClass}>
      <h2>
        {teamName}: {score}
      </h2>
    </div>
  );
};

export default ScoreView;
