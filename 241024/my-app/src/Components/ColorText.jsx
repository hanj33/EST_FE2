import React from "react";
import "../App.css"; //파일의 위치가 달라졌으니 css의 주소도 바꿔줍니다.

function ColorText({ color }) {
  return <strong style={{ color: color }}>색이 바뀌어요</strong>;
}

export default ColorText;
