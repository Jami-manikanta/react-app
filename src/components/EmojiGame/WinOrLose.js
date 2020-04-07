import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
const  ResultPage=styled.div`${tw`flex flex-col h-screen justify-center items-center`}`;
const Win=styled.h1`${tw`text-green-500 text-4xl`}`;
const Lose=styled.h1`${tw`text-red-500 text-4xl`}`;
const score=styled.h1`${tw`text-4xl`}`;

class WinOrLose extends React.Component{

    handleClick=()=>{
            const {onPlayAgainClick}=this.props;
            onPlayAgainClick();
    }
    render(){
        return(
            <ResultPage>
               <score>{this.props.score}</score>
               {this.props.gameState==='Win'?<Win>You Win!</Win>:<Lose>You Lose!</Lose>}
               <button onClick={this.handleClick}>Play Again! </button>
            </ResultPage>
            );
    }
}

export default WinOrLose;