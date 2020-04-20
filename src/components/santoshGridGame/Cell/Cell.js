import React from 'react'
import { observable } from "mobx";
import { observer } from "mobx-react";
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import GridGameJson from '../../../stores/GridGameJson/GridGame.json';
import themeStore from '../../../stores/ThemeStore/ThemeStore.js';
import {EachCellStyle,EachCellAnimationChildDiv} from './cellstyle.js';

@observer
class Cell extends React.Component{
    @observable isShowHiddenCells;
    @observable disabled;
    @observable animation;
    timeIDs
    constructor(props){
        super(props);
        this.isShowHiddenCells=this.props.item.isHidden;
        this.animation=false;
        this.disabled=true
    }
    componentDidMount(){
        let  {gridWidth,gridSize} = GridGameJson[newGridStore.level];
        setTimeout(()=>{
            this.disabled=false
            if(this.props.item.isHidden){
            this.isShowHiddenCells=false;
            this.animation=true;
           this.timeIDs= setInterval(()=>newGridStore.resetgame(),gridSize*2000)
        }
        },gridSize*1000)
    }
    onCellClick=()=>{
        if(this.disabled===false){
            if(this.props.item.isHidden){
                this.disabled=true
                this.isShowHiddenCells=true
                setTimeout(()=>newGridStore.onCellClick(),200);
            }
            else{
                setTimeout(()=>newGridStore.decreaseLives(),200)
            }
        }
    }
    componentWillUnmount(){
        clearInterval(this.timeIDs);     
    }
    render(){
        let  {gridWidth,gridSize} = GridGameJson[newGridStore.level];
        let selectedTheme= themeStore.selectedTheme
        let {cellBackground} = themeStore.object[selectedTheme]
        let {hiddenCellBackground} = themeStore.object[selectedTheme]
        let {item} =this.props;
        return(
            <EachCellStyle  onClick={this.onCellClick}
                cellBackground = {cellBackground}
                isHidden={true} 
                gridWidth={gridWidth} 
                gridSize={gridSize}>
                <EachCellAnimationChildDiv
                    hiddenCellBackground={hiddenCellBackground}
                    animation={this.animation} 
                    isShowHiddenCells={this.isShowHiddenCells}
                     gridWidth={gridWidth} gridSize={gridSize}>
                    
                </EachCellAnimationChildDiv>
            </EachCellStyle>
        )
    }
}
export {Cell};
// {item!==undefined&&item.id}