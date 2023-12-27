import { Link } from "react-router-dom"
import "./login.scss"
import { useFormik } from 'formik';

export default function Login(){

    function VerifyLoginDetails(loginDetails){
        const errors={};
        if(loginDetails.UserName==""){
            errors.UserName="Fill Username"
        }else if(loginDetails.UserName!="Aniket Thakre"){
            errors.UserName="Use below as Username"
        }
        if(loginDetails.Password==""){
            errors.Password="Fill Password"
        }else if(loginDetails.Password!="Abc@123"){
            errors.Password="Use below as Password (Must be same as below mention)"
        }
        return errors;
    }


    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:''
        },
        validate:VerifyLoginDetails,
        onSubmit:values=>{

        }

    })
    
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
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                    <div className="Hint">
                    <dt> User Name</dt>
                    <input name="UserName" onChange={formik.handleChange}  value={formik.values.UserName} type="text" />
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <p>Try... Aniket Thakre</p>
                    </div>
                    <div className="Hint">
                    <dt> Password</dt>
                    <input name="Password" onChange={formik.handleChange}  value={formik.values.Password}  type="Password" />
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <p>Abc@123</p>
                    </div>
                    
                <Link to="/home">
                <button type="submit" disabled={!formik.isValid}>Login</button>
                </Link>
                </dl>
                </form>
            </div>

            </div>
        </div>
    )
}