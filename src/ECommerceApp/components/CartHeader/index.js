import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    CartHeaderDiv,
    CartText,
    Close,
} from "../../styledComponents/CartHeaderStyledComponents";
class CartHeader extends React.Component {
    onCartCloseButton = () => {
        const { onCartClick } = this.props;
        onCartClick();
    };
    render() {
        return (
            <CartHeaderDiv>
                <div className="w-1/4">
                    <Close onClick={this.onCartCloseButton}>X</Close>
                </div>
                <div className="w-3/4 flex justify-center items-center flex-start -ml-10">
                    <AiOutlineShoppingCart className="w-12 h-12 " />
                    <CartText>Cart</CartText>
                </div>
            </CartHeaderDiv>
        );
    }
}
export default CartHeader;
