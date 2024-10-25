// useState 활용-실습

import React, { useState } from "react";
import "./App.css";

function App5(props) {
  //   const [like, setLike] = useState("");

  //   function clickLike() {
  //     if (like === "") {
  //       setLike("Like");
  //     } else {
  //       setLike("");
  //     }
  //   }
  const [isLike, setIsLike] = useState(false);

  function clickLike() {
    setIsLike(!isLike);
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={styleColor}>{myColor}</span>
      </h2>
      <button onClick={clickLike}>like</button>
      {/* <span> {like}</span> */}
      {isLike ? <span> Like</span> : null}
    </div>
  );
}

export default App5;
