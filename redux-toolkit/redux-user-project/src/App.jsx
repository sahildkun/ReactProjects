import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chance from 'chance'
import { useDispatch } from 'react-redux'
import { addUser ,deleteUser,removeUser} from './features/Users/userSlice'
import User from './features/Users/userList'
function App() {
  const [count, setCount] = useState(0)
  var chance = new Chance();
  
   const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>list of users</h1>
      <User/>
      <button type='button' onClick={() => dispatch(addUser(chance.name()))}>Add users</button>
      <button type='button' onClick={() => dispatch(deleteUser())}>DELETE</button>
     
    </div>
  )
}

export default App
