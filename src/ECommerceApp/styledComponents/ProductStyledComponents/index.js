import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";

const ProductCard = styled.div`
    ${tw`flex flex-col justify-between w-1/4  items-center p-2
 relative`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;

const FreeShipping = styled.div`
    ${tw`absolute top-10 right-0 bg-black p-1 text-xs text-white`}
`;
const ProductImage = styled.img`
    ${tw`w-3/5 object-contain mb-2`}
`;
const ProductTitle = styled.div`
    ${tw`h-45 text-center`}
`;
const Underscore = styled.div`
    ${tw`w-4 border  rounded border-yellow-600 mt-2 mb-4`}
`;
const ProductPriceDiv = styled.div`
    ${tw`flex justify-center items-center text-center`}
`;
const ProductPrice = styled.div`
    ${tw`text-xl`}
`;
const CurrencyFormat = styled.span`
    ${tw`text-xs mr-1`}
`;
const InstallemntsPrice = styled.div`
    ${tw`text-sm text-gray-700 mb-4 h-5`}
`;
const AddToCartButton = styled.button`
    ${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}
`;

export {
    ProductCard,
    FreeShipping,
    ProductImage,
    ProductTitle,
    Underscore,
    ProductPrice,
    CurrencyFormat,
    ProductPriceDiv,
    InstallemntsPrice,
    AddToCartButton,
};
