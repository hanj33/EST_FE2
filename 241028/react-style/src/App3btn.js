import React from "react";
import styled, { css } from "styled-components";

// danger 는 붉은 배경색을 의미하고, size 는 버튼에 마우스를 올렸을 때 커지는 크기를 의미합니다.
// size의 값으로 ‘large’ 가 전달되면 1.5배 커지게 됩니다.
// fullWidth 의 값이 true 라면 버튼의 넓이는 100% 가 됩니다.
// 이와 같은 컴포넌트를 만들어보세요.

import StyledButtons from "./Components/StyledButton";

const StyledButton = styled.button`
  width: 200px;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;

  color: yellow;

  background-color: ${(props) => (props.color === "danger" ? "red" : "none")};
`;

function App3() {
  return (
    <>
      <StyledButton color="danger" size="large" fullWidth>
        hello
      </StyledButton>

      <StyledButtons />
    </>
  );
}

export default App3;
