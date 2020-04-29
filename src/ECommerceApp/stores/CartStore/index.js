import React from "react";
import { observable, action, computed } from "mobx";
import CartModel from "../models/CartModel";
class CartStore {
    id = 0;
    @observable CartList = [];
    @action.bound
    onClickAddToCart(eachProduct) {
        const cartModel = new CartModel(this.id++, eachProduct);
        const item = this.CartList.find(
            (product) => product.productId === eachProduct.id
        );
        if (item) {
            item.increamentQuantity();
        } else {
            this.CartList.push(cartModel);
        }
    }

    @action.bound
    onRemoveCartItem(cartModel) {
        this.CartList.splice(this.CartList.indexOf(cartModel), 1);
    }

    @action.bound
    resetCart() {
        this.CartList = [];
        alert("Thank You For Shopping!!!!");
    }

    @action.bound
    clearCart() {}

    @computed
    get totalCartAmount() {
        let subtotal = 0;
        this.CartList.map(
            (eachProduct) =>
                (subtotal += eachProduct.price * eachProduct.quantity)
        );
        return subtotal;
    }

    @computed
    get noOfProductsInCart() {
        let length = 0;
        this.CartList.map((eachProduct) => (length += eachProduct.quantity));
        return length;
    }
}
export default CartStore;
