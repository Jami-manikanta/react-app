import styled from '@emotion/styled';
import tw from 'tailwind.macro'
const GridBodyDiv = styled.div`${tw `flex `}`
const GridAppStyle=styled.div`background:${props=>props.themeObject.background};
color:${props=>props.themeObject.color};${tw `flex items-center justify-center h-screen`}`;
const GridMainDivStyle=styled.div`height:100px;${tw `h-screen flex justify-center flex-col `}`;
export {GridAppStyle,GridMainDivStyle,GridBodyDiv};