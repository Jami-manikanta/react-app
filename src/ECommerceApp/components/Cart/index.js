import React from "react";
import { CartDiv } from "../../styledComponents/CartStyledComponents";
import CartList from "../CartList";
import CartHeader from "../CartHeader";
import CartFooter from "../CartFooter";
class Cart extends React.Component {
    render() {
        return (
            <CartDiv>
                <CartHeader />
                <CartList />
                <CartFooter />
            </CartDiv>
        );
    }
}
export default Cart;
