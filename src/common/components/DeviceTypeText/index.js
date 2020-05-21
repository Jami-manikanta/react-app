import React, { Component } from 'react'
import WithScreenSizeDetectors from '../../hocs/WithScreenSizeDetectors'
import {
   DeviceTypeContainer,
   DeviceTypeTextHeading
} from '../../StyledComponents'

class DeviceTypeText extends Component {
   updateSize = () => {
      const { updateSize } = this.props
      updateSize()
   }

   componentDidMount() {
      window.addEventListener('resize', this.updateSize)
   }

   render() {
      const { size } = this.props
      return (
         <DeviceTypeContainer>
            <DeviceTypeTextHeading>DeviceTypeText</DeviceTypeTextHeading>
            <span>Device Type : {size}</span>
         </DeviceTypeContainer>
      )
   }
}

export default WithScreenSizeDetectors(DeviceTypeText)
