import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import style from "../shared/Recipe.module.css";
import { Title, TotalText, WrapperCenter } from "../styled/Style";
import { goodsQuantity } from "../actions/goodsQuantity";
import OrderSubmit from "./OrderSubmit";

const StyledIcon = styled.image`
  font-size: 25px;
  color: blue;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const Cart = (props) => {
  let goodsInCart = [];
  Object.keys(props.cartProps.goodList).forEach(function (item) {
    goodsInCart.push(props.cartProps.goodList[item]);
  });

  goodsInCart = goodsInCart.map((good, index) => {
    //console.log("good------", good.image);
    return (
      <Fragment key={index}>
        <div className={style.container}>
          <div>
            <img className={style.cartImage} src={good.image} alt="" />
          </div>
          <div>
            <span>{good.goodName}</span>
          </div>
          <div>
            <StyledIcon>
              <button
                onClick={() => props.goodsQuantity("decrease", good.goodName)}
              >
                -
              </button>
            </StyledIcon>
            <span>{good.number}</span>
            <StyledIcon>
              <button
                onClick={() => props.goodsQuantity("increase", good.goodName)}
              >
                +
              </button>
            </StyledIcon>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <div>
      <Title>Shopping Cart</Title>

      <div className={style.pc}>
        <div>Image</div>
        <div>Name</div>
        <div>Quantity</div>
      </div>
      {goodsInCart}
      <p>
        <TotalText>Total : {props.cartProps.goodNumbers}</TotalText>
      </p>
      <WrapperCenter>
        <OrderSubmit />
      </WrapperCenter>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

const mapDispatchToProps = {
  goodsQuantity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
