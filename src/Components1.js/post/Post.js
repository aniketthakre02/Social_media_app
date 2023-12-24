import "./post.scss";
import Profile from "../../assets/AniketProfile.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import Comments from "../comments/Comments";

export default function Post({post}){
    const [commentOpen,setCommentOpen]=useState(false);
    const liked=true;
    return(
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                    <img src={post.profilePic} alt=""/>
                    <div className="details">

                    <span className="name">{post.name}</span>
                    <span className="date">1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc} </p>
                      <img src={post.img} alt=""/>
                </div>
                <div className="info">
                    <div className="item">
                        {liked?<FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
                        128 likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        12 comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>
                {commentOpen&&<Comments/>}
            </div>
        </div>
    )
}