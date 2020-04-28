import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CartHeaderDiv = styled.div`
    ${tw`flex justify-center items-center m-4 `}
`;
const CartText = styled.span`
    ${tw`font-bold`}
`;

export { CartHeaderDiv, CartText };
