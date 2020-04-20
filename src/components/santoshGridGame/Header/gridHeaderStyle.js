import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const HeaderDivStyl =styled.div`${tw `flex flex-col items-center mb-6`}`

const TopScore =styled.div`font-size:30px;${tw `mb-8`}`;
const LivesStyle =styled.div `${tw `mb-4`}`;
const PlayerNameStyle = styled.div `${tw ``}`
const NameAndLiveStyle = styled.div `${tw `w-full flex justify-between`}`
const LevelAndTheme =styled.div`width:100%;${tw`flex justify-between items-center`}`;
const ThemeButtonStyle=styled.button`border:1px solid ${props=>props.borderColor}; ${tw `flex items-center justify-center px-2 py-1 `}`;

export {HeaderDivStyl,LivesStyle,TopScore,LevelAndTheme,ThemeButtonStyle,PlayerNameStyle,NameAndLiveStyle};