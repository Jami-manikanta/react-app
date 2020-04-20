import React from 'react'
import {GridFieldMainStyle} from  './gridFieldStyle.js';
import {Cell} from '../Cell/Cell.js';
import {observable} from 'mobx';
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import { observer } from "mobx-react";
import gridGameStore from "../../../stores/GridGameStore/index.js";
import GridGameJson from '../../../stores/GridGameJson/GridGame.json';
@observer
class GridField extends React.Component{

    renderCells=()=>{
        return newGridStore.listOfGrid.map((item)=><Cell item = {item} key={Math.random()}/>);
    }
    render(){
        let  {gridWidth} = GridGameJson[newGridStore.level];
        return(
        <GridFieldMainStyle gridWidth={gridWidth}>
            {this.renderCells()}
        </GridFieldMainStyle>
        )
    }
}
export default GridField