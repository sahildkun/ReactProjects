import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'

const POSTS = [ 
  {id:1 , title: "Post 1"},
  {id:2 , title: "Post 2"}
]

function App() {
  const querydata =  useQuery({
    queryKey: ['posts'], // a unique identifier
    queryFn: () =>wait(1000).then(() => [...POSTS])
   })

   if(querydata.isLoading) return <h1>loading...</h1>
   if(querydata.isError) return <h2>an error ocurred</h2>

   

  return (
    <div className="">
      {querydata.data.map((post) => {
        return(
        <><h1>{post.id}:{post.title}</h1>
        
        </>
     ) })}
    </div>
  )
}

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve,duration))
}

export default App


//useQuery and useMutation are two custom hooks we get from react query 

