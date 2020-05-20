import React from "react";
import style from "./shared/Recipe.module.css";
import { StyledButton, TextBold, TextLight } from "./styled/Style";
import Ingredients from "./Ingredients";
import { connect } from "react-redux";
import { addCart } from "./actions/addAction";

const Recipe = ({ title, calories, ingredients, image, addCart }) => {
  //console.log("----props", addCart);
  let payload = { title, image };
  return (
    <div>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>
        <StyledButton onClick={() => addCart({ payload })}>
          +Add to cart
        </StyledButton>
      </p>
      <TextBold>Calories</TextBold>:<TextLight>{calories}</TextLight>
      <Ingredients ingredients={ingredients} />
    </div>
  );
};

//export default Recipe;
export default connect(null, { addCart })(Recipe);
