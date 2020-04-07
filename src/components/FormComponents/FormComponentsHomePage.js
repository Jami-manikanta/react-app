import React from "react";
import Greetings from './Greetings.js'
import FavouriteDeserts from './FavouriteDeserts.js'
import VisitedCities from './VisitedCities.js'
import YourState from './YourState.js'
import DisableButton from './DisableButton.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class FormComponents extends React.Component {
 
 render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Greetings">Greetings</Link>
            </li>
            <li>
               <Link to="/FavouriteDeserts">FavouriteDeserts</Link>
            </li>
            <li>
               <Link to="/VisitedCities">VisitedCities</Link>
            </li>
            <li>
               <Link to="/YourState">YourState</Link>
            </li>
            <li>
               <Link to="/DisableButton">DisableButton</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Greetings">
            <Greetings/>
          </Route>
          <Route path="/FavouriteDeserts">
            <FavouriteDeserts/>
          </Route>
          <Route path="/VisitedCities">
            <VisitedCities/>
          </Route>
          <Route path="/YourState">
            <YourState/>
          </Route>
          <Route path="/DisableButton">
            <DisableButton/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

export default FormComponents

