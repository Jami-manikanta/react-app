import React from 'react'
import {
   SizesFilterDiv,
   SizesButtons,
   SizesHeading
} from '../../styledComponents/SizesFilterStyledComponents'
import { observer, inject } from 'mobx-react'
import SizeButtonComponent from '../SizeButtonComponent'

@inject('productStore')
@observer
class SizesFilter extends React.Component {
   render() {
      return (
         <SizesFilterDiv>
            <SizesHeading>Sizes:</SizesHeading>
            <SizesButtons>
               <SizeButtonComponent value='XS' />
               <SizeButtonComponent value='S' />
               <SizeButtonComponent value='M' />
               <SizeButtonComponent value='L' />
               <SizeButtonComponent value='XL' />
               <SizeButtonComponent value='XXL' />
            </SizesButtons>
         </SizesFilterDiv>
      )
   }
}
export default SizesFilter
