import React, { useEffect } from 'react'
import '../Friendrequests/Friendreq.css'
import { useSelector } from 'react-redux';
const Friendreq = () => {
  const userData = useSelector((state)=>state.userDetails.userInfo[0])
  if(userData){
    var userId = userData._id;
    
  }
    const acceptFriend = async()=>{
      
    }
    const deleteReq =()=>{
      
    }
  return (
    <div className='friend-req-p'>
        <div className="friend-req">
        <h6 className='user-req-name'>friend request from </h6>
            <div className="div-b">
              <div className='accept-b' onClick={acceptFriend}>accept</div>
              <div className='reject-b' onClick={deleteReq}>reject</div>
            </div>
        </div>
    </div>
  )
}

export default Friendreq
