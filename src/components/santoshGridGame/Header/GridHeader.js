import React from "react";
import {observer} from 'mobx-react';
import themeStore from '../../../stores/ThemeStore/ThemeStore.js';
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import {HeaderDivStyl,TopScore,LevelAndTheme,ThemeButtonStyle,LivesStyle,PlayerNameStyle,NameAndLiveStyle} from './gridHeaderStyle.js';

@observer
class Header extends React.Component{

    changeTheme=()=>{
        themeStore.changeTheme();
    }
    render(){
        let {name,color} =themeStore.object[themeStore.selectedTheme]
        let borderColor = color
        return (
            <HeaderDivStyl >
                <TopScore>Top Level: {newGridStore.topLevel}</TopScore>
                <NameAndLiveStyle>
                    <PlayerNameStyle>Player: {newGridStore.playerName}</PlayerNameStyle>
                    <LivesStyle> lives: {newGridStore.lives}</LivesStyle>
                </NameAndLiveStyle>
                <LevelAndTheme>
                    level: {newGridStore.level}
                    <ThemeButtonStyle onClick={this.changeTheme} borderColor={borderColor}>
                        Mode: {name}
                    </ThemeButtonStyle>
                </LevelAndTheme>
            </HeaderDivStyl>
        )
    }
}

export default Header;