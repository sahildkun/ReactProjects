import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SinglePostPage = () => {

    const { postId } = useParams()

    const post = useSelector(state =>
        state.posts.posts.find(post => post.id === postId)
     
      )
   
      if (!post) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
      }
  return (
    <div>
     <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <br/>
        <br/>
        <Link to={'/'}>
        home
        </Link>
      </article>

    </div>
  )
}

export default SinglePostPage