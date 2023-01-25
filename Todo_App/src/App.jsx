import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { motion } from 'framer-motion';
import videoBg1 from '../src/assets/production ID_3832194.mp4'
import videoBg2 from '../src/assets/production ID_4836402.mp4'
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
    <div>
      <video src={videoBg2} autoPlay loop muted  className='absolute block md:hidden' id='videoBg'/>
      <video src={videoBg2} autoPlay loop muted  className='absolute hidden md:block' id='videoBg'/>
    <div className=" mx-0 md:mx-12  text-center flex flex-col gap-y-4" id='relative'>
     <div>
      <motion.p className='text-5xl text-white md:text-gray-800  md:text-5xl pt-44 pb-2 font-serif' animate={{   }} transition={{ease:'easeIn'}}>TODO APP</motion.p>
     </div>
     <form className='space-x-3 space-y-2' onSubmit={handleSubmit}>
      <input type="text" 
      name="input"
       value={value}
      onChange={(event) => {setValue(event.target.value)}}
      placeholder='Add todo ' 
      onKeyDown={handleKey}
      id="" 
      className='border-2 border-black px-3 py-3 md:w-[30rem] bg-[#0000006c] text-white rounded-full'/>
      <button type="submit" className='text-white bg-gray-600 opacity-60 shadow-2xl p-3 font-light hover:bg-black rounded-lg' onClick={handleSubmit} >ADD</button>
     </form>

     <div className='mx-auto w-60 md:w-96'>
      {
        todoList.length > 0 ? (
        todoList.map((elem ,key) => {
         console.log(elem.todoStatus);
        return (  
            <>
            
            <motion.div className='flex flex-auto items-center   justify-between my-5 bg-[#4037376c] px-1 py-[0.5rem] rounded-lg border-2 border-gray-900' animate={{scale:1.4}} transition={{duration:0.5}}>
            <h1 key={key} className={`text-left text-xs max-w-[7rem] font-mono line-clamp-2 md:max-w-md ${elem.todoStatus ? 'text-gray-500 line-through' : 'text-white'} `}>{elem.todoData}</h1>
            <div className='space-x-1 md:space-x-4'>
            <button onClick={() => markTodo(key)} className="bg-green-600 text-white  p-1 md:p-2  text-[7px] md:text-xs font-thin rounded-lg">DONE</button>
            <button onClick={() => deleteTodo(elem)} className="bg-red-600 text-white p-1 md:p-2  text-[7px] md:text-xs rounded-lg"> DELETE</button>
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
    </div>
  )
}

export default App
