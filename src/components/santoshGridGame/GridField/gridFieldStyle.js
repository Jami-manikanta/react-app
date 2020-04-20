import styled from '@emotion/styled';
import  tw from 'tailwind.macro';

const GridFieldMainStyle =styled.div`
            width:${props=>props.gridWidth}px;
            height:${props=>props.gridWidth}px;
            ${tw  `flex flex-wrap items-center justify-center`}`
export  {GridFieldMainStyle};

