import React from "react";
import {Link, Redirect} from 'react-router-dom';
import {getAccessToken} from './utils/StorageUtils'
export default function Home() {
 function gotoGridscreenIfLoggedIn(){
    return(
      <Redirect
         to={
           {
             pathname:'/sample-example'
           }
         }/>
    );
  }

if(getAccessToken()===undefined){
  return gotoGridscreenIfLoggedIn();
}else{
  return (
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/todo-list">ToDoList</Link>
            </li>
            <li>
              <Link to="/grid-game">GridGame</Link>
            </li>
            <li>
              <Link to="/sample">Loading</Link>
            </li>
            <li>
              <Link to="/common-api">CommonAPI</Link>
            </li>
            <li>
              <Link to="/sample-example">LoginPage</Link>
            </li>
            <li>
              <Link to="/sample">sample Example</Link>
            </li>
            <li>
              <Link to="/todo">TodoListApp</Link>
            </li>

            <li>
              <Link to="/ecommerce-app">E-Commerce</Link>
            </li>
            <li>
              <Link to="/api-practice">
                Rest api
              </Link>
            </li>
            
            <li>
               <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
       </div>
 )}
  }
