import React, { useState } from 'react'
import { FaHome, FaUser, FaEnvelope, FaBell, FaCog, FaSignOutAlt  } from "react-icons/fa";
import './Navbar.css'
import { removeData } from '../Redux/UserRedux';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post/Post';
import Messages from './Messages/Messages';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search/Search';
import Home from '../Pages/Home';
import Makepost from './Post/Makepost';
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';
import Users from './Users/Users';
import Friends from './Friends/Friends';
import Notifications from './Notifications/Notifications';
import Friendreq from './Friendrequests/Friendreq';
const Navbar = () => {
  const Ldispatch = useDispatch()
  const Logout =()=>{
    Ldispatch(removeData())
  }
  const userData = useSelector((state)=>state.userDetails.userInfo[0])
    if(userData){
      var id = userData._id;
      
    }
  // const navigate = useNavigate();
  const userID=()=>{
    // navigate(`/profile/${id}`);
    setCurrentPage('profile')
    }
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
      switch (currentPage) {
        case 'home':
          return <Home />;
        case 'profile':
          return <Profile userId={id}/>;
          
        case 'messages':
          return <Chat/>;
        
        default:
          return <Home />;
      }
    };
  return (
    <div className='first-p'>
      <div className='navbar-p'>
        <div className='navbar'>
            <div className="logo-nav">
                <img src="https://i.pinimg.com/736x/47/6e/34/476e349199ec2d764f541017daa8a7ab.jpg" alt="" />
            </div>
            <div className="icons-nav">
                
                <div className='icons-fa' onClick={() => setCurrentPage('home')}>
                  <FaHome className="icon" />
                  <span className="icon-name">Home</span>
                </div>                                       
                <div className='icons-fa' onClick={userID}>
                  <FaUser className='icon'/>
                  <span className='icon-name'>Profile</span>
                </div>
                <div className='icons-fa' onClick={() => setCurrentPage('messages')}>
                  <FaEnvelope className='icon'/>
                  <span className='icon-name'>Messages</span>
                </div>
                <div className='icons-fa'onClick={() => setCurrentPage('notifications')}>
                  <FaBell className='icon' />
                  <span className='icon-name'>Notifiactions</span>
                </div>
                <div className='icons-fa' onClick={() => setCurrentPage('settings')}>
                  <FaCog className='icon' />
                  <span className='icon-name'>Settings</span>
                </div>
                <div className='icons-fa' onClick={Logout}>
                  <FaSignOutAlt className='icon'/>
                  <span className='icon-name'>Signout</span>
                </div>
            </div>
            
        </div>
        
      </div>
      <div className='middle-p'>
        <div className="top-page">
          <div className='search-c'>
            <Search />
          </div>
          <div className='makepost-c'>
            <Makepost/>
          </div>
        </div>
        <div className="main">
            {renderPage()}
        </div>
      </div>
      <div className='right'>
          <div className='right-p'>
            {/* <div className="div-users"> */}
              <Users/>
              {/* <Friends/> */}
              {/* <Friendreq/> */}
              <Notifications/>
            {/* </div> */}
          </div>
      </div>
      
    </div>
    
  )
}

export default Navbar
