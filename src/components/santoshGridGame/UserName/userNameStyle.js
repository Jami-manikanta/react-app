import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const UserDetailStyle = styled.div`
            background:#2a4365;
            box-shadow:1px 1px 40px 3px black;color:black;
            ${tw `flex flex-col items-center justify-center py-10`}`
const GameNameStyle =styled.p `
            font-size:35px;
            font-weight:bold;
            color:white;${tw `my-10`}`;

const UserNameStyle = styled.input`
            background:#2a4365;
            color:white;
            width:250px;
            height:40px;
            font-weight:bold;
            border-bottom:1px solid lightGrey;
            ${tw `flex items-center pl-2 mb-10`}`;
const DifficultyMainDiv=styled.div`width:300px;
            ${tw `flex  justify-center mb-5`}`;
const Input=styled.input`
            width:20px;
            height:20px;
            margin-left:20px;${tw `mb-6`}`;
const StartGameStyled =styled.div`
            background:#10e6d0;
            &:hover {background:#22bfaf };
            color:white;
            font-size:25px;
            border-radius:20px;
            box-shadow:1px 0px 20px 0px black;
            ${tw `flex items-center justify-center px-8`}`;
export {UserDetailStyle,UserNameStyle,DifficultyMainDiv,Input,GameNameStyle,StartGameStyled}





