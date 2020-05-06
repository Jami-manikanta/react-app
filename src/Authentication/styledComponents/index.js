import styled from "@emotion/styled";
import tw from "tailwind.macro";

const LoginPageStyles = styled.div`
    ${tw`bg-white text-center  h-64 flex  flex-col p-6`};
    width: 18%;
`;
const TotalLoginPage = styled.form`
    ${tw`bg-gray-200 h-screen flex justify-center items-center `}
`;
const SignInHeading = styled.p`
    ${tw`text-black-400 font-bold text-base m-2 flex justify-start`}
`;
const UserInput = styled.input`
    ${tw`border border-solid border-gray-400 rounded px-2 py-2 m-2`}
`;
const Password = styled.input`
    ${tw`border border-solid border-gray-400 rounded px-2 py-2 m-2`}
`;
const SignInButton = styled.input`
    ${tw`bg-gray-900 text-white p-2 m-3`}
`;

export {
    LoginPageStyles,
    TotalLoginPage,
    SignInHeading,
    UserInput,
    Password,
    SignInButton,
};
