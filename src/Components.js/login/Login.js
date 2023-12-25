import { Link } from "react-router-dom"
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
                     <Link to="/register">
                     <button>Register</button>
                     </Link>                     
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <div className="Hint">
                    <input type="text" placeholder="UserName"/>
                    <p>Try... Aniket Thakre</p>
                    </div>
                    <div className="Hint">
                    <input type="text" placeholder="Password"/>
                    <p>Abc@123</p>
                    </div>
                </form>
                <Link to="/home">
                <button>Login</button>
                </Link>
            </div>

            </div>
        </div>
    )
}