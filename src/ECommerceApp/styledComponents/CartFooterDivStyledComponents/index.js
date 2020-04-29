import styled from "@emotion/styled";
import tw from "tailwind.macro";
const CartFooterDiv = styled.div`
    ${tw`w-full flex flex-col  `}
`;

const CartSubTotalHeading = styled.div`
    ${tw`text-base text-gray-500`}
`;

const CartSubTotal = styled.div`
    ${tw`text-s text-yellow-500`}
`;

const CartSubTotalDiv = styled.div`
    ${tw`w-full flex justify-between m-3 pr-5 `}
`;

const CheckOutButton = styled.button`
    ${tw`text-center m-3 py-2 bg-black text-white rounded  `};
    width: "25%";
`;
export {
    CartFooterDiv,
    CartSubTotalDiv,
    CheckOutButton,
    CartSubTotal,
    CartSubTotalHeading,
};
