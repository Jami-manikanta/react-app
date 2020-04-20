import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {keyframes,css} from '@emotion/core';

const EachCellStyle = styled.div`
            width:${props=>props.gridWidth/(props.gridSize)-10}px;
            height:${props=>props.gridWidth/(props.gridSize)-10}px;
            background: ${props=>props.cellBackground};
            ${tw `flex items-center justify-center m-1`};
            animation:.7s ease ${keyframes`
            0%{ filter:brightness(0%)
             }
             100%{
                filter:brightness(100%)
             }`
            }`;
const EachCellAnimationChildDiv = styled.div`
        background:${props=>props.isShowHiddenCells?props.hiddenCellBackground:""};
        width:${props=>props.gridWidth/(props.gridSize)-10}px;
        height:${props=>props.gridWidth/(props.gridSize)-10}px;
        animation:${props=>props.animation?props.isShowHiddenCells?
            css `.3s ease ${keyframes`
                0%{
                    width:0%;
                    height:0%;
                }
                100%{
                    
                   width:100%;
                   height:100%
                }
            `}
             `
            :
            css `
            0.3s ease ${keyframes`
            0%{
                width:100%;
                height:100%;
                background:grey;        
             }
            100%{
                width:0%;
                height:0%;
            }   
            
            `}`
: css `.7s ease ${keyframes`
0%{
    filter:brightness(10%)
 }
 

 100%{
      filter:brightness(100%)
 }`
}
`}
${tw `flex items-center justify-center`} `;
export {EachCellStyle,EachCellAnimationChildDiv};
