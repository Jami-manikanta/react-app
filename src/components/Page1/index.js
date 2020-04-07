import React from "react";
import logo from "../../logo.svg";
function Page1() {
   return(
     <div className="flex-col bg-gray-800 text-white h-screen flex justify-center items-center">
        <img className='h-56 App-logo' src={logo}/>
        <h1>Page 1</h1>
     </div>
     );
}

export default Page1;
