import React, { useState } from 'react'
import '../Pages/Home.css'

import { FaHome, FaUser, FaEnvelope, FaBell, FaCog, FaSignOutAlt  } from "react-icons/fa";
// import '../Components/Navbar.css'
import Messages from '../Components/Messages/Messages';
import Post from '../Components/Post/Post'
import Users from '../Components/Users/Users';
import Profile from '../Components/Profile/Profile'
import Notifications from '../Components/Notifications/Notifications'
import Settings from '../Components/Settings/Settings'
import Chat from '../Components/Chat/Chat'

import Makepost from '../Components/Post/Makepost';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search/Search';
import Friends from '../Components/Friends/Friends';


const Home = () => {
 
   
  return (
    <div className='home'>
      <div className="left-h">
        {/* <Post/> */}
      </div>
      {/* <div className="right-h">
        <Friends/>
      </div> */}
    </div>
  )
}

export default Home
