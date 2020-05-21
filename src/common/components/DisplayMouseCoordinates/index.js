import React from 'react'
class DisplayMouseCoordinates extends React.Component {
   render() {
      const { MouseCoordinates } = this.props
      return MouseCoordinates()
   }
}

export default DisplayMouseCoordinates
