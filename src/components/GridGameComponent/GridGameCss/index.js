import tw from 'tailwind.macro';
import styled from '@emotion/styled';
//import themeStore from '../../../stores/ThemeStore';

export const Header=styled.div`${tw`bg-color-blue flex flex-col w-2/4`}`;
export const Toplevel=styled.div`${tw`text-center`}`;
export const HeaderTheme=styled.div`${tw`flex justify-between`}`;
export const GridGameWrapper=styled.div`${tw`h-screen`};
background-color:${(props)=> (props.selectedTheme==='light')?'white':'black'};
color:${(props)=> (props.selectedTheme==='light')?'black':'white'};`;










