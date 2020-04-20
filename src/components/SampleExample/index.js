import React from "react";
class SampleExample extends React.Component {
    state = {  }

    funtion fetchedData(){
          fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => console.log(res.json()))
        .then(res => res.map(user => user.username))
        .then(userNames => console.log(userNames));
      
    }
    render() { 
        return( fetchedData() );
    }
}
 
//export default SampleExample;