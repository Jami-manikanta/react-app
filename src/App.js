import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home.js';
import GridGameComponent from './components/GridGameComponent'
import GridMainApp from './components/santoshGridGame/GridMainDiv/GridMainDiv.js';
//import SampleExample from "./components/SampleExample";
import TodoList from "./components/ToDoListMobx";
export default function App()  {
    return(
    <Router  basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/grid-game">
            <GridGameComponent />
          </Route>
        <Route path="/todo-list">
            <TodoList />
          </Route>
           <Route path="/api-practice">
            <GridMainApp/>
          </Route>
         {/* <Route path="/sample-example">
            <SampleExample/>
    </Route>*/}

          <Route path="/" component={Home}/>
        </Switch>
    </Router>
    );
}

