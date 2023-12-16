import {useState, useEffect} from "react";
import "./login.scss"
 
export default function Login(){

    return(
        <div className="login">
            <div className="card">
            <div className="left">
                <h1>Hello <br/>World!!!</h1>
                <p>"Connect, Share, Thrive Your Social Universe Awaits. Welcome to "AT SOCIAL",<br/>
                    where every moment becomes a story, and every connection is a new adventure.<br/>
                     Join us and make your mark in the digital socialscape."</p>
                     <span>Don't you have account?</span>
                     <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="UserName"/>
                    <input type="text" placeholder="Password"/>
                </form>
                <button>Login</button>
            </div>

            </div>
        </div>
    )
}