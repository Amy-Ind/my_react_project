import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const StyledLi = styled.li`
  list-style: none;
  font-size: ${(props) => props.theme.fontSizes.small};
`;
const UlWrapper = styled.ul`
  visibility: visible;

  border-radius: 10px;
  margin: 20px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const Ingredients = ({ ingredients }) => {
  const [ingVisible, setIngVisible] = useState(false);
  const showIngredients = () => {
    let isVisible = ingVisible === false ? true : false;
    setIngVisible(isVisible);
  };

  if (ingVisible === false) {
    return (
      <p>
        <button onClick={showIngredients}>+ check ingredients</button>
      </p>
    );
  } else {
    return (
      <p>
        <button onClick={showIngredients}>+ check ingredients</button>
        <UlWrapper>
          <ul id="ing_list">
            {ingredients.map((ingredient) => (
              <StyledLi>{ingredient.text}</StyledLi>
            ))}
          </ul>
        </UlWrapper>
      </p>
    );
  }
};

export default Ingredients;
