import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
   EditorContainer,
   EditorContainerHeading,
   EditButton
} from '../../StyledComponents'

@observer
class ViewEditToggle extends Component {
   @observable editValue = 'Click on the edit button to start editing'

   updateText = event => {
      this.editValue = event.target.value
   }

   render() {
      const { toggleStatus, onToggle } = this.props
      return (
         <EditorContainer>
            <EditorContainerHeading>ViewEditToggle</EditorContainerHeading>
            <div className='flex justify-center items-center'>
               {!toggleStatus ? (
                  <span>{this.editValue}</span>
               ) : (
                  <Input
                     onChange={this.updateText}
                     type='text'
                     toggleStatus={toggleStatus}
                     value={this.editValue}
                  />
               )}

               <EditButton onClick={onToggle}>
                  {toggleStatus ? 'cancel' : 'Edit'}
               </EditButton>
            </div>
         </EditorContainer>
      )
   }
}

export default ViewEditToggle
