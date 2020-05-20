// import React from "react";
// import { observer } from "mobx-react";
// import {
//     TotalLoginPage,
//     LoginPageStyles,
//     UserInput,
//     Password,
//     SignInButton,
//     SignInHeading,
// } from "../../styledComponents";

// @observer
// class SignInForm extends React.Component {
//     render() {
//         const {
//             apiStatus,
//             username,
//             onChangeUsername,
//             password,
//             onChangePassword,
//             onSubmitForm,
//             errorMessage,
//         } = this.props;
//         // console.log(onSubmitForm);

//         return (
//             <TotalLoginPage onSubmit={onSubmitForm}>
//                 <LoginPageStyles>
//                     <SignInHeading>Sign in</SignInHeading>
//                     <UserInput
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={onChangeUsername}
//                     />
//                     <Password
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={onChangePassword}
//                     />
//                     <SignInButton
//                         type="submit"
//                         value="Sign In"
//                         apiStatus={apiStatus}
//                     />
//                     <span className="text-red-700 mt-2 -mt-3 w-48 text-sm">
//                         {errorMessage}
//                     </span>
//                 </LoginPageStyles>
//             </TotalLoginPage>
//         );
//     }
// }

// export default SignInForm;
