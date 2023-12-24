import { Link } from "react-router-dom";
import "./register.scss";


export default function Register(){
    return(
        <div className="register">
            <div className="card">
             <div className="left">
                <h1> AT Social</h1>
                <p>"Connect, Share, Thrive Your Social Universe Awaits. Welcome to "AT SOCIAL",<br/>
                    where every moment becomes a story, and every connection is a new adventure.<br/>
                     Join us and make your mark in the digital socialscape."</p>
                     <span>Do you have an account?</span>
                     <Link to="/">
                     <button>Login</button>  
                     </Link>
             </div>
             <div className="right">
                <h1>Register</h1>
                <form>
                <input type="text" placeholder="Username"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="password"></input>
                <input type="text" placeholder="Name"></input>
                <button>Register</button>
                </form>
             </div>
            </div>

        </div>
    )
}