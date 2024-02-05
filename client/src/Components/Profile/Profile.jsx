 import React, { useEffect, useState } from 'react'
 import '../Profile/Profile.css'
 import { FaUserFriends } from "react-icons/fa";
 import { BsPostcardHeart } from "react-icons/bs";
import Post from '../Post/Post'
import { ProfileData } from '../../Api/ProfileApi';


 const Profile =  ({userId}) => {
  console.log(userId);
  const [profileInfo, setProfileInfo] = useState(null)
  useEffect(()=>{
    const ProfileDataFunction = async ()=>{
    try{
          const fetchedProfileData = await ProfileData(userId);
          setProfileInfo(fetchedProfileData);
          console.log(fetchedProfileData);
        }
       catch(err){
      console.log('err prfilee',err);
    }
  }
      ProfileDataFunction()
    
  },[userId])
   return (
     <div className='profile-p'>
        <div className="profile">
          {profileInfo ? (
          <>
            <div className="header-img">
            <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            
          </div>
          <div className="profile-img">
              <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
          <div className="name"><h2>{profileInfo.firstname}</h2></div>
          <div className="user-prp-icons">
            <div className="profile-c"><FaUserFriends  className='prp-p-icons'/><span className='p-count'> {profileInfo.friends.length} friends</span></div>
            <div className="profile-c"><BsPostcardHeart className='prp-p-icons' /><span className='p-count'>{profileInfo.posts.length} posts</span></div>
          </div>
          <div className="user-info">
            <Post userId ={userId} />

          </div>
          </>):(
            <h2>Loading profile....</h2>
          )}
          
        </div>
       
     </div>
   )
 }
 
 export default Profile
 