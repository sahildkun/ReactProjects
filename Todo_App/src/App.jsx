import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const[todoList,setTodoList] = useState([]);
  console.log(todo);
  console.log(todoList);
  // const handleClick = () => {
  //   setTodo("hi")
  // }
  const addTodotoList = () => {
    if(todo != ''){
    setTodoList([...todoList,todo]);
    setTodo("");
    }
  }
  const deleteTodo = (text) => {
     const newTodoList = todoList.filter((elem) =>(elem != text));
     setTodoList(newTodoList);
  }
  const handleKey= (event) => {
    if(event.key == 'Enter'){
      addTodotoList();
    }
  }
  
  useEffect(() => {
   setTodoList(JSON.parse(window.localStorage.getItem('todos')));
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList])


  return (

    <div className="mx-auto my-10 text-center flex flex-col gap-4">
     <div>
      <h1 className='text-5xl  font-serif'>TODO APP</h1>
     </div>
     <div className='space-x-3'>
      <input type="text" 
      name="input"
      value={todo} 
      onChange={(event) => {setTodo(event.target.value)}}
      placeholder='press enter or click on add button to create a tOdO' 
      onKeyDown={handleKey}
      id="" 
      className='border-2 border-black px-2 py-1 w-[30rem]'/>
      <button type="submit" className='text-white bg-black px-2 py-1 hover:bg-gray-600' onClick={addTodotoList} >ADD</button>
     </div>

     <div className='mx-[32rem]'>
      {
        todoList.length > 0 ? (
        todoList.map((elem ,key) => {
        return (  
            <>
            <div className='flex flex-auto items-center justify-between m-5'>
            <h1 key={key} className="text-left">{elem}</h1>
            <button onClick={() => deleteTodo(elem)} className="bg-black text-white p-2 "> DELETE</button>
            </div>
            </>
          )
        })
      ) : (
<div>

</div>
      )
      }
     </div>

    </div>
  )
}

export default App
