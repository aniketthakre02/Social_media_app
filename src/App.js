import logo from './logo.svg';
import './App.css';
import Register from './Components.js/register/Register';
import Login from './Components.js/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from './Components1.js/navbar/NavBar';
import RightBar from './Components1.js/rightbar/RightBar';
import LeftBar from './Components1.js/leftbar/LeftBar';
import Home from './Components.js/home/Home';
import Profile from './Components.js/profile/Profile';


function Layout(){
  return(
    <div>
      <NavBar/>
      <div style={{display:'flex'}}>
        <LeftBar/>
        <div style={{flex:6}}>
        <Outlet/>
        </div>
        <RightBar/>
      </div>
    </div>
  )
}


function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element: (
          <Layout/>
      ),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"register",
      element:<Register/>
    }
  ])
  return (
    <div >
    {/* <RouterProvider router={router}/> */}
    <Layout/>
    </div>
  );  
}

export default App;
