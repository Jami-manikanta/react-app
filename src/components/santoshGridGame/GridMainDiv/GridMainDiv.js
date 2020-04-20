import React from 'react';
import { observer } from "mobx-react";
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import themeStore from '../../../stores/ThemeStore/ThemeStore.js';
import Header from '../Header/GridHeader.js';
import {Result } from '../Result/Result.js';
import GridField from '../GridField/GridField.js';
import {UserDetailField} from '../UserName/UserName.js';
import {LeaderBoard} from '../LeaderBoard/LeaderBoard.js';
import {GridAppStyle,GridMainDivStyle,GridBodyDiv} from './gridMainDivStyle.js';
@observer
class GridMainApp extends React.Component{
    constructor(props){
        super(props)
        newGridStore.setGridCells();
    }
    render(){
        let selectedTheme= themeStore.selectedTheme
        let themeObject = themeStore.object[selectedTheme]
        return (
            <GridAppStyle themeObject ={themeObject}>
                {newGridStore.userLoggined?
                <GridBodyDiv><GridMainDivStyle>
                   <Header/>
                   { newGridStore.isGameCompleted?<Result/>:<GridField />}
                   
                </GridMainDivStyle>
                
                </GridBodyDiv>
                :
                <UserDetailField/>
               
                }

            </GridAppStyle>
        )
    }
}
export default GridMainApp;

