import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ECommerceHeader = styled.div`
    ${tw`w-full h-2/10 flex justify-between `}
`;
const ECommerce = styled.div`
    ${tw`h-screen ml-10 relative`}
`;
const SignOut = styled.input`
    ${tw`bg-white text-xs rounded flex flex-end flex-col p-1 border border-solid border-black text-black`}
`;
const ECommerceBody = styled.div`
    ${tw`flex w-full `}
`;

const CartButton = styled.button`
    ${tw`bg-black text-white w-14 h-14
    absolute fixed top-0 right-0`}
`;

export { ECommerceHeader, ECommerce, SignOut, ECommerceBody, CartButton };
