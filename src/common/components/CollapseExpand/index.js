import React, { Component } from 'react'
import { observer } from 'mobx-react'
import WithToggle from '../../hocs/WithToggle'
import {
   CollapseExpandContainer,
   CollapseExpandHeading,
   ShoppingListContainer,
   ShoppingListText,
   ShoppingListcart,
   CollapseButton
} from '../../StyledComponents'

@observer
class CollapseExpand extends Component {
   render() {
      const { toggleStatus, onToggle } = this.props
      return (
         <CollapseExpandContainer>
            <CollapseExpandHeading>CollapseExpand</CollapseExpandHeading>
            <ShoppingListContainer>
               <ShoppingListText> Sample shoping List:</ShoppingListText>
               <ShoppingListcart>
                  <CollapseButton onClick={onToggle}>
                     {toggleStatus ? 'Collapse' : 'Expand'}
                  </CollapseButton>
                  {toggleStatus ? (
                     <ShoppingListcart>
                        <div>Eggs</div>
                        <div>Bread</div>
                     </ShoppingListcart>
                  ) : (
                     ''
                  )}
               </ShoppingListcart>
            </ShoppingListContainer>
         </CollapseExpandContainer>
      )
   }
}

export default WithToggle(CollapseExpand)
