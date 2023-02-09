import React from 'react'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { addPost } from './PostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../Users/userSlice'
const AddPost = () => {
     const dispatch = useDispatch();
     const [title,setTitle] = useState('')
     const [content,setContent] = useState('')
     const [userName,setUserName] = useState('')
 

     const users = useSelector(selectAllUsers);
     const onSubmit = () => {
        console.log("jgwrijg")
        if(title && content) {
          
            const NewPost ={
                id:nanoid(),
                title: title,
                content: content,
                user: userName,
              
            }
            
           dispatch(addPost(NewPost));

           setTitle('')
           setContent('')
        }
     }
     const usersOptions = users.map(user => (
        <option key={user.id} value={user.name}>
            {user.name}
        </option>
    ))

     const canSave = Boolean(title) && Boolean(content) && Boolean(userName)

  return (
    <div>
        <form >
            
            <label >Post Name</label>
            <input type="text" value={title} 
                  onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userName} onChange={(e) => setUserName(e.target.value)}>
                    <option value=""></option>
                    {usersOptions}
                </select>

            <label>Write the content</label>
            <textarea  value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={onSubmit}  disabled={!canSave} type="button">Add content</button>
        </form>


    </div>
  )
}

export default AddPost