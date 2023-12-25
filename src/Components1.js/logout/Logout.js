import "./logout.scss";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Logout(){
    return(
        <div className="options-container">
          {/* Add your options content here */}
          <ul>
            <li className="VS">Visit Profile</li>
            <Link to="/">
            <li className="lg">Log out </li>
            <li className="lg">Login to another account</li>
            </Link>
            
          </ul>
        </div>
    )
}