import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";

const SizesFilterDiv = styled.div`
    ${tw`w-1/4  h-screen `}
`;
const SizesHeading = styled.div`
    ${tw`my-4 font-bold`}
`;
const SizesButtons = styled.div`
    ${tw`m-4`}
`;

export { SizesFilterDiv, SizesHeading, SizesButtons };
