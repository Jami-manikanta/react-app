import tw from 'tailwind.macro';
import styled from '@emotion/styled';
export const Header=styled.div`${tw`bg-color-blue flex flex-col `}`;
export const Toplevel=styled.div`${tw`text-center p-4 text-xl`}`;
export const HeaderTheme=styled.div`${tw`flex justify-between p-4 text-xl`}`;
export const GridGameWrapper=styled.div`${tw`h-screen flex flex-col justify-center items-center `};
background-color:${(props)=> (props.selectedTheme==='Light')?'white':'black'};
color:${(props)=> (props.selectedTheme==='Light')?'black':'white'};`;
export const Themebutton=styled.button`${tw `p-2 -my-2 border border-solid `}`;









