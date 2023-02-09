
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { selectAllUsers,removeUser } from './userSlice'

const User = () => {
    const users = useSelector(selectAllUsers);
      const dispatch = useDispatch();
    console.log(users);
return (
    <>
        {
            users.map((user,id) =>{
                
                return(

                    <div key={id}>
                       <h3>{user}</h3> 
                       <button type='button' onClick={() => dispatch(removeUser(id))}>delete</button>
                    </div>
                )
            })
        }
     
    </>
  )
}

export default User