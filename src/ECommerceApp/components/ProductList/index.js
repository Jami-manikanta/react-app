import React from 'react'
import { observer, inject } from 'mobx-react'
import Product from '../Product'
import { ProductListDiv } from '../../styledComponents/BodyHeaderStyledComponents/ProductListStyledComponents'

@inject('productStore')
@observer
class ProductList extends React.Component {
   render() {
      const { productsList } = this.props.productStore
      return (
         <ProductListDiv>
            {productsList.map(eachProduct => (
               <Product key={eachProduct.id} eachProduct={eachProduct} />
            ))}
         </ProductListDiv>
      )
   }
}
export default ProductList
