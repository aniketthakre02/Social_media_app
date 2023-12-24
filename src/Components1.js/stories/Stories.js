import "./stories.scss"
import { useContext } from "react";
import Profile from "../../assets/AniketProfile.jpg";

export default function Stories(){
    const stories = [
        {
          id: 1,
          name: "Sushant Bopche",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Pratik Bopche",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "Praful Domle",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "Lilaa laal",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];
    return(
      <div className="stories">
        <div className="story">
          <img src={Profile} alt=""/>
          <span>Aniket Thakre</span>
          <button>+</button>
        </div>
           {stories.map(story=>(
           <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
           </div>
         ))}
      </div>
        
    )
}