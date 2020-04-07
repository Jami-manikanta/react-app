import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const NavBarDiv=styled.div`${tw` flex justify-between p-3 bg-white`}`;
const EmojiGameHeader=styled.h1`${tw`text-4xl`}`;

class NavBar extends React.Component{
    render(){
        const {topScore,score}=this.props;
        return(
            <NavBarDiv>
              <div>
                 <EmojiGameHeader>EmojiGame</EmojiGameHeader>
              </div>
              <div>
               <span><b>Score:</b>{score}</span>
               <span><b>Highest Score:</b>{topScore}</span>
              </div> 
            </NavBarDiv>
            );
    }
}
export default NavBar;