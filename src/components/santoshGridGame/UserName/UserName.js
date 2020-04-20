import React from 'react';
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import {UserDetailStyle,UserNameStyle,DifficultyMainDiv,Input,GameNameStyle,StartGameStyled}
from './userNameStyle.js'



class UserDetailField extends React.Component{
    id;
    playerName;
    difficulty;

    onClickStart=()=>{
        if(this.playerName===undefined){
            this.playerName="Minion"
        }
        newGridStore.updatePlayerList({
            id:this.id++,
            playerName:this.playerName,
            difficulty:"Easy",
        });
    }
    onEnterPlayerName=(event)=>{
        if(event.keyCode===13){
            this.playerName=event.target.value
        }
        this.playerName=event.target.value
    }
    render(){
        return(
        <UserDetailStyle>
            <GameNameStyle>
                Grid Game
            </GameNameStyle>
            <UserNameStyle onKeyDown = {this.onEnterPlayerName} onChange={this.onEnterPlayerName} placeholder={"player Name"}/>
            <DifficultyMainDiv>
                <Input type="radio" value={"a"} name="difficulty"/> Low
                <Input type="radio" value={"a"} name="difficulty"/> Medium
                <Input type="radio" value={"a"} name="difficulty"/> Hard
            </DifficultyMainDiv>
            <StartGameStyled onClick={this.onClickStart}>Start</StartGameStyled>
        </UserDetailStyle>
        )

    }
}

export {UserDetailField};