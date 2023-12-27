import { Link } from "react-router-dom";
import {useFormik} from "formik";
import "./register.scss";
import { AppRegistration } from "@mui/icons-material";


export default function Register(){
    function VerifyRegistraton(details){
        const errors={};
        if(details.UserName==""){
            errors.UserName="User Name Can't be empty";
        }
        if(details.Email==""){
            errors.Email="Please provide the email address ";
        }else if(details.Email.indexOf("@")<=2){
            errors.Email="invalid Email";
        }
        if(details.Password==""){
            errors.Password="Password field cannot be empty";
        }

        if(details.Name==""){
            errors.Name="Enter your name";
        }
    }
    const formik=useFormik({
        initialValues:{
            UserName:"",
            Email:"",
            Password:"",
            Name:""
        },
        validate:VerifyRegistraton,
        onSubmit:values=>{ "Registration is Done"}
    })
    return(
        <div className="register">
            <div className="card">
             <div className="left">
                <h1> ATSocial</h1>
                <p>"Connect, Share, Thrive Your Social Universe Awaits. Welcome to "AT SOCIAL",<br/>
                    where every moment becomes a story, and every connection is a new adventure.<br/>
                     Join us and make your mark in the digital socialscape."</p>
                     <span>Do you have an account?</span>
                     <Link to="/">
                     <button>Login</button>  
                     </Link>
             </div>
             <div className="right">
                <form>
                <h1>Register</h1>
               <dl>
                <input name="UserName" onChange={formik.handleChange} value={formik.values.UserName}  type="text" placeholder="Username"></input>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <input name="Email" onChange={formik.handleChange} value={formik.values.Email} type="text" placeholder="Email"></input>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <input name="Password" onChange={formik.handleChange}  value={formik.values.Password} type="password" placeholder="password"></input>
                <dd className="text-danger">{formik.errors.Password}</dd>
                <input name="Name" onChange={formik.handleChange} value={formik.values.Name} type="text" placeholder="Name"></input>
                <dd className="text-danger">{formik.errors.Name}</dd>
                <button type="submit" disabled={!formik.isValid}>Register</button>
                </dl>
                </form>
             </div>
            </div>
        </div>
    )
}