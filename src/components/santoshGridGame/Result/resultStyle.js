import styled from '@emotion/styled';
import  tw from 'tailwind.macro';
const ResultMainDiv =styled.div `height:200px;${tw `pt-16 flex flex-col items-center justify-center`}`;
const ScorStyle =styled.div`font-size:30px;font-weight:bold;${ tw `mb-3`}`;
const StatusStyle=styled.div`color:#00b359;font-size:35px;font-weight:bold;${tw `mb-3`}`;
const PlayagainButtonStyle=styled.button`background:#668cff;color:white;font-size:20px;
${tw ` flex items-center justify-center rounded-md px-3 py-2`}`;  

export {ResultMainDiv,ScorStyle,StatusStyle,PlayagainButtonStyle};