import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CartHeaderDiv = styled.div`
    ${tw`flex m-4 `};
    height: 8vh;
`;
const CartText = styled.span`
    ${tw`font-bold`}
`;

const Close = styled.button`
    ${tw` bg-gray-800 h-8 w-8 p-1 absolute top-0 left-0 -mx-8`}
`;

export { CartHeaderDiv, CartText, Close };
