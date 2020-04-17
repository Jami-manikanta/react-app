import React from 'react';
import {observer} from 'mobx-react';
import {Header,HeaderTheme,Toplevel,Themebutton} from '../GridGameCss';
import themeStore from '../../../stores/ThemeStore';
import  gridGameStore  from "../../../stores/GridGameStore";
@observer
class GridGameHeader extends React.Component{
    onhandleClick=()=>{
        themeStore.setCurrentTheme();
    } 
    render(){
        const {level,toplevel,gridWidth}=gridGameStore;
        return(
           <Header style={{width:gridWidth}}>
               <Toplevel><b>Top Level:{toplevel}</b></Toplevel>
               <HeaderTheme>
                 <span><b>Level:{level}</b></span>
                 <Themebutton onClick={this.onhandleClick}><b>Mode: {themeStore.selectedTheme}</b></Themebutton>
               </HeaderTheme>
           </Header>
            );
    }
}

export default GridGameHeader;

