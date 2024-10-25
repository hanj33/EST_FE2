import React from "react";
// import "../App.css";

function DisplayMood({ mood }) {
  return (
    <div>
      {mood ? `기분이 ${mood}` : "아직 아무런 기분이 선택되지 않았어요"}
    </div>
  );
}

export default DisplayMood;
