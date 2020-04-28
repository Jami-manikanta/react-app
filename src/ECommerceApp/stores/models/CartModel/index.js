import { action, observable } from "mobx";

class CartModel {
    cartId;
    productId;
    currencyFormat;
    price;
    style;
    title;
    image = "";
    @observable quantity = 1;
    constructor(id, eachProduct) {
        (this.productId = eachProduct.id), (this.cartId = id);
        (this.currencyFormat = eachProduct.currencyFormat),
            (this.price = eachProduct.price),
            (this.printStyles = eachProduct.style),
            (this.title = eachProduct.title),
            (this.image = eachProduct.image),
            (this.quantity = 1);
    }
    @action.bound
    increamentQuantity() {
        this.quantity++;
    }
}
export default CartModel;
