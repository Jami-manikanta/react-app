import React from "react";
import { observer, inject } from "mobx-react";
import CartItem from "../CartItem";
import {
    CartEmptyList,
    CartListItems,
} from "../../styledComponents/CartListStyledComponents/index";
@inject("cartStore")
@observer
class CartList extends React.Component {
    render() {
        const { CartList } = this.props.cartStore;
        return CartList.length === 0 ? (
            <CartEmptyList>Add some products in the cart</CartEmptyList>
        ) : (
            <CartListItems>
                {CartList.map((eachProduct) => (
                    <CartItem
                        key={eachProduct.cartId}
                        eachProduct={eachProduct}
                    />
                ))}
            </CartListItems>
        );
    }
}
export default CartList;
