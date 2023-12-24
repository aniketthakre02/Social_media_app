import "./rightBar.scss";

export default function rightBar(){
    return(
        <>
        <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://photosfile.com/wp-content/uploads/2022/03/Cartoon-DP-35.jpg"
                alt=""
              />
              <span>Arun Dev</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <span>Jay Veer</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}