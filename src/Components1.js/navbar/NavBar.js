import "./navBar.scss";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Logout from "../logout/Logout";


export default function NavBar(){
     const [showOptions, setShowOptions] = useState(false);

     const handleIconClick = () => {
     setShowOptions(!showOptions);
     };
    return(
        <div className="navbar">
            <div className="left">
                <p>ATSOCIAL</p>    
                <HomeIcon/>
                <NightlightIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user" onClick={handleIconClick}>
                    <AccountCircleIcon/>
                    <span>Aniket Thakre</span>
                </div>
            </div>
            {showOptions && <Logout/>}
        </div>
    )
}
