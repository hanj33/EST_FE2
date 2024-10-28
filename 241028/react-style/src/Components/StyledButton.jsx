import React from "react";

import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 30px 20px;
  border: none;
  border-radius: 5px;
  font-size: ${(props) => (props.size === "large" ? "25px" : "16px")};
  cursor: pointer;

  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "red";
      case "basic":
        return "royalblue";
      case "success":
        return "green";
      case "fail":
        return "grey";
      default:
        return "white";
    }
  }};

  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

function StyledButtons() {
  return (
    <>
      <StyledButton size="large" color="danger">
        StyledButton
      </StyledButton>
      <StyledButton color="basic">StyledButton</StyledButton>
    </>
  );
}

export default StyledButtons;
