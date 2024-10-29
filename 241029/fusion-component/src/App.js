import { useState } from "react";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";
import Normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
        ${Normalize}
        a{
        text-decoration: none;
        }

        ul {
        list-style: none;
        padding: 0;
        }
        button {
        border: none;
        cursor: pointer;
        }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
      <button>HELLO</button>
    </>
  );
}
export default App;
