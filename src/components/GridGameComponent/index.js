import React from 'react';
import {observer} from 'mobx-react';
import GridGameHeader from './GridGameHeader';
import themeStore from '../../stores/ThemeStore';
import {GridGameWrapper} from './GridGameCss'

@observer
class GridGameComponent extends React.Component{
    render(){
        //alert(themeStore.getCurrentTheme())
        return(
            <GridGameWrapper selectedTheme={themeStore.getCurrentTheme()}>
                <GridGameHeader/>
                
            </GridGameWrapper>
            );
    }
}

export default GridGameComponent;

