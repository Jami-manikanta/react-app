import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const WithToggle = WrappedComponent => {
   @observer
   class Component extends React.Component {
      @observable toggleStatus = false

      onToggle = () => {
         console.log(this.toggleStatus)
         this.toggleStatus = !this.toggleStatus
      }

      render() {
         return (
            <WrappedComponent
               toggleStatus={this.toggleStatus}
               onToggle={this.onToggle}
            />
         )
      }
   }

   return Component
}

export default WithToggle
