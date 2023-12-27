import "./myprofile.scss";

import Profile from "../../assets/AniketProfile.jpg";
import PratikPost from "../../assets/VK.jpg";
import BhartiPost from "../../assets/Goku.jpg";
import RohitPost  from "../../assets/Krishna.jpg";
import Post from "../../Components1.js/post/Post"

export default function MyProfile(){
    const posts = [
        {
          id: 1,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile,
          desc: "Me being serious, whats my cam capture always",
          img: Profile,
        },
        {
          id: 2,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile,
          desc: "Virat Kohli the Inspiration",
          img:PratikPost,
        },
        {
          id: 3,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile,
          desc: "Ultra Instinct Mode On",
          img:BhartiPost,

        },
        {
          id: 4,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile, desc: "Ultra Instinct Mode On",
          img:RohitPost,

        }

      ];
    return(
        <div className="posts">
            {posts.map(post=>(
          <Post post={post} key={post.id}/>
           ))}
  </div>
    )
}