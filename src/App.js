// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import {Provider} from 'mobx-react';

// import stores from './stores'; 
// import Home from './Home.js';
// import GridGameComponent from './components/GridGameComponent'
// import GridMainApp from './components/santoshGridGame/GridMainDiv/GridMainDiv.js';
// //import SampleExample from "./components/SampleExample";
// import TodoList from "./components/ToDoListMobx";
// import UsersPage from "./components/UsersPage/index.js";
// import TodoListApp from './components/ToDoListApp/index.js';

// import {enableLogging} from 'mobx-logger';
// import LoginPage from "./components/LoginPage";
// import SampleExample from "./components/SampleExample";
// import ECommerceApp from "./ECommerceApp/components/ECommerceApp";
// const config={
//   predicate:()=>true,
//   action:true,
//   reaction:true,
//   transaction:true,
//   compute:true
// };
// enableLogging(config)

// export default function App()  {
//     return(
//     <Provider {...stores}>
//     <Router  basename={process.env.PUBLIC_URL}>
//         <Switch>
//         <Route path="/todo" component={TodoListApp}/>
//         <Route path="/grid-game">
//             <GridGameComponent />
//           </Route>
//         <Route path="/todo-list">
//             <TodoList />
//           </Route>
//            <Route path="/api-practice">
//             <GridMainApp/>
//           </Route>
//           <Route path="/common-api" component={UsersPage}/>
//           <Route path="/sample-example">
//             <LoginPage/>
//           </Route>
          
//           <Route path="/sample">
//             <SampleExample/>
//           </Route>

//           <Route path="/ecommerce">
//             <ECommerceApp/>
//           </Route>
          
//           <Route path="/" component={Home}/>
//         </Switch>
//     </Router>
//     </Provider>
//     );
// }


import React from "react";
import { Provider } from "mobx-react";
import {
     BrowserRouter as Router,
     Switch,
     Route
   } from "react-router-dom";
import stores from "./ECommerceApp/stores";
import LoginPage from "./Authentication/components/LoginPage";
import ECommerceApp from "./ECommerceApp/components/ECommerceApp";
export default function App(){
  return(
  <Provider {...stores}>
    <Router>
      <Switch>
          <Route path='/ecommerce-app'>
       <ECommerceApp/>
     </Route>
     <Route path="/" component={LoginPage}/>
     </Switch>
     </Router>
  </Provider>
  );
}

