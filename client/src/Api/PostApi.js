import axios from "axios";
import { publicRequest } from "../Request/RequestMethod";
//new post
export const MakeNewPostData = async (id,newPostData)=>{
    try{
        // const newPost =  await axios.post(`http://localhost:5001/post/`)
        const newPost = await publicRequest.post(`post/${id}`,newPostData
        // ,{
        //     headers:{
        //         'Content-Type':'multipart/form-data'
        //     }
        // }
        )
        console.log('new posssssss',newPost);
    }
    catch(err){
        console.log('new post err',err);
    }
}
//fetching post

export const PostData = async (userId)=>{
    try{
        const PostDataFetched = await publicRequest.get(`post/users/${userId}/posts`)
        console.log('post data',PostDataFetched.data);
        console.log('type  :')
        return PostDataFetched.data;
        
    }catch(err){
        console.log('fetch post err',err);
    }
}