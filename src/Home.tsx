import React from "react";
import {Link} from 'react-router-dom';
export default function Home() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/counterpage">CounterPage</Link>
            </li>
            <li>
              <Link to="/CarsList">CarsList</Link>
            </li>
            <li>
              <Link to="/ToDoList">ToDoList</Link>
            </li>

            <li>
              <Link to="/FormComponents">FormComponents</Link>
            </li>
            
            <li>
              <Link to="/CountriesDashBoard">CountriesDashBoard</Link>
            </li>
            <li>
                <Link to="/EmojiGame">EmojiGame</Link>
            </li>
          </ul>
        </nav>
       </div>
 )}