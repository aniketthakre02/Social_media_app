import Profile from "../profile/Profile";
import NavBar from "../../Components1.js/navbar/NavBar";
import LeftBar from "../../Components1.js/leftbar/LeftBar";
import RightBar from "../../Components1.js/rightbar/RightBar";



export default function SetProfile(){
    return(
        <div>
        <div>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <div className="profile">
            <Profile/>
        </div>
          </div>
          <RightBar/>
        </div>
      </div>   
    </div>
    )
}