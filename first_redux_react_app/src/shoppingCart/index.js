import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import { StyledImage } from "../styled/Style";
const ShoppingCart = (props) => {
  console.log("***", props);
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <Link to="/cart">
        <button className="Cart-button" onClick={props.getNumbers}>
          <StyledImage>
            <ion-icon name="cart-outline"></ion-icon>
          </StyledImage>
          cart{"   "}
          <span>{props.cartProps.goodNumbers}</span>
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps, { getNumbers })(ShoppingCart);
