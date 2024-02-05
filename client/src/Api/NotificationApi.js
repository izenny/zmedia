// export const notificationData = async ()=>{
//     try{
//         const Notification = await publicRequest.get('notification')
//     }
// }

import { publicRequest } from "../Request/RequestMethod"

export const friendNotification = async(newFriend)=>{
    try{
        const FriendReq = await publicRequest.post('notification',newFriend);
        console.log('request send');
    }catch(err){
        console.log('err friend notification',err);
    }
}
export const notificationData = async(userId)=>{
    try{
        const nData = await publicRequest.get(`notification/${userId}`)
        console.log('ndata',nData.data);
        return nData.data
    }catch(err){
        console.log('erere notificatin',err);
    }
}