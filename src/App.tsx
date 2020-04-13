import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {configure} from 'mobx';

import Home from './Home.js';
import CarsList from './components/CarsList';
import FormComponents from './components/FormComponents/FormComponentsHomePage.js';
import "./components/CarsList/CarsList.css";
import CountriesDashBoard from './components/CountriesDashBoard/CountriesDashBoard.js';
import "./components/CountriesDashBoard/CountriesDashBoard.css";
import EmojiGame from './components/EmojiGame/EmojiGame.js';
import IndividualCountryTotalData from './components/CountriesDashBoard/IndividualCountryTotalData.js';
import CounterPage from './components/CounterPage';
import TodoList from './components/ToDoListMobx/index.js';
import EventApp from './components/EventApp/EventApp.js';
//import themeStore from './stores/ThemeStore';


configure({enforeceActions:true});

export default function App()  {
    return(
    <Router  basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/counter-page">
            <CounterPage />
          </Route>
          
          <Route path="/event-app">
            <EventApp />
          </Route>
          
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/ToDoList">
            <TodoList />
          </Route>
          <Route path="/FormComponents">
            <FormComponents />
          </Route>
          <Route path="/CountriesDashBoard">
            <CountriesDashBoard />
          </Route>
           <Route path="/EmojiGame">
            <EmojiGame />
          </Route>
          <Route path="/:id" component={IndividualCountryTotalData}/>
          <Route path="/" component={Home}/>
        </Switch>
    </Router>
    );
}

