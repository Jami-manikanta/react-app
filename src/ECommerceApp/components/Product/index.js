import React from "react";
import {
    ProductCard,
    ProductTitle,
    ProductPriceDiv,
    CurrencyFormat,
    AddToCartButton,
    FreeShipping,
    ProductImage,
    Underscore,
    ProductPrice,
    InstallemntsPrice,
} from "../../styledComponents/ProductStyledComponents";
import { inject } from "mobx-react";
//import CartStore from "../../stores/CartStore";

@inject("cartStore")
class Product extends React.Component {
    onAddToCart = () => {
        const { onClickAddToCart } = this.props.cartStore;
        const { eachProduct } = this.props;
        onClickAddToCart(eachProduct);
    };

    render() {
        const { eachProduct } = this.props;
        // console.log(eachProduct.image);
        return (
            <ProductCard>
                <FreeShipping>Free Shipping</FreeShipping>
                <ProductImage src={eachProduct.image} alt={eachProduct.title} />
                <ProductTitle>{eachProduct.title}</ProductTitle>
                <Underscore></Underscore>
                <ProductPriceDiv>
                    <CurrencyFormat>
                        {eachProduct.currencyFormat}
                    </CurrencyFormat>
                    <ProductPrice>{eachProduct.price}</ProductPrice>
                </ProductPriceDiv>
                <InstallemntsPrice>
                    or {eachProduct.installments} *{" "}
                    {(eachProduct.price / eachProduct.installments).toFixed(2)}
                </InstallemntsPrice>
                <AddToCartButton onClick={this.onAddToCart}>
                    Add to cart
                </AddToCartButton>
            </ProductCard>
        );
    }
}
export default Product;
