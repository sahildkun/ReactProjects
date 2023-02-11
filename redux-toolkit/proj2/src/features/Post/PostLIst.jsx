import { useDispatch, useSelector } from 'react-redux'
import { selectAllPosts , getPostError,getPostStatus,fetchPosts } from './PostSlice';
import { useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';

const PostLIst = () => {
  const dispatch = useDispatch();
   const posts = useSelector(selectAllPosts);






 const renderdPosts = posts.map((post) => (

    <div >
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <span>Author:{post.user}<br/></span>
       
        <Link to={`/posts/${post.id}`}>View Post</Link>
    </div>
    
 ))

 
return (
    <div>
        {renderdPosts}
    </div>
  )
}

export default PostLIst