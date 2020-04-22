import React from "react";
import {Link} from 'react-router-dom';
export default function Home() {
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
              <Link to="/common-api">CommonAPI</Link>
            </li>

            <li>
              <Link to="/sample-example">sample Example</Link>
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