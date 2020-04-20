import React from 'react';
import {GameCompletedMessage} from '../GridGameCss';
import gridGameStore from '../../../stores/GridGameStore';


class GridGameCompleted extends React.Component{
    
    onhandleClick=()=>{
         //  const {level,toplevel}=gridGameStore;
         //  this.toplevel=this.level>this.toplevel?this.level:this.toplevel;    
            gridGameStore.resetGridGame();
    }

    render(){
        return <GameCompletedMessage>
            <div style={{textAlign:'center'}}><b>7</b></div>
           <div> <b>Congratulations! You Completed all the levels!!!!</b></div>
           <button onClick={this.onhandleClick}>Play Again</button>
        </GameCompletedMessage>
    }
}

export default GridGameCompleted;

