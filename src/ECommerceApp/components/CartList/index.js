import React from "react";
import { observer, inject } from "mobx-react";
import CartItem from "../CartItem";
//import Product from "../Product";
//import { ProductListDiv } from "../../styledComponents/BodyHeaderStyledComponents/ProductListStyledComponents";

@inject("cartStore")
@observer
class CartList extends React.Component {
    render() {
        const { CartList } = this.props.cartStore;
        return (
            <div>
                {CartList.map((eachProduct) => (
                    <CartItem
                        key={eachProduct.cartId}
                        eachProduct={eachProduct}
                    />
                ))}
            </div>
        );
    }
}
export default CartList;
