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
     const [position, setPosition] = useState({ top: 0, right: 0 });

     const handleIconClick = (event) => {
        const iconRect = event.target.getBoundingClientRect();
        const newPosition = {
          top: iconRect.bottom + window.scrollY,
          left: iconRect.left + window.scrollX,
        };
    
        setShowOptions(!showOptions);
        setPosition(newPosition);
     };
    return(
        <div className="navbar">
            <div className="left">  
                <HomeIcon/>
                <NightlightIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="center">
            <p>AT SOCIAL</p>  
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user" onClick={(event) => handleIconClick(event)}>
                    <AccountCircleIcon/>
                    <span>Aniket Thakre</span>
                </div>
            </div>
            {showOptions && <Logout position={position}/>}
        </div>
    )
}
