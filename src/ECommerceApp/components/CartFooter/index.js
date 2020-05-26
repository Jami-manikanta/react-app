import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {
   CartFooterDiv,
   CartSubTotalDiv,
   CheckOutButton,
   CartSubTotal,
   CartSubTotalHeading
} from '../../styledComponents/CartFooterDivStyledComponents'

@inject('cartStore')
@observer
class CartFooter extends Component {
   resetCart = () => {
      const { resetCart } = this.props.cartStore
      resetCart()
   }

   render() {
      const { totalCartAmount, CartList } = this.props.cartStore
      return (
         <CartFooterDiv>
            <CartSubTotalDiv>
               <CartSubTotalHeading>SUBTOTAL</CartSubTotalHeading>
               <CartSubTotal>₹{totalCartAmount.toFixed(2)}</CartSubTotal>
            </CartSubTotalDiv>
            <CheckOutButton
               onClick={this.resetCart}
               disabled={CartList.length === 0 ? true : false}
            >
               CHECKOUT
            </CheckOutButton>
         </CartFooterDiv>
      )
   }
}

export default CartFooter
