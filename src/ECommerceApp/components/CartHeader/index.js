import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    CartHeaderDiv,
    CartText,
} from "../../styledComponents/CartHeaderStyledComponents";
class CartHeader extends React.Component {
    render() {
        return (
            <CartHeaderDiv>
                <AiOutlineShoppingCart className="w-12 h-12 " />
                <CartText>Cart</CartText>
            </CartHeaderDiv>
        );
    }
}
export default CartHeader;
