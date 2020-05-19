import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) => props.theme.colors.light};
  border: none;
  margin-bottom: 1rem;
  border-radius: 3px;
  margin: ${(margin) => margin || "2rem"};

  animation: 2s ${fadeIn} ease-in;

  &: hover {
    color: white;
    background-color: palevioltred;
  }

  .someClass {
    color: blue;
  }
`;
const PaginationWrapper = styled.div`
  font-size: 2.5rem;
  width: 60%;
  background-color: blue;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

const Button = (primary, margin) => {
  return (
    <PaginationWrapper page="middle">
      <StyledButton primary={primary} margin={margin}>
        page 1
      </StyledButton>
      <p className="someClass">Test</p>
    </PaginationWrapper>
  );
};

export default Button;
