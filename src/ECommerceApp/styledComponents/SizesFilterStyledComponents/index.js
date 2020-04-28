import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";

const SizesFilterDiv = styled.div`
    ${tw`w-1/4  h-screen border border-solid border-black`}
`;
const SizesHeading = styled.div`
    ${tw`my-4 font-bold`}
`;
const VerySmallSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const SmallSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const MediumSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const LargeSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const XlSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const XxlSize = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;
const SizesButtons = styled.div`
    ${tw`m-4`}
`;

export {
    SizesFilterDiv,
    SizesHeading,
    VerySmallSize,
    SmallSize,
    MediumSize,
    LargeSize,
    XlSize,
    SizesButtons,
    XxlSize,
};
