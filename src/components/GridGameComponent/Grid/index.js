import React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";
import gridGameStore from "../../../stores/GridGameStore";
import themeStoreOne from "../../../stores/ThemeStore/index";

@observer
class Grid extends React.Component{
     @observable isGridDisabled=true;
     @observable inCorrectGrid=false;
     componentDidMount(){
         const {gridSize} = gridGameStore;
         setTimeout(()=>(this.isGridDisabled=false),Number(`${gridSize}000`)) 
    }

     handleOnClick=()=>{                                                                                      
          const {gridModel}=this.props;
          gridModel.isClicked=true;   
          this.isGridDisabled=true;
          this.inCorrectGrid=true;
          gridGameStore.validateGrid(gridModel);
     }

    render(){
       const {gridModel,gridWidth}=this.props;      
       return (
       (themeStoreOne.getCurrentTheme()=='Dark')?
      (<button style={{width:`${gridWidth-7}px`,height:`${gridWidth-7}px`,
       backgroundColor:gridModel.isClickableGrid&&this.isGridDisabled?'#00ffff':(this.inCorrectGrid==true)?'red':'#264d73',
       margin:'3px'
        }}
       onClick={this.handleOnClick}
       disabled={this.isGridDisabled}/>)
       :
         <button style={{width:`${gridWidth-7}px`,height:`${gridWidth-7}px`,
          backgroundColor:gridModel.isClickableGrid&&this.isGridDisabled?'green':(this.inCorrectGrid==true)?'red':'#264d73',
          margin:'3px'
           }}
          onClick={this.handleOnClick}
          disabled={this.isGridDisabled}/>);
          } 
}

export default Grid;
