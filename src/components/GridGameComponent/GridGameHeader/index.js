import React from 'react';
import {observer} from 'mobx-react';
import {Header,HeaderTheme,Toplevel} from '../GridGameCss';
import themeStore from '../../../stores/ThemeStore';

@observer
class GridGameHeader extends React.Component{
    onhandleClick=()=>{
        themeStore.setCurrentTheme();
    }
    
    render(){
        return(
           <Header>
               <Toplevel>Top Level:1</Toplevel>
               <HeaderTheme>
                 <span>Level:0</span>
                 <button onClick={this.onhandleClick}>{themeStore.selectedTheme}</button>
               </HeaderTheme>
           </Header>
            );
    }
}

export default GridGameHeader;

