import React from 'react';
import {observer} from 'mobx-react';
import GridGameHeader from './GridGameHeader';
import themeStore from '../../stores/ThemeStore';
import {GridGameWrapper} from './GridGameCss';
import GridGameBody from "./GridGameBody";

@observer
class GridGameComponent extends React.Component{
    render(){
        //alert(themeStore.getCurrentTheme())
        return(
            <GridGameWrapper selectedTheme={themeStore.getCurrentTheme()}>
                <GridGameHeader/>
                <GridGameBody/>
            </GridGameWrapper>
            );
    }
}

export default GridGameComponent;

