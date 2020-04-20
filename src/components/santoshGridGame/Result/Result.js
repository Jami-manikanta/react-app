import React from 'react';
import {ResultMainDiv,ScorStyle,StatusStyle,PlayagainButtonStyle} from './resultStyle.js';
import {newGridStore} from '../../../stores/santoshGridGameStore/GridGameStore.js'
import { observer } from "mobx-react";

@observer
class Result   extends React.Component{
    render(){
        return(
            <ResultMainDiv>
                <ScorStyle>
                    {newGridStore.level}
                </ScorStyle>
                <StatusStyle>
                    Congratulations! You won the Game
                </StatusStyle>
                <PlayagainButtonStyle onClick={newGridStore.onPlayAgainClick}>
                    Play Again
                </PlayagainButtonStyle>

            </ResultMainDiv>
        )
    }
}

export {Result}