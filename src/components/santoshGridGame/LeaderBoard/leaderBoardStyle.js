import styled from '@emotion/styled';
import  tw from 'tailwind.macro';
const LeaderBoardStyle= styled.div`
            box-shadow:1px 0px 20px 0px black;
            ${tw `flex flex-col px-3 py-2 `}`;
const PlayerDetails =styled.div`width:190px;${tw `flex justify-between `}`;
const PlayerNameStyle=styled.div`border-bottom:1px solid lightGrey`;
const PlayerScoreStyle = styled.div`box-shadow:2px 2px 10px black; ;
                ${tw `px-5`}`
export {PlayerDetails,PlayerNameStyle,PlayerScoreStyle,LeaderBoardStyle};
