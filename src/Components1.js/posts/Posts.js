import "./posts.scss";
import Post from  "../post/Post";
import Profile from "../../assets/AniketProfile.jpg";
import PratikPost from "../../assets/VK.jpg";




export default function Posts(){
    const posts = [
        {
          id: 1,
          name: "Aniket Thakre",
          userId: 1,
          profilePic:Profile,
            // "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Me being serious, whats my cam capture always",
          img: Profile,
        },
        {
          id: 2,
          name: "Anushka Sain",
          userId: 2,
          profilePic:
             "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Virat Kohli the Inspiration",
          img:PratikPost,
        },
      ];
    
      
    return(
        <div className="posts">
            {posts.map(post=>(
          <Post post={post} key={post.id}/>
           ))}
  </div>
    )
}