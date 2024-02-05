import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import '../Notifications/Notifications.css'
import Friendreq from '../Friendrequests/Friendreq';
import { notificationData } from '../../Api/NotificationApi';
const Notifications = () => {
  const [notification, setNotification] = useState()
  const userData = useSelector((state)=>state.userDetails.userInfo[0])
    if(userData){
      var userId = userData._id;
      
    }
    const [noti, setNoti] = useState()
    useEffect(()=>{
      const fetchNotification = async()=>{
        try{
          const fetchedN = await notificationData(userId);
          setNoti(fetchedN)
          console.log(fetchedN);
        }catch(err){
          console.log('err notififfif',err);
        }
      }
      fetchNotification()
    },[])


  return (
    <div className='notifiction-p'>
      <div className="notification">
        <Friendreq/>
      </div>
    </div>
  )
}

export default Notifications
