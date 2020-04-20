import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import {LeaderBoardStyle,PlayerDetails,PlayerNameStyle,PlayerScoreStyle} from './leaderBoardStyle.js';
import React from 'react';

class LeaderBoard extends React.Component{
    renderObjects=()=>{
       return newGridStore.playerDetailsObject.map((items)=>
            <PlayerDetails key={items.id}>
                <PlayerNameStyle>
                    {items.playerName}
                </PlayerNameStyle>

                <PlayerScoreStyle>
                    ...{items.level}
                </PlayerScoreStyle>
            </PlayerDetails>)
        }
    render(){
        return(
            <LeaderBoardStyle>
                {this.renderObjects()}
            </LeaderBoardStyle>
        )
    }
}
export {LeaderBoard}