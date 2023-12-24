import "./logout.scss";
import {useState} from "react";

export default function Logout(){
    return(
        <div className="options-container">
          {/* Add your options content here */}
          <ul>
            <li>Visit Profile</li>
            <li>Log out </li>
            <li>Login to another account</li>
          </ul>
        </div>
    )
}