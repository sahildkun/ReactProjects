import React from 'react'
import PostLIst from '../features/Post/PostLIst'
import AddPost from '../features/Post/AddPost'
const Home = () => {
  return (
    <div>
        <AddPost/>
        <PostLIst/>
    </div>
  )
}

export default Home