import React from "react";
import "../App.css";

import Button from "./Button";

function ButtonList() {
  return (
    <>
      <Button feeling="좋아요!" />
      <Button feeling="정말 좋아요" />
      <Button feeling="최고예요!" />
      <Button feeling="미쳤어요!!!!!" />
    </>
  );
}

export default ButtonList;
