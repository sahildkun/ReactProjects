import { useSelector } from 'react-redux'
import { selectAllPosts } from './PostSlice';

import React from 'react'

const PostLIst = () => {
   const posts = useSelector(selectAllPosts);


 const renderdPosts = posts.map((post) => (

    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <span>by <a href="">{post.user}</a></span>
    </div>
    
 ))

 
return (
    <div>
        {renderdPosts}
    </div>
  )
}

export default PostLIst