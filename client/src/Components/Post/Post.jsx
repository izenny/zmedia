// import React, { useEffect, useState } from 'react';
// import './Post.css';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { FaRegHeart, FaRegComment } from 'react-icons/fa';
// import { LuSend } from 'react-icons/lu';
// import { PostData } from '../../Api/PostApi';

// const Post = ({ userId }) => {
//   // const [posts, setPosts] = useState([]);
//   const [postsb,setPostsb] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const fetchedPosts = await PostData(userId);
//         setPostsb(fetchedPosts && fetchedPosts);
//         setLoading(false);
//         console.log('=================',postsb);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//         console.log('err in post',err)
//       }
//     };

//     fetchPosts();
//   }, [userId]);

//   if (loading) {
//     return <div>Loading posts...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
  
//   return (
//     <div>
//       { postsb ? (postsb.map((posta) => (
//         <div key={posta._id} className="post">
//           <div className="post-head">
//             <div className="post-header">
//               <div className="post-profile-pic">
//                 {/* <img src={post.author.profilePicture} alt="Profile" /> */}
//               </div>
//               <div className="post-user-name">
//                 <h5>{posta.author.firstname} {posta.author.lastname}</h5>
//               </div>
//             </div>
//             <div className="post-header-icon">
//               <BsThreeDotsVertical />
//             </div>
//           </div>
//           <div className="post-content">
//             <h3 className="post-text">{posta.content}</h3>
//             <div className="post-images">
//               image
//               {posta.imageSrc && (
//                 <img src={posta.imageSrc} alt="Post image" />
//               )}
//             </div>
//           </div>
//           <div className="post-footer">
//             <div className="likes">
//               <FaRegHeart />
//               <span className="count">{posta.likes.length} Likes</span>
//             </div>
//             <div className="comments">
//               <FaRegComment />
//               <span className="count">{posta.comments.length} Comments</span>
//             </div>
//             <div className="send">
//               <LuSend />
//               <span className="count">Share</span>
//             </div>
//           </div>
//         </div>
//       ))):(<h2>Loading profile....</h2>)}
//     </div>
//   );
// };

// export default Post;
import React, { useEffect, useState } from 'react';
import './Post.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegHeart, FaHeart, FaRegComment, FaComment } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';
import { PostData } from '../../Api/PostApi';

const Post = ({ userId }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await PostData(userId);
        
        if (Array.isArray(fetchedPosts)) { // Check if fetchedPosts is an array
          setPosts(fetchedPosts);
        } else {
          console.log('Error: fetchedPosts is not an array');
          console.log(typeof fetchedPosts);
        }
      } catch (err) {
        console.log('err in post', err);
      }
    };

    fetchPosts();
  }, [userId]);

  const handleLike = (postId) => {
    // Placeholder function for handling like button click
    console.log(`Liked post with ID: ${postId}`);
    // You can implement logic to update the like count and send a request to your API to update the server-side data
  };

  const handleComment = (postId) => {
    // Placeholder function for handling comment button click
    console.log(`Commented on post with ID: ${postId}`);
    // You can implement logic to open a comment modal or navigate to a comment section for the post
  };
  
  return (
    <div>
      {posts.length >0 ? (posts.map((post) => (
        <div key={post._id} className="post">
          <div className="post-head">
            <div className="post-header">
              <div className="post-profile-pic">
                <img src={post.author.profilePicture} alt="Profile" />
              </div>
              <div className="post-user-name">
                <h5>{post.author.firstname} {post.author.lastname}</h5>
              </div>
            </div>
            <div className="post-header-icon">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="post-content">
            <h3 className="post-text">{post.content}</h3>
            <div className="post-images">
              {/* Placeholder for displaying post images */}
              {post.imageSrc && (
                <img src={post.imageSrc} alt="Post image" />
              )}
            </div>
          </div>
          <div className="post-footer">
            <div className="likes" onClick={() => handleLike(post._id)}>
              { /* Conditional rendering of like button based on whether the user has already liked the post */ }
              {post.likes.includes(userId) ? <FaHeart /> : <FaRegHeart />}
              <span className="count">{post.likes.length} Likes</span>
            </div>
            <div className="comments" onClick={() => handleComment(post._id)}>
              <FaComment />
              <span className="count">{post.comments.length} Comments</span>
            </div>
            <div className="send">
              <LuSend />
              <span className="count">Share</span>
            </div>
          </div>
        </div>
      ))):(<h2>Loading profile....</h2>)}
    </div>
  );
};

export default Post;
