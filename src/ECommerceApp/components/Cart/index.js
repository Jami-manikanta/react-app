import React from 'react'
import { CartDiv } from '../../styledComponents/CartStyledComponents'
import CartList from '../CartList'
import CartHeader from '../CartHeader'
import CartFooter from '../CartFooter'
class Cart extends React.Component {
   render() {
      const { onCartClick } = this.props
      return (
         <CartDiv>
            <CartHeader onCartClick={onCartClick} />
            <CartList />
            <CartFooter />
         </CartDiv>
      )
   }
}
export default Cart
