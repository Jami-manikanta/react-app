import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const WithScreenSizeDetectors = WrappedComponent => {
   @observer
   class ResizeComponent extends React.Component {
      @observable size

      componentDidMount() {
         this.updateSize()
      }

      updateSize = () => {
         if (window.innerWidth < 576) {
            this.size = 'Mobile'
         } else if (window.innerWidth >= 576 && window.innerWidth < 992) {
            this.size = 'Tablet'
         } else if (window.innerWidth >= 992) {
            this.size = 'Desktop'
         }
      }

      render() {
         return (
            <WrappedComponent size={this.size} updateSize={this.updateSize} />
         )
      }
   }
   return ResizeComponent
}

export default WithScreenSizeDetectors
