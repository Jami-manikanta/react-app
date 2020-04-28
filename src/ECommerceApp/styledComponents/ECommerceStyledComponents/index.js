import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ECommerceHeader = styled.div`
    ${tw`w-full h-2/10 border flex justify-between border-solid border-black`}
`;
const ECommerce = styled.div`
    ${tw`h-screen relative`}
`;
const SignOut = styled.input`
    ${tw`bg-white border border-solid border-black text-black`}
`;
const ECommerceBody = styled.div`
    ${tw`flex w-full border border-solid border-black`}
`;

const CartButton = styled.input`
    ${tw`bg-white border border-solid z-50 border-black text-black absolute fixed top-0 right-0`}
`;

export { ECommerceHeader, ECommerce, SignOut, ECommerceBody, CartButton };
