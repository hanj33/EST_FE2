// useState 활용

// import React from "react";
import React, { useState } from "react";
import "./App.css";

function App4(props) {
  //   const [like, setLike] = useState(0);
  let [like, setLike] = useState(0);

  // console.log(useState(0));

  function clickLike() {
    //   like += 1;
    setLike(like + 1);
    console.log(like);
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
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
    </div>
  );
}
export default App4;
