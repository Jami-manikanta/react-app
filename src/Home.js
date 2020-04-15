import React from "react";
import {Link} from 'react-router-dom';
export default function Home() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/grid-game">GridGame</Link>
            </li>
            
            <li>
               <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
       </div>
 )}