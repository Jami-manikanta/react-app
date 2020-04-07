import React from 'react';
import NavBar from '../EmojiGame/NavBar.js';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import EmojiCard from '../EmojiGame/EmojiCard.js';
import WinOrLose from '../EmojiGame/WinOrLose.js';

const EmojiList=styled.div`${tw` flex justify-around p-6 flex-wrap bg-blue-100`}`;
class EmojiGame extends React.Component{
    state={
        score:0,
        topScore:0,
        gameState:'PLAYING',
        Clicked:false,
        emojis:[
            {id:1,isClicked:false,name:'Exploding-Head',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},
            {id:2,isClicked:false,name:'Grinning Face With Sweat',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
            {id:3,isClicked:false,name:'Smiling Face With Heart Eye',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
            {id:4,isClicked:false,name:'Sminking Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
            {id:5,isClicked:false,name:'Thinking Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
            {id:6,isClicked:false,name:'Winking Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
            {id:7,isClicked:false,name:'Grinning Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
            {id:8,isClicked:false,name:'Crying Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
            {id:9,isClicked:false,name:'Astonished Face',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
            {id:10,isClicked:false,name:'Face With Tears Of Joy',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
            {id:11,isClicked:false,name:'Start-Struck',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
            {id:12,isClicked:false,name:'Winking Face With Tounge',image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"}

            ]
    }
    
   onEmojiClick = (id) => {
      this.shuffleArray();
      this.handleScore(id);
   };
   
   shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.emojis);
    this.setState({ shuffledArr });
  };
  
  
   handleScore=(id)=>{
     this.state.emojis.forEach(element => {
      if (id === element.id && element.isClicked === false) {
       element.isClicked = true;
        this.handleIncrement();

      }
      else if (id === element.id && element.isClicked === true) {
        
        if (this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score});
        }
       if(this.state.score===12){
         this.setState({gameState:'Win',topScore:this.state.score});
       }
       else{
       this.setState({gameState:'Lose'});
       }
        this.state.emojis.forEach(element => (element.isClicked = false));
        
     }
    });
   }
   
   handleIncrement=()=>{
       this.setState({score:this.state.score+1});
   }
  
   shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
    
    
    onPlayAgainClick=()=>{
        this.setState({gameState:'PLAYING',score:0});
    }
    
    render(){
        return(
            <div>
            <NavBar topScore={this.state.topScore} score={this.state.score} />
             {(this.state.gameState==='Lose'||this.state.gameState==='Win')?<WinOrLose score={this.state.score} gameState={this.state.gameState} onPlayAgainClick={this.onPlayAgainClick}/>:<EmojiList>
            { this.state.emojis.map(eachEmoji=>
                <EmojiCard emojiCard={eachEmoji} 
                onEmojiClick={this.onEmojiClick}
                />
            )};
            </EmojiList>}
            
            </div>
            );
           
    }
} 

export default EmojiGame;