import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CartListDiv = styled.div`
    ${tw`w-full h-1/10 flex  m-3 border-t-2 border-white border-solid p-1`}
`;
const CartItemImage = styled.img`
    ${tw`w-12 m-2`}
`;
const CartProductDetails = styled.div`
    ${tw` flex flex-col w-full pr-5 justify-center`}
`;

const CartImageTiltle = styled.div`
    ${tw`text-base flex  justify-between `}
`;
const CartImageStyle = styled.div`
    ${tw`text-xs text-blue-500  flex justify-between`}
`;
const CartProductQuantity = styled.div`
    ${tw`text-xs text-blue-500 `}
`;

const CartRemoveButton = styled.button`
    ${tw`text-white`}
`;

export {
    CartListDiv,
    CartItemImage,
    CartProductDetails,
    CartImageTiltle,
    CartImageStyle,
    CartProductQuantity,
    CartRemoveButton,
};
