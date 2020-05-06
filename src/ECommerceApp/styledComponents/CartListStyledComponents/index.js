import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CartListItems = styled.div`
    ${tw`overflow-y-scroll overflow-x-hidden`};
    height: 68vh;
`;

const CartEmptyList = styled.div`
    ${tw`flex justify-center items-center`};
    height: 68vh;
`;

export { CartListItems, CartEmptyList };
