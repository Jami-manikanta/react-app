import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
   CartHeaderDiv,
   CartText,
   Close,
   CartCloseButton,
   CartImageInCart
} from '../../styledComponents/CartHeaderStyledComponents'
class CartHeader extends React.Component {
   onCartCloseButton = () => {
      const { onCartClick } = this.props
      onCartClick()
   }
   render() {
      return (
         <CartHeaderDiv>
            <CartCloseButton>
               <Close onClick={this.onCartCloseButton}>X</Close>
            </CartCloseButton>
            <CartImageInCart>
               <AiOutlineShoppingCart className='w-12 h-12 ' />
               <CartText>Cart</CartText>
            </CartImageInCart>
         </CartHeaderDiv>
      )
   }
}
export default CartHeader
