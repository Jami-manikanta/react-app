import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { css } from "@emotion/core";

const SizeButton = styled.button`
    ${tw`rounded-full h-10 w-10 m-1 focus:outline-none  bg-gray-200 text-black`};
    ${(props) =>
        props.isButtonClicked ? "background-color:black;color:white;" : ""}
    ${css({
        "&:hover": {
            border: "1px solid lightgray",
        },
    })}
`;

export default SizeButton;
