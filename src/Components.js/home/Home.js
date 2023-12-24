import "./home.scss"
import Stories from "../../Components1.js/stories/Stories"
import Share from "../../Components1.js/share/Share";
import Posts from "../../Components1.js/posts/Posts";
import Post from "../../Components1.js/post/Post";
import NavBar from "../../Components1.js/navbar/NavBar"; 
import LeftBar from "../../Components1.js/leftbar/LeftBar";
import RightBar from "../../Components1.js/rightbar/RightBar";

export default function home(){
    return(
        <div>
        <div>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <div className="home">
             <Stories/>
             <Posts/>
        </div>
          </div>
          <RightBar/>
        </div>
      </div>   
    </div>
    )
}