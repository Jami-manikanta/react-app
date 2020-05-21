import React, { Component } from 'react'
import CollapseExpand from '../../components/CollapseExpand'
import ViewEditToggle from '../../components/ViewEditToggle'
import DeviceTypeText from '../../components/DeviceTypeText'
import { observer } from 'mobx-react'
import DisplayMouseCoordinates from '../../components/DisplayMouseCoordinates'
import { Container, Header } from '../../StyledComponents'
import MouseCoordinates from '../../components/MouseCoordinates'

@observer
class PracticeAdvancedConceptsRoute extends Component {
   MouseCoordinatesFn = () => {
      return <MouseCoordinates />
   }

   render() {
      return (
         <Container>
            <Header className='h-24 bg-gray-300 flex items-center justify-center'>
               Hoc's Usage
            </Header>
            <CollapseExpand />
            <ViewEditToggle />
            <DeviceTypeText />
            <Header>RenderProps Usage</Header>
            <DisplayMouseCoordinates
               MouseCoordinates={this.MouseCoordinatesFn}
            />
         </Container>
      )
   }
}

export default PracticeAdvancedConceptsRoute
