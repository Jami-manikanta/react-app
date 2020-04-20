import React from 'react';
import {observer} from 'mobx-react';
import {Header,HeaderTheme,Toplevel,Themebutton} from '../GridGameCss';
import themeStoreOne from '../../../stores/ThemeStore/index.js';
import  gridGameStore  from "../../../stores/GridGameStore";
@observer
class GridGameHeader extends React.Component{
    onhandleClick=()=>{
        themeStoreOne.setCurrentTheme();
    } 
    render(){
        const {level,toplevel,gridWidth}=gridGameStore;
        return(
           <Header style={{width:gridWidth}}>
               <Toplevel><b>Top Level:{toplevel}</b></Toplevel>
               <HeaderTheme>
                 <span><b>Level:{level}</b></span>
                 <Themebutton onClick={this.onhandleClick}><b>Mode: {themeStoreOne.selectedTheme}</b></Themebutton>
               </HeaderTheme>
           </Header>
            );
    }
}

export default GridGameHeader;

