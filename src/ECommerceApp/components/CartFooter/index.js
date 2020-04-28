import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { CartFooterDiv } from "../../styledComponents/CartFooterDivStyledComponents";

@inject("cartStore")
@observer
class CartFooter extends Component {
    resetCart = () => {
        const { resetCart } = this.props.cartStore;
        resetCart();
    };

    render() {
        return (
            <CartFooterDiv>
                <button onClick={this.resetCart}>CHECKOUT</button>
            </CartFooterDiv>
        );
    }
}

export default CartFooter;
