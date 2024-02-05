
import Login from './Account/Login';
import './App.css';
// import Chat from './Components/Chat/Chat';
// import Friends from './Components/Friends/Friends';

// import Navbar from './Components/Navbar';
import Post from './Components/Post/Post';
// import Users from './Components/Users/Users';
import Home from './Pages/Home';
// import Taskbar from './Components/Taskbar';
// import Messages from './Components/Messages/Messages';
import Signup from './Account/Signup';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Profile from './Components/Profile/Profile';
import Makepost from './Components/Post/Makepost';
import Messages from './Components/Messages/Messages';
import Chat from './Components/Chat/Chat';
import Users from './Components/Users/Users';
import Navbar from './Components/Navbar';
import Search from './Components/Search/Search';
import Friends from './Components/Friends/Friends';
function App() {
  const userData = useSelector((state)=>state.userDetails.userInfo[0])
  console.log('userdata',userData);
  if(userData){
    var Token = userData && userData.accessToken
    console.log('token', Token);
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:Token? <Navbar/> : <Login/>
    },
    {
      path:'/signup',
      element: Token? <Navbar/> :<Signup/>
    },
    {
      path:'/login',
      element:Token? <Navbar/> : <Login/>
    },
    {
      path:'/post',
      element:<Post/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/messages',
      element:<Messages/>
    },
    {
      path:'/chat',
      element:<Chat/>
    },
    {
      path:'/users',
      element:<Users/>
    },
    {
      path:'/navbar',
      element:<Navbar/>
    },
    {
      path:'/friends',
      element:<Friends/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
