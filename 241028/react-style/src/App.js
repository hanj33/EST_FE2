import React from "react";
import styled, { css } from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`;

function App() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>

      <br></br>
      <Three>Lorem ipsum dolor</Three>
    </div>
  );
}

export default App;
