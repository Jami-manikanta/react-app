import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
const EmojiCardDiv=styled.div`${tw`w-3/12 m-6 p-6 shadow-outline  bg-white flex flex-col justify-center items-center  `}`;
const EmojiImage=styled.img`${tw`w-9/12`}`;
const EmojiCardName=styled.p`${tw`text-center`}`;
class EmojiCard extends React.Component{
  render(){
      const {emojiCard,onEmojiClick}=this.props;
     return(
       <EmojiCardDiv onClick={()=>onEmojiClick(emojiCard.id)}>
         <EmojiImage src={emojiCard.image} alt={emojiCard.name}/>
         <EmojiCardName>{emojiCard.name}</EmojiCardName>
      </EmojiCardDiv>
      );
  }  
}

export default EmojiCard