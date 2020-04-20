import React from 'react';
import { observer } from "mobx-react";
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import themeStore from '../../../stores/ThemeStore/ThemeStore.js';
import Header from '../Header/GridHeader.js';
import {Result } from '../Result/Result.js';
import GridField from '../GridField/GridField.js';
import {UserDetailField} from '../UserName/UserName.js';
import {LeaderBoard} from '../LeaderBoard/LeaderBoard.js';
import {GridAppStyle,GridMainDivStyle} from './gridMainDivStyle.js';
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
                <GridMainDivStyle>
                   <Header/>
                   { newGridStore.isGameCompleted?<Result/>:<GridField />}
                   <LeaderBoard/>
                </GridMainDivStyle>
                :
                <UserDetailField/>
               
                }

            </GridAppStyle>
        )
    }
}
export default GridMainApp;

// {/* <Result /> */}
// import React from 'react';
// import { observer } from "mobx-react";
// import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
// import themeStore from '../../../stores/ThemeStore/ThemeStore.js';
// import Header from '../Header/GridHeader.js';
// import {Result } from '../Result/Result.js';
// import GridField from '../GridField/GridField.js';
// import {GridAppStyle,GridMainDivStyle} from './gridMainDivStyle.js';
// @observer
// class GridMainApp extends React.Component{
//     constructor(props){
//         super(props)
//         newGridStore.setGridCells();
//     }
//     render(){
//         let selectedTheme= themeStore.selectedTheme
//         let themeObject = themeStore.object[selectedTheme]
//         return (
//             <GridAppStyle themeObject ={themeObject}>
//                 <GridMainDivStyle>
//                    <Header/>
//                    { newGridStore.isGameCompleted?<Result/>:<GridField />}
                   
//                 </GridMainDivStyle>

//             </GridAppStyle>
//         )
//     }
// }
// export default GridMainApp;

// {/* <Result /> */}
