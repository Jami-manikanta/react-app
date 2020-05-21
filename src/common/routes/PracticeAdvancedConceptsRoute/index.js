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
            <Header>Hoc's Usage</Header>
            <ViewEditToggle />
            <CollapseExpand />
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
