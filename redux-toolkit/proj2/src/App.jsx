import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostLIst from './features/Post/PostLIst'
import AddPost from './features/Post/AddPost'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import SinglePostPage from './features/Post/SinglePostPage'
import { EditPostForm } from './features/Post/EditPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/posts/:postId' element={<SinglePostPage/>}/>
      <Route path='/editPost/:postId' element={<EditPostForm/>}/>
    </Routes>
  )
}

export default App
  