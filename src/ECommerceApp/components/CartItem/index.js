import React from 'react'
import {
   CartListDiv,
   CartItemImage,
   CartProductDetails,
   CartImageTiltle,
   CartImageStyle,
   CartProductQuantity,
   CartRemoveButton,
   CartEachItemAmount
} from '../../styledComponents/CartItemStyledComponets'
import { observer, inject } from 'mobx-react'

@inject('cartStore')
@observer
class CartItem extends React.Component {
   removeFromCart = () => {
      const { eachProduct } = this.props
      const { onRemoveCartItem } = this.props.cartStore
      onRemoveCartItem(eachProduct)
   }
   render() {
      const { eachProduct } = this.props
      return (
         <CartListDiv>
            <CartItemImage src={eachProduct.image} alt={eachProduct.title} />
            <CartProductDetails>
               <CartImageTiltle>
                  <div>{eachProduct.title}</div>
                  <CartRemoveButton onClick={this.removeFromCart}>
                     &times;
                  </CartRemoveButton>
               </CartImageTiltle>
               <CartImageStyle>
                  <div>{eachProduct.printStyles}</div>
                  <CartEachItemAmount>
                     {eachProduct.currencyFormat}
                     {(eachProduct.price * eachProduct.quantity).toFixed(2)}
                  </CartEachItemAmount>
               </CartImageStyle>
               <CartProductQuantity>
                  Quantity: {eachProduct.quantity}
               </CartProductQuantity>
            </CartProductDetails>
         </CartListDiv>
      )
   }
}
export default CartItem
