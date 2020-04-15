import React from 'react';
import gridGameStore from '../../../stores/GridGameStore';
import Grid from '../Grid';

class GridGameBody extends React.Component{
  componentDidMount(){
      
  }
  render(){
    const {gridList}=gridGameStore;
    <div style={{display:'flex',flexWrap:'wrap'}}>
       {gridList.map((gridModel)=><Grid key={Math.random().toString()} gridModel={gridModel}/>)}
    </div>
    
  }
}
export default GridGameBody;