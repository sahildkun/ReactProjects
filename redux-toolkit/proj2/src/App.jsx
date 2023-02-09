import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostLIst from './features/Post/PostLIst'
import AddPost from './features/Post/AddPost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddPost/>
      <PostLIst/>
    </div>
  )
}

export default App
  