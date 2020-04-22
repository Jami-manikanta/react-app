import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'mobx-react';

import stores from './stores'; 
import Home from './Home.js';
import GridGameComponent from './components/GridGameComponent'
import GridMainApp from './components/santoshGridGame/GridMainDiv/GridMainDiv.js';
//import SampleExample from "./components/SampleExample";
import TodoList from "./components/ToDoListMobx";
import UsersPage from "./components/UsersPage/index.js";
import TodoListApp from './components/ToDoListApp/index.js'
export default function App()  {
    return(
    <Provider {...stores}>
    <Router  basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/todo" component={TodoListApp}/>
        <Route path="/grid-game">
            <GridGameComponent />
          </Route>
        <Route path="/todo-list">
            <TodoList />
          </Route>
           <Route path="/api-practice">
            <GridMainApp/>
          </Route>
          <Route path="/common-api" component={UsersPage}/>
          
         {/* <Route path="/sample-example">
            <SampleExample/>
    </Route>*/}

          <Route path="/" component={Home}/>
        </Switch>
    </Router>
    </Provider>
    );
}

