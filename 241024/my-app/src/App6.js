// 오늘의 기분 만들기

import React, { useState } from "react";
import "./App.css";
import ButtonList from "./Components/ButtonList";
import Info from "./Components/Info";

function App6() {
  return (
    <>
      <h1>오늘의 기분을 선택해주세요</h1>
      <ButtonList />
      <Info />
    </>
  );
}

export default App6;
