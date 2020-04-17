import React from 'react';
import gridGameStore from '../../../stores/GridGameStore';
import Grid from '../Grid';
import { observer } from "mobx-react";

@observer
class GridGameBody extends React.Component{
  intervalId;
  render(){
    const {gridSize,resetGridGame,listOfGrids,gridWidth}=gridGameStore;

    
    clearInterval(this.intervalId)
    this.intervalId=setInterval(()=>resetGridGame(),Number(`${gridSize**2}000`));
    return <div style={{display:'flex',flexWrap:'wrap',width:gridWidth}}>
       {listOfGrids.map((gridModel)=><Grid key={Math.random().toString()} gridModel={gridModel} gridWidth={gridWidth/gridSize}/>)}
    </div>
  }
}
export default GridGameBody