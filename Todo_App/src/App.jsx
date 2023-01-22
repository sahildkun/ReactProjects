import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion';

function App() {
  const [todo, setTodo] = useState({todoData:"" , todoStatus:false});
  const[todoList,setTodoList] = useState([]);
  const [value,setValue] = useState('');

  //handling the form submit on add button 
  const handleSubmit =(e) => {
     e.preventDefault()
     if(!value)  return;
     addTodotoList(value);
     setValue('');

    }
    //adding a data to todo list
  const addTodotoList = (todoData) => {
   if(value != ''){
    setTodoList([...todoList,{todoData}]);
   }
   
  }
  //deleting a todo
  const deleteTodo = (text) => {
     const newTodoList = todoList.filter((elem) =>(elem != text));
     setTodoList(newTodoList);
  }

  //confusion cant understand why showingerror
  const markTodo = (index) => {
    //  const newTodolist = [...todo];
    const newTodolist = [...todoList];
    newTodolist[index].todoStatus = true;
    console.log(newTodolist);
    setTodoList(newTodolist);
  }

  //for key press enter to trigger a add todo
  const handleKey= (event) => {
    if(event.key == 'Enter'){
      handleSubmit();
    }
  }
  
  useEffect(() => {
   setTodoList(JSON.parse(window.localStorage.getItem('todos')));
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList])


  return (

    <div className="mx-12 my-10 text-center flex flex-col gap-y-4">
     <div>
      <motion.p className='text-md md:text-5xl  font-serif' animate={{   }} transition={{duration:1.3}}>TODO APP</motion.p>
     </div>
     <form className='space-x-3 space-y-2' onSubmit={handleSubmit}>
      <input type="text" 
      name="input"
       value={value}
      onChange={(event) => {setValue(event.target.value)}}
      placeholder='Add todo ' 
      onKeyDown={handleKey}
      id="" 
      className='border-2 border-black px-2 py-1 md:w-[30rem]'/>
      <button type="submit" className='text-white bg-black px-2 py-1 hover:bg-gray-600' onClick={handleSubmit} >ADD</button>
     </form>

     <div className='mx-auto sm:w-44 md:w-96'>
      {
        todoList.length > 0 ? (
        todoList.map((elem ,key) => {
         console.log(elem.todoStatus);
        return (  
            <>
            
            <motion.div className='flex flex-auto items-center   justify-between my-5 bg-gray-800 px-1 py-[0.5rem] rounded-lg' animate={{scale:1.4}} transition={{duration:1}}>
            <h1 key={key} className={`text-left text-xs max-w-[5rem] line-clamp-3 md:max-w-md ${elem.todoStatus ? 'text-gray-500 line-through' : 'text-white'} `}>{elem.todoData}</h1>
            <div className='space-x-1 md:space-x-4'>
            <button onClick={() => markTodo(key)} className="bg-green-600 text-white p-[0.05rem] md:p-2 text-xs font-thin rounded-lg"> DONE</button>
            <button onClick={() => deleteTodo(elem)} className="bg-red-600 text-white p-1 md:p-2 text-xs rounded-lg"> DELETE</button>
            </div>
            </motion.div>
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
