import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 50px;
  padding: 30px;
  color: white;
  background-color: royalblue;

  cursor: pointer;

  margin: 20px;
`;

// 버튼 스타일 가져와서 적용하기(소괄호 쓰기)
const ButtonStyle2 = styled(Button)`
  color: black;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
`;
const ButtonStyle3 = styled(Button)`
  color: yellow;
  border-radius: 16px;
  background-color: lightgreen;
  border: none;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
`;

function App2() {
  return (
    <>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼3</ButtonStyle3>
    </>
  );
}

export default App2;
